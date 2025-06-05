import { Router } from "express";
import userController from "../controllers/userController.js";
const router = Router();

router
  .post("/", userController.createUser)
  .post("/login", userController.logIn)
  .post("/logout", userController.logOut)
  .put("/:id", userController.updateUser)
  .delete("/:id", userController.deleteUser);

export default router;
