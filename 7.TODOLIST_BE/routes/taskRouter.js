//rutas es el path: get,post,put,delete

import { Router } from "express";
import taskController from "../controllers/taskController.js";
import verifyToken from "../midleware/verifyToken.js";
const router = Router();
router.use(verifyToken.validateToken);
router
  .get("/:id", taskController.getTask)
  .post("/", taskController.createTask)
  .put("/:id", taskController.updateTask)
  .delete("/:id", taskController.deleteTask);

export default router;
