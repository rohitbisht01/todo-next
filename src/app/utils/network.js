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

export async function signUpUser(user) {
  const result = await httpAxios
    .post("/api/users", user)
    .then((res) => res.data);
  return result;
}
