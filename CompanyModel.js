import mongoose from "mongoose";
import bcrypt from "bcrypt";
import connectDB from "../config/db.js";

const companyDB = await connectDB(); // ✅ Get companyDB connection

const CompanySchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true, minlength: 5 },
    phone: { type: String, required: true, match: /^[0-9]{10}$/ },
    password: { type: String, required: true },
    companyName: { type: String, required: true },
    companyRegistrationId: { type: String, required: true, unique: true },
    companyType: { type: String, required: true },
    mainAddress: { type: String, required: true },
    address1: { type: String, required: true },
    address2: { type: String, required: true },
    photo: { type: String, default: "default-company.png" },
  },
  { timestamps: true }
);

CompanySchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

// ✅ Use companyDB to register model
const Company = companyDB.model("Company", CompanySchema);
export default Company;
