import UserModel from "../Models/userModel.js";
import bcrypt from "bcrypt";
//registering a new user
export const registerUser = async (req, res) => {
  const { username, lastname, password, firstname } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(password, salt);
  const newUser = new UserModel({ username, lastname, hashedPass, firstname });
  try {
    await newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
