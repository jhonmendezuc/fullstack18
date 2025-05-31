const getTask = (req, res) => {
  res.json({ message: "obteniendo tarea", tasks });
};

const createTask = (req, res) => {
  const body = req.body;
  console.log(body);
  res.json({ message: "creando tarea", body });
};
const updateTask = (req, res) => {
  const id = req.params.id;
  const body = req.body;
  console.log(id, body);
  res.json({ message: "actualizando tarea", id, body });
};
const deleteTask = (req, res) => {
  const id = req.params.id;
  console.log(id);
  res.json({ message: "eliminando tarea", id });
};

export default {
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
