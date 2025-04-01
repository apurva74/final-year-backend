import mongoose from "mongoose";
import bcrypt from "bcrypt";

const FacultySchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true, minlength: 5 },
    phone: { type: String, required: true, match: /^[0-9]{10}$/ },
    password: { type: String, required: true },
    collegeName: { type: String, required: true },
    designation: { type: String, required: true },
    collegeAddress: { type: String, required: true },
    about: { type: String, required: true },
    skills: { type: [String], required: true },
    photo: { type: String, default: "default-profile.png" },
  },
  { timestamps: true }
);

FacultySchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

const Faculty = mongoose.model("Faculty", FacultySchema);
export default Faculty;
