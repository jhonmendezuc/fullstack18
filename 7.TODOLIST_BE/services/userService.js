import bcript from "bcrypt";
import { PrismaClient } from "@prisma/client";
import { ObjectId } from "mongodb";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

const createUser = async (body) => {
  body.password = hashPassword(body.password);
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
  const data = await prisma.user.delete({
    where: {
      id: new ObjectId(id),
    },
  });
  return data;
};

const updateUser = async (id, body) => {
  body.password = hashPassword(body.password);
  const data = await prisma.user.update({
    where: {
      id: new ObjectId(id),
    },
    data: {
      name: body.name,
      email: body.email,
      password: body.password,
    },
  });
  return data;
};

const login = async (body) => {
  const data = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });
  if (data) {
    const validatePass = await comparePassword(body.password, data.password);
    if (!validatePass) {
      return "password incorrecto";
    }
    const user = {
      ...data,
      password: "",
    };
    const token = jwt.sign(user, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });
    return token;
  }
  return "usuario no encontrado";
};

async function hashPassword(password) {
  const salt = await bcript.genSaltSync(10);
  return bcript.hashSync(password, salt);
}

async function comparePassword(passBody, passBd) {
  const validatePass = await bcript.compare(passBody, passBd);
  return validatePass;
}

export default {
  createUser,
  deleteUser,
  updateUser,
  login,
};
