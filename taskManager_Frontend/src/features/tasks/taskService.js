import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const getTasks = async () => {
  const response = await api.get("/tasks");
  return response.data;
};

export const createTask = async (title) => {
  const response = await api.post("/tasks", {
    title,
  });

  return response.data;
};