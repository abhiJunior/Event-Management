import mongoose from "mongoose";

const EventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },

    // Multiple assigned profiles
    profiles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Profile",
        required: true
      }
    ],

    // Event timezone
    timezone: { type: String, required: true },

    // Always store timestamps in UTC
    startAtUTC: { type: Date, required: true },
    endAtUTC: { type: Date, required: true },

    // Logs for changes - updated structure to match frontend
    logs: [
      {
        changedAtUTC: { type: Date, default: Date.now },
        changes: {
          type: Map,
          of: {
            from: mongoose.Schema.Types.Mixed,
            to: mongoose.Schema.Types.Mixed
          }
        }
      }
    ]
  },
  { timestamps: true }
);

const Event = mongoose.model("Event", EventSchema);
export default Event;