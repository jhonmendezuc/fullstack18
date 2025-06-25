import React, { useState } from "react";
import UserService from "../services/UserService.js";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Alert,
} from "@mui/material";

const LoginForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!email || !password) {
      setError("Por favor, completa todos los campos.");
      return;
    }
    const response = await UserService.logIn(email, password);
    // Simulación de autenticación
    console.log(response.data);
    switch (response.data) {
      case "password incorrecto":
        setError("Contraseña incorrecta.");
        break;
      case "usuario no encontrado":
        setError("Usuario no encontrado.");
        break;
      default:
        setSuccess(true);
        props.onLogin(response.data);
        break;
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#f5f5f5"
    >
      <Paper elevation={3} sx={{ padding: 4, width: 350 }}>
        <Typography variant="h5" gutterBottom>
          Iniciar sesión
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Correo electrónico"
            variant="outlined"
            fullWidth
            margin="normal"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            label="Contraseña"
            variant="outlined"
            fullWidth
            margin="normal"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {error}
            </Alert>
          )}
          {success && (
            <Alert severity="success" sx={{ mt: 2 }}>
              ¡Inicio de sesión exitoso!
            </Alert>
          )}

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 3 }}
          >
            Iniciar sesión
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default LoginForm;
