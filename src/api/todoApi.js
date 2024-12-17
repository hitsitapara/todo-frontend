import axios from "axios";

const API_BASE_URL = "https://todo-backend-pied.vercel.app/api/todos";

export const getTodos = (data) => axios.get(API_BASE_URL, data);
export const addTodo = (data) => axios.post(API_BASE_URL, data);
export const updateTodo = (id, data) =>
  axios.put(`${API_BASE_URL}/${id}`, data);
export const deleteTodo = (id) => axios.delete(`${API_BASE_URL}/${id}`);
export const markCompleted = (id) =>
  axios.patch(`${API_BASE_URL}/${id}/complete`);
