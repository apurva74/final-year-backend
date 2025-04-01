import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/AuthRoutes.js";  // ✅ Import Auth Routes

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);  // ✅ Use Auth Routes

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
