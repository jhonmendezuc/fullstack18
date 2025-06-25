import { useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import "./styles.css";

const DeleteBnt = ({ onClick }) => {
  return (
    <IconButton aria-label="delete" onClick={onClick}>
      <DeleteIcon id="delete" />
    </IconButton>
  );
};

const Task = (props) => {
  const { data, clickTask } = props;
  const stylesTitle = {
    color: "red",
  };

  const stylesDescription = {
    color: "blue",
  };

  useEffect(() => {
    console.log("Se ha actualizado el cmp Tarea..");
  });

  return (
    <div className="task">
      <ul>
        {data.map((task, index) => {
          return (
            <li key={index} id={task.id}>
              <h2 style={stylesTitle}>{task.title}</h2>
              <p style={stylesDescription}>{task.description}</p>
              <DeleteBnt onClick={() => clickTask(task.id)} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Task;
