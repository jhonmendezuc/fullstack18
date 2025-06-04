import taskService from "../services/taskService.js";

const getTask = (req, res) => {
  const data = taskService.getTask();
  res.json({ message: "obteniendo tarea", data });
};

const createTask = async (req, res) => {
  const body = req.body;
  const data = await taskService.createTask(body);
  res.json({ message: "creando tarea", data });
};
const updateTask = (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const data = [
    {
      datos: "tareas",
    },
  ];
  res.json({ message: "actualizando tarea", id, body });
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
