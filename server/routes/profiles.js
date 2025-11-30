import express from "express";
import { createProfile,getProfiles,updateProfileTimezone } from "../controller/profileController.js";

const router = express.Router();

router.post("/", createProfile);
router.get("/", getProfiles);
router.patch("/:id", updateProfileTimezone);

export default router;
