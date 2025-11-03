
import mongoose from 'mongoose';
const MONGO_URL="mongodb+srv://garima_gds:garima_gds@cluster0.m5owpru.mongodb.net/?appName=Cluster0";

export async function connectDB() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("✅ MongoDB connected successfully");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
  }
}

