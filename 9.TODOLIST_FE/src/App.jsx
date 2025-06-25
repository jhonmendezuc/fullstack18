import { useState, useEffect } from "react";
import Task from "./components/task/Task.jsx";
import { jwtDecode } from "jwt-decode";
import { Box, Grid, Typography, Button } from "@mui/material";
import LoginForm from "./components/login/Login.jsx";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [userName, setUserName] = useState("");

  useEffect(() => {
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUserName(decoded.name);
      } catch (err) {
        console.error("Token inválido:", err);
        setToken(null);
        localStorage.removeItem("token");
      }
    }
  }, [token]);

  const handleLogin = (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
  };

  const logOut = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  if (!token) {
    return <LoginForm onLogin={handleLogin} />;
  }

  const boxPrincipal = {
    height: "100vh",
    backgroundColor: "#fffffe",
    color: "#00214d",
    p: 4,
  };
  return (
    <>
      <Box sx={boxPrincipal}>
        <Box
          sx={{
            border: "1px solid #00214d",
            borderRadius: 2,
            p: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              p: 4,
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: "#00214d",
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
            >
              Todo List
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: "#00214d",
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
            >
              bienvenido
              <span
                style={{
                  color: "#ff5470",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                }}
              >
                {" "}
                {userName}
              </span>
            </Typography>
          </Box>
          <Grid container spacing={2}>
            <Task />
          </Grid>
        </Box>
        <Button
          sx={{
            float: "right",
            border: "none",
          }}
          variant="outlined"
          color="error"
          onClick={logOut}
        >
          Cerrar sesión
        </Button>
      </Box>
    </>
  );
}

export default App;
