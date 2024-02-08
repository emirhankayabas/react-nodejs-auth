import mongoose from "mongoose";

const userShema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Lütfen adinizi girin!"],
    },
    lastName: {
      type: String,
      required: [true, "Lütfen soyadinizi girin!"],
    },
    email: {
      type: String,
      required: [true, "Lütfen email adresinizi girin!"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Lütfen sifrenizi girin!"],
      minLenght: [6, "Sifreniz en az 6 karakter olmalidir!"],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userShema);
export default User;
