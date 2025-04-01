import mongoose from "mongoose";

const companyDB_URI = process.env.COMPANY_MONGO_URI;

const connectCompanyDB = async () => {
  try {
    await mongoose.connect(companyDB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("✅ Connected to CompanyDB");
  } catch (error) {
    console.error("❌ CompanyDB Connection Error:", error.message);
  }
};

export default connectCompanyDB;
