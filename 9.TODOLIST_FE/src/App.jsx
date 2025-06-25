import Task from "./components/task/Task.jsx";
import config from "./config.js";
import { jwtDecode } from "jwt-decode";
import { Box, Grid, Typography } from "@mui/material";
function App() {
  const { TOKEN } = config;
  const userName = jwtDecode(TOKEN).name;
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
      </Box>
    </>
  );
}

export default App;
