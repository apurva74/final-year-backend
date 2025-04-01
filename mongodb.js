import mongoose from "mongoose";

const facultyDB_URI = process.env.FACULTY_MONGO_URI;

const connectFacultyDB = async () => {
  try {
    await mongoose.connect(facultyDB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("✅ Connected to FacultyDB");
  } catch (error) {
    console.error("❌ FacultyDB Connection Error:", error.message);
  }
};

export default connectFacultyDB;
