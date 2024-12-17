const User = require("../models/User");

// create a user
exports.createUser = async (req, res) => {
  const { username, email, password, role } = req.body;
  try {
    const user = new User({ username, email, password, role });
    await user.save();
    res.status(200).json({ message: "User created successfully", user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// update user
exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { username, email, password, role } = req.body;
  try {
    const user = await User.findById(id);
    user.username = username || user.username;
    user.email = email || user.email;
    user.role = role || user.role;
    if (password) {
      user.password = password;
    }
    await user.save();
    res.json({ message: "User updated successfully", user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// delete user
exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndDelete(id);
    res.status(200).json({ message: "User deleted successfull", user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
