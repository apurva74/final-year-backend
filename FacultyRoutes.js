import express from "express";
import Faculty from "../models/FacultyModel.js";

const router = express.Router();

// ✅ Fetch all faculty members
router.get("/", async (req, res) => {
  try {
    const faculties = await Faculty.find({});
    res.json(faculties);
  } catch (error) {
    console.error("❌ Error fetching faculty data:", error);
    res.status(500).json({ message: "Failed to fetch faculty data" });
  }
});

export default router;
