import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const facultyDBURI = process.env.FACULTY_MONGO_URI;
const companyDBURI = process.env.COMPANY_MONGO_URI;

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", true);
    mongoose.set("debug", true);

    // ✅ Connect to FacultyDB first
    await mongoose.connect(facultyDBURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`✅ Faculty DB Connected: ${mongoose.connection.host}`);

    // ✅ Create second connection for CompanyDB
    const companyDB = mongoose.createConnection(companyDBURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`✅ Company DB Connected: ${companyDB.host}`);

    return companyDB; // Return company connection for models
  } catch (error) {
    console.error(`❌ Database Connection Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
