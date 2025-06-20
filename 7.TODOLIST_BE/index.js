import express, { json } from "express";
import dotenv from "dotenv";
import taskRoutes from "./routes/taskRouter.js";
import userRoutes from "./routes/userRouter.js";
import cors from "cors";
const app = express();

dotenv.config();

//midleware cors
app.use(
  cors({
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
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
