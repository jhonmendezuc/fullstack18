import axios from "axios";
import config from "../../config.js";

const { API_BACKEND } = config;

const logIn = async (email, password) => {
  const data = {
    email,
    password,
  };
  try {
    const response = await axios.post(`${API_BACKEND}/user/login`, data, {});
    return response.data;
  } catch (error) {
    console.error("error de lectura", error);
  }
};

export default {
  logIn,
};
