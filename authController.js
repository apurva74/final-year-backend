import Faculty from "../models/FacultyModel.js";
import Company from "../models/CompanyModel.js";
import connectFacultyDB from "../config/mongodb.js";
import connectCompanyDB from "../config/companydb.js";
import bcrypt from "bcrypt";

// 🔹 Register User (Faculty or Company)
export const registerUser = async (req, res) => {
    const { profile, username, phone, password } = req.body;
  
    try {
      if (!password) {
        return res.status(400).json({ message: "Password is required" });
      }
  
      let newUser;
      const hashedPassword = await bcrypt.hash(password, 10); // ✅ Hash only if password exists
  
      if (profile === "College Faculty") {
        await connectFacultyDB();
        newUser = new Faculty({ ...req.body, password: hashedPassword });
      } else {
        await connectCompanyDB();
        newUser = new Company({ ...req.body, password: hashedPassword });
      }
  
      await newUser.save();
      res.status(201).json({ message: `${profile} registered successfully!` });
    } catch (error) {
      console.error("❌ Registration Error:", error);
      res.status(500).json({ message: "Registration failed", error: error.message });
    }
  };
  
