import { id } from "zod/locales";
import User from "../models/User.js";

const getUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: ["id", "name", "email"],
    });
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createUser = async (req, res) => {
  try {
    const {
      body: { name, email, password },
    } = req;
    const found = await User.findOne({
      where: { email },
    });
    if (found) throw new Error("User with that email already exists");
    const user = await User.create(req.body);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const user = await User.findByPk(id, {
      attributes: ["id", "name", "email"],
    });
    if (!user) throw new Error("User Not found", { cause: 404 });
    res.status(200).json(user);
  } catch (error) {
    res.Error(500).json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    const user = await User.findByPk(id);
    if (!user) throw new Error("User not found", { cause: 404 });
    const updatedUser = await user.update(req.body);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status.Error(500).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const user = await User.findByPk(id);
    if (!user) throw new Error("User not found", { cause: 404 });
    await user.destroy();
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { getUsers, createUser, getUserById, updateUser, deleteUser };
