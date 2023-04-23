const User = require("../models/User");

const updateuser = async (req, res) => {
  const id = req.params.id;
  try {
    const updated = await User.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json(error);
  }
};
//delete user
const deleteuser = async (req, res) => {
  const id = req.params.id;
  try {
    const deleted = await User.findByIdAndDelete(id);
    res.status(200).json("deleted");
  } catch (error) {
    res.status(500).json(error);
  }
};
const getuser = async (req, res) => {
  try {
    const fetched = await User.find();

    res.status(200).send(fetched);
  } catch (error) {
    res.status(500).json(error);
  }
};
const getsingleuser = async (req, res) => {
  const id = req.params.id;

  try {
    const fetched = await User.findById(id);
    if (!fetched) {
      return res.status(404).json("no such user");
    }

    res.status(200).send(fetched);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { getuser, updateuser, deleteuser, getsingleuser };
