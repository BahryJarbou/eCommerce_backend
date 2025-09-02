import User from "../models/User.js";

const getUsers = async (req, res) => {
  const users = await User.findAll();
  res.json(users);
};

const createUser = async (req, res) => {
  const {
    body: { name, email, password },
  } = req;
  const found = await User.findOne({ where: { email } });
  if (found) throw new Error("User with that email already exists");
  const user = await User.create(req.body);
  res.json(user);
};

const getUserById = async (req, res) => {
  const {
    params: { id },
  } = req;
  const user = await User.findByPk(id);
  if (!user) throw new Error("User Not found", { cause: 404 });
  res.status(200).json({ user });
};

const updateUser = async (req, res) => {
  const {
    params: { id },
  } = req;

  const user = await User.findByPk(id);
  if (!user) throw new Error("User not found", { cause: 404 });
  await user.update(req.body);
  res.status(200).json(user);
};

const deleteUser = async (req, res) => {
  const {
    params: { id },
  } = req;
  const user = await User.findByPk(id);
  if (!user) throw new Error("User not found", { cause: 404 });
  await user.destroy();
  res.status(200).json("User deleted successfully");
};

export { getUsers, createUser, getUserById, updateUser, deleteUser };
