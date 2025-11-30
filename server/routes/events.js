import express from "express";
import { createEvent,getEventsForProfile,getEventById,updateEvent } from "../controller/eventController.js";

const router = express.Router();
// @path : http://loc
router.post("/", createEvent);
router.get("/profile", getEventsForProfile);
router.get("/:id", getEventById);
router.put("/:id", updateEvent);

export default router;
