import taskService from "../services/taskService.js";

const getTask = async (req, res) => {
  const userId = req.params.id;
  const data = await taskService.getTask(userId);
  res.json({ message: "obteniendo tarea", data });
};

const createTask = async (req, res) => {
  const body = req.body;
  const data = await taskService.createTask(body);
  res.json({ message: "creando tarea", data });
};
const updateTask = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const data = taskService.updateTask(id, body);
  res.json({ message: "actualizando tarea", data });
};
const deleteTask = async (req, res) => {
  const id = req.params.id;
  const data = await taskService.deleteTask(id);
  res.json({ message: "eliminando tarea", data });
};

export default {
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
