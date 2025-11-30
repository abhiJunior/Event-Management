import Profile from "../model/Profile.js";
// Create profile
// method : Post
// des : createProfile 
// route : http://localhost:5000/api/profiles/
export const createProfile = async (req, res) => {
  try {
    const {name} = req.body;

    if (!name) return res.status(400).json({ message: "Name is required" });

    const profile = await Profile.create({ name });
    res.status(201).json(profile);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all profiles
// method : Get
// des : getProfiles
// route : http://localhost:5000/api/profiles/
export const getProfiles = async (req, res) => {
  try {
    const profiles = await Profile.find();
    res.json(profiles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//Update timezone
export const updateProfileTimezone = async (req, res) => {
  try {
    const { timezone } = req.body;
    const profile = await Profile.findByIdAndUpdate(
      req.params.id,
      { timezone },
      { new: true }
    );

    if (!profile) return res.status(404).json({ message: "Profile not found" });

    res.json(profile);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
