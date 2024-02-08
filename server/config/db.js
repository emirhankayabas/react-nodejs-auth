import mongoose from "mongoose";

const DATABASE_URL = "";

async function connectToDatabase() {
  if (!DATABASE_URL) {
    console.error("DATABASE_URL hatali!");
    process.exit(1);
  }

  try {
    await mongoose.connect(DATABASE_URL);

    console.log("MongoDB'ye baglanildi!");
  } catch (error) {
    console.error("MongoDB'ye baglanirken hata olustu!", error);
    process.exit(1);
  }
}

export default connectToDatabase;