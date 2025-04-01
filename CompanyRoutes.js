import express from "express";
import Company from "../models/CompanyModel.js";

const router = express.Router();

// ✅ Fetch all companies
router.get("/", async (req, res) => {
  try {
    const companies = await Company.find({});
    res.json(companies);
  } catch (error) {
    console.error("❌ Error fetching companies:", error);
    res.status(500).json({ message: "Failed to fetch companies" });
  }
});

export default router;
