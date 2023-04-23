const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const { username, email, password, photo } = req.body;
  const salt = bcrypt.genSaltSync(10);
  const hashed = bcrypt.hashSync(password, salt);
  try {
    const exist = await User.findOne({ email });
    if (!exist) {
      const newuser = new User({ username, photo, password: hashed, email });
      await newuser.save();

      res.status(200).json("user added successfully");
    } else {
      res.status(200).json("user is already exist");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
const login = async (req, res) => {
  const { email } = req.body;
  try {
    const found = await User.findOne({ email });
    if (!found) {
      return res.status(404).json("You are not registered");
    }
    check = await bcrypt.compare(req.body.password, found.password);
    if (!check) {
      return res.status(401).json("one of the credential is incorrect");
    }
    const { password, role, ...rest } = found._doc;
    const token = jwt.sign(
      { id: found._id, role: found.role },
      process.env.SECRET_KEY,
      { expiresIn: "15d" }
    );
    res.cookie("accesstoken", token, {
      httpOnly: true,
      expires: token.expiresIn,
    });
    console.log({ token, role, ...rest });
    res.status(200).json({ token, role, ...rest });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { login, register };
