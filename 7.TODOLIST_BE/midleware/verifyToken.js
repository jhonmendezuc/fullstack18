import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const validateToken = (req, res, next) => {
  const headerAut = req.headers["authorization"];

  if (!headerAut) {
    return res.status(401).json({ message: "token no enviado" });
  }
  const token = headerAut.split(" ")[1];
  try {
    var dataUser = jwt.verify(token, process.env.SECRET_KEY);
    req.data = dataUser;
    next();
  } catch (error) {
    return res.status(401).json({ message: "token invalido" });
  }
};

export default { validateToken };
