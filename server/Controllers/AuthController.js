import UserModel from "../Models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
//registering a new user
export const registerUser = async (req, res) => {
  const { username, lastname, password, firstname } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(password, salt);
  const newUser = new UserModel({
    username,
    lastname,
    password: hashedPass,
    firstname,
  });
  try {
    const user = await newUser.save();
    const token = jwt.sign(
      { username: user.username, id: user._id },
      process.env.JWT_KEY,
      {
        expiresIn: "1h",
      }
    );
    res.status(200).json({ user, token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//login user
export const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await UserModel.findOne({ username: username });
    if (user) {
      const validity = await bcrypt.compare(password, user.password);
      if (!validity) {
        res.status(400).json("Wrong Password");
      } else {
        const token = jwt.sign(
          { username: user.username, id: user._id },
          process.env.JWT_KEY,
          {
            expiresIn: "1h",
          }
        );
        res.status(200).json({ user, token });
      }
    } else {
      res.status(404).json("User doesn't exists");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
