const validateToken = (req, res, next) => {
  const headerAut = req.headers["authorization"];
  if (!headerAut) {
    return res.status(401).json({ message: "token no enviado" });
  }
  next();
};

export default { validateToken };
