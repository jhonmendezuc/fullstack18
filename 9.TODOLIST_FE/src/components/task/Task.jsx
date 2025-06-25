import { forwardRef } from "react";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Switch,
  Box,
  TextField,
} from "@mui/material";
import Button from "@mui/material/Button";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import TaskService from "../services/TaskService.js";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const TaskCard = (props) => {
  const { id, title, description, status } = props.task;

  return (
    <Card variant="outlined" sx={{ mb: 2, borderRadius: 2, width: "300px" }}>
      <CardContent
        sx={{
          mb: 1,
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={1}
        >
          <Typography variant="h6">{title}</Typography>
          <Switch
            checked={status}
            onChange={(e) => props.updateTask(id, { status: e.target.checked })}
          />
        </Box>
        <Typography
          variant="body2"
          color="text.secondary"
          gutterBottom
        ></Typography>
        <Typography variant="caption" color="text.secondary">
          Descripción: {description}
        </Typography>
        <br />
        <Typography variant="caption" color="text.secondary">
          <Button
            onClick={() => props.deleteTask(id)}
            sx={{
              left: "60px",
              fontSize: "10px",
            }}
            variant="outlined"
            color="error"
          >
            Eliminar tarea
          </Button>
        </Typography>
      </CardContent>
    </Card>
  );
};

const Task = () => {
  const [tasks, setTasks] = useState([]);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    title: "",
    description: "",
    status: false,
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteTask = async (id) => {
    await TaskService.deleteTask(id);
    alert("tarea eliminada");
  };

  const updateTask = async (id, data) => {
    await TaskService.updateTask(id, data);
    alert("tarea actualizada");
  };

  const createTask = async () => {
    if (!form.title) return alert("el titulo es requerido");
    if (!form.description) return alert("la descripcion es requerida");
    await TaskService.createTask(form);
    alert("tarea creada");
    setOpen(false);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    async function getBooks() {
      const response = await TaskService.getTask();
      setTasks(response);
    }
    getBooks();
  }, [tasks]);

  return (
    <>
      <Fab
        onClick={handleClickOpen}
        aria-label="add"
        sx={{
          position: "fixed",
          bottom: 16,
          top: 16,
          right: 16,
          backgroundColor: "#fde24f",
          color: "#000000",
          "&:hover": {
            backgroundColor: "#00214d",
            color: "#fde24f",
          },
        }}
      >
        <AddIcon />
      </Fab>
      {tasks.map((task, index) => (
        <TaskCard
          task={task}
          key={index}
          deleteTask={deleteTask}
          updateTask={updateTask}
        />
      ))}
      <Dialog
        open={open}
        slots={{
          transition: Transition,
        }}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Crear tareas"}</DialogTitle>
        <DialogContent>
          <TextField
            onChange={handleChange}
            label="Titulo"
            margin="dense"
            name="title"
            fullWidth
          />
          <TextField
            onChange={handleChange}
            label="Descripcion"
            margin="dense"
            name="description"
            multiline
            rows={4}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button
            sx={{
              color: "#ff5470",
            }}
            onClick={handleClose}
          >
            Cancelar
          </Button>
          <Button
            sx={{ color: "#00214d", backgroundColor: "#fde24f" }}
            onClick={createTask}
          >
            Guardar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Task;
