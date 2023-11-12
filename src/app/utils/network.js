import axios from "axios";

export const httpAxios = axios.create({
  baseURL: process.env.BASE_URL,
});

export async function addTask(task) {
  const result = await httpAxios
    .post("/api/tasks", task)
    .then((res) => res.data);
  return result;
}

export async function getTaskOfUser(userId) {
  const result = await httpAxios
    .get(`/api/users/${userId}/tasks`)
    .then((res) => res.data);
  return result;
}

export async function signUpUser(user) {
  const result = await httpAxios
    .post("/api/users", user)
    .then((res) => res.data);
  return result;
}

export async function loginUser(loginData) {
  const result = await httpAxios
    .post("/api/login", loginData)
    .then((res) => res.data);

  return result;
}

export async function currentUser() {
  const result = await httpAxios.get("/api/current").then((res) => res.data);
  return result;
}

export async function logout() {
  const result = await httpAxios.post("/api/logout").then((res) => res.data);
  return result;
}

export async function deleteTask(taskId) {
  const result = await httpAxios
    .delete(`/api/tasks/${taskId}`)
    .then((res) => res.data);
  return result;
}
