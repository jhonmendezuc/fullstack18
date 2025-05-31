//rutas es el path: get,post,put,delete

import { Router } from "express";
import taskController from "../controllers/taskController.js";
const router = Router();

router
  .get("/", taskController.getTask)
  .post("/", taskController.createTask)
  .put("/:id", taskController.updateTask)
  .delete("/:id", taskController.deleteTask);

export default router;
