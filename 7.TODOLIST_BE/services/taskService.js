import { PrismaClient } from "@prisma/client";
import { ObjectId } from "mongodb";

const prisma = new PrismaClient();

const getTask = () => {
  const data = [
    {
      datos: "tareas",
    },
  ];
  return data;
};

const createTask = async (body) => {
  const userId = new ObjectId(body.userId);
  const data = await prisma.task.create({
    data: {
      title: body.title,
      description: body.description,
      status: body.status,
      userId: userId,
    },
  });
  return data;
};

const deleteTask = async (id) => {
  const taskId = new ObjectId(id);
  const data = await prisma.task.delete({
    where: {
      id: taskId,
    },
  });
  return data;
};

export default {
  getTask,
  createTask,
  deleteTask,
};
