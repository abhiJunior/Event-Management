import Event from "../model/Event.js";
import mongoose from "mongoose";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";
import tz from "dayjs/plugin/timezone.js";

dayjs.extend(utc);
dayjs.extend(tz);

// ---------------- CREATE EVENT ----------------
// create event
// method : Post
// des : create event
// route : http://localhost:5000/api/events/
export const createEvent = async (req, res) => {
  try {
    const { title, profiles, timezone, start, end } = req.body;
    console.log(req.body)
    if (!title || !profiles?.length || !timezone || !start || !end) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // parse start/end in event timezone
    const startAt = dayjs.tz(start, timezone);
    const endAt = dayjs.tz(end, timezone);

    if (!endAt.isAfter(startAt)) {
      return res.status(400).json({ message: "End time must be after start time" });
    }

    const event = await Event.create({
      title,
      profiles,
      timezone,
      startAtUTC: startAt.utc().toDate(),
      endAtUTC: endAt.utc().toDate()
    });

    res.status(201).json(event);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ---------------- GET EVENTS BY PROFILE ----------------
// @desc : get events on the basis of profile
// path : http://localhost:5000/api/events/
// method : Get

export const getEventsForProfile = async (req, res) => {
  try {
    const { profileId } = req.query;

    

    if (!profileId) {
      return res.status(400).json({ 
        message: "Profile ID is required in query parameters" 
      });
    }

    // Validate MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(profileId)) {
      return res.status(400).json({ 
        message: "Invalid profile ID format" 
      });
    }

    const events = await Event.find({ 
      profiles: new mongoose.Types.ObjectId(profileId) 
    })
    .populate('profiles', 'name')
    .sort({ startAtUTC: 1 });

    

    res.json(events);
  } catch (err) {
    console.error("❌ Error in getEventsForProfile:", err);
    res.status(500).json({ 
      message: "Server error while fetching events",
      error: err.message 
    });
  }
};



// ---------------- UPDATE EVENT ----------------
export const updateEvent = async (req, res) => {
  try {
    const { id } = req.params;

    const event = await Event.findById(id);
    if (!event) return res.status(404).json({ message: "Event not found" });

    const { title, profiles, timezone, start, end } = req.body;

    // Store original values for logging
    const originalEvent = {
      title: event.title,
      profiles: [...event.profiles],
      timezone: event.timezone,
      startAtUTC: event.startAtUTC,
      endAtUTC: event.endAtUTC
    };

    const changes = new Map();

    // Update title if provided and changed
    if (title !== undefined && title !== event.title) {
      event.title = title;
      changes.set('title', { from: originalEvent.title, to: title });
    }

    // Update profiles if provided and changed
    if (profiles !== undefined) {
      const oldProfiles = originalEvent.profiles.map(p => p.toString());
      const newProfiles = profiles.map(p => p.toString ? p.toString() : p);
      
      if (JSON.stringify(oldProfiles.sort()) !== JSON.stringify(newProfiles.sort())) {
        event.profiles = profiles;
        changes.set('profiles', { from: [...originalEvent.profiles], to: [...profiles] });
      }
    }

    // Handle timezone and date updates
    if (timezone && start && end) {
      const startAt = dayjs.tz(start, timezone);
      const endAt = dayjs.tz(end, timezone);

      if (!endAt.isAfter(startAt)) {
        return res.status(400).json({ message: "End time must be after start time" });
      }

      const newStartUTC = startAt.utc().toDate();
      const newEndUTC = endAt.utc().toDate();

      // Check if dates actually changed
      if (newStartUTC.getTime() !== originalEvent.startAtUTC.getTime()) {
        event.startAtUTC = newStartUTC;
        changes.set('startAtUTC', { from: originalEvent.startAtUTC, to: newStartUTC });
      }

      if (newEndUTC.getTime() !== originalEvent.endAtUTC.getTime()) {
        event.endAtUTC = newEndUTC;
        changes.set('endAtUTC', { from: originalEvent.endAtUTC, to: newEndUTC });
      }

      if (timezone !== originalEvent.timezone) {
        event.timezone = timezone;
        changes.set('timezone', { from: originalEvent.timezone, to: timezone });
      }
    }

    // Only create log if there are actual changes
    if (changes.size > 0) {
      event.logs.push({
        changedAtUTC: new Date(),
        changes: changes
      });
    }

    await event.save();

    // Populate profiles for response
    await event.populate('profiles', 'name');

    res.json(event);
  } catch (err) {
    console.log("Error on updating:", err.message);
    res.status(500).json({ message: err.message });
  }
};
// ---------------- GET SINGLE EVENT (with logs) ----------------
export const getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id).populate("profiles");

    if (!event) return res.status(404).json({ message: "Event not found" });

    res.json(event);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
