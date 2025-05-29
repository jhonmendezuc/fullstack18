import express from "express";
import dotenv from "dotenv";
const app = express();
dotenv.config();
//crear un servidor: ip(127.0.0.1):puerto: ?

const PORT = process.env.PORT || 3000;
//RECURSOS string
const task = [
  {
    titulo: "tarea1",
  },
  {
    titulo: "tarea2",
  },
];

//PETICIONES: GET, POST, PUT, DELETE
app.get("/task", (solitud, respuesta) => {
  //obteniendo el recuso
  respuesta.send(task);
});

app.get("/saludo", (req, res) => {
  res.send("hola grupo de fullstack");
});

app.put("/task", (req, res) => {
  res.send("actualizando tarea...");
});

app.delete("/task", (req, res) => {
  res.send("eliminando tarea...");
});

app.post("/task", (req, res) => {
  const body = req.body;
  console.log(body);
  task.push(body);
  res.send("creando tarea...");
});

app.listen(PORT, () => {
  console.log(`SERVIDOR EJECUTANDOSE EN EL PUERTO ${PORT}...`);
});
