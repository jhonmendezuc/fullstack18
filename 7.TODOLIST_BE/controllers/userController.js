import bcript from "bcrypt";

const getUser = (req, res) => {
  res.json({ message: "obteniendo usuario" });
};

const createUser = (req, res) => {
  const body = req.body;
  const password = body.password;
  const salt = bcript.genSaltSync(10);

  const hash = bcript.hashSync(password, salt);
  console.log(hash);

  res.json({ message: "creando usuario", body });
};
const updateUser = (req, res) => {
  const id = req.params.id;
  const body = req.body;
  console.log(id, body);
  res.json({ message: "actualizando usuario", id, body });
};
const deleteUser = (req, res) => {
  const id = req.params.id;
  console.log(id);
  res.json({ message: "eliminando usuario", id });
};

const logIn = (req, res) => {
  const body = req.body;
  console.log(body);
  res.json({ message: "login", body });
};

const logOut = (req, res) => {
  const body = req.body;
  console.log(body);
  res.json({ message: "logout", body });
};

export default {
  getUser,
  createUser,
  updateUser,
  deleteUser,
  logIn,
  logOut,
};
