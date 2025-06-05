import { PrismaClient } from "@prisma/client";
import { ObjectId } from "mongodb";

const prisma = new PrismaClient();

const getTask = async (idUser) => {
  const data = await prisma.task.findMany({
    where: {
      userId: new ObjectId(idUser),
    },
  });
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

const updateTask = async (id, body) => {
  const data = await prisma.task.update({
    where: {
      id: new ObjectId(id),
    },
    data: {
      title: body.title,
      description: body.description,
      status: body.status,
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
  updateTask,
};
