import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createUser = async (body) => {
  const data = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
      password: body.password,
    },
  });
  return data;
};

const deleteUser = async (id) => {
  const data = await prisma.task.delete({
    where: {
      id: id,
    },
  });
  return data;
};

export default {
  createUser,
  deleteUser,
};
