import userService from "../services/userService.js";

const createUser = async (req, res) => {
  const body = req.body;
  const data = await userService.createUser(body);
  res.json({ message: "creando usuario", data });
};
const updateUser = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const data = await userService.updateUser(id, body);
  res.json({ message: "actualizando usuario", id, body });
};
const deleteUser = async (req, res) => {
  const id = req.params.id;
  const data = await userService.deleteUser(id);
  res.json({ message: "eliminando usuario", data });
};

const logIn = async (req, res) => {
  const body = req.body;
  const data = await userService.login(body);
  res.json({ message: "login", data });
};

const logOut = (req, res) => {
  const body = req.body;
  res.json({ message: "logout", body });
};

export default {
  createUser,
  updateUser,
  deleteUser,
  logIn,
  logOut,
};
