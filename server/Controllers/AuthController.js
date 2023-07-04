import UserModel from "../Models/userModel.js";
//registering a new user
export const registerUser = async (req, res) => {
  const { username, lastname, password, firstname } = req.body;
  const newUser = new UserModel({ username, lastname, password, firstname });
  try {
    await newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
