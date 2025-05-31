import express, { json } from "express";
import dotenv from "dotenv";
import taskRoutes from "./routes/taskRouter.js";
import userRoutes from "./routes/userRouter.js";

const app = express();

dotenv.config();

//midleware tipo respuesta
app.use(json());
//modleware routes
app.use("/task", taskRoutes);
app.use("/user", userRoutes);
//middleware notfound
app.use((req, res) => {
  res.status(404).json({ respuesta: "El recurso solicitado no existe" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`SERVIDOR EJECUTANDOSE EN EL PUERTO ${PORT}...`);
});
