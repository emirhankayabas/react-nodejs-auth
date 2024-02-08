import bcrypt from "bcrypt";

import User from "../models/User.js";

const UserController = {
  createUser: async (req, res) => {
    try {
      const { firstName, lastName, email, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);

      const createdUser = new User({
        firstName,
        lastName,
        email,
        password: hashedPassword,
      });

      await createdUser.save();
      res.status(201).json({ message: "Kullanici olusturuldu!" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

export default UserController;
