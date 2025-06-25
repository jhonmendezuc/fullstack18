import axios from "axios";
import config from "../../config.js";
import { jwtDecode } from "jwt-decode";

const { API_BACKEND } = config;
const TOKEN = localStorage.getItem("token");
const userId = jwtDecode(TOKEN).id;
const getTask = async () => {
  try {
    const response = await axios.get(`${API_BACKEND}/task`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    return response.data.data;
  } catch (error) {
    console.log("error de lectura de tareas", error);
  }
};

const deleteTask = async (id) => {
  try {
    const response = await axios.delete(`${API_BACKEND}/task/${id}`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log("error de lectura de tareas", error);
  }
};

const updateTask = async (id, data) => {
  try {
    const response = await axios.put(`${API_BACKEND}/task/${id}`, data, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log("error de lectura de tareas", error);
  }
};

const createTask = async (data) => {
  data.userId = userId;

  try {
    const response = await axios.post(`${API_BACKEND}/task`, data, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log("error de lectura de tareas", error);
  }
};

export default {
  getTask,
  deleteTask,
  updateTask,
  createTask,
};
