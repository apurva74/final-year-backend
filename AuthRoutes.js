import express from "express";
import { registerUser } from "../controllers/authController.js";  // ✅ Import controller

const router = express.Router();

router.post("/register", registerUser);  // ✅ Define registration route

export default router;
