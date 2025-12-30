import api from "./api";

// регистрация
export const registerUser = async ({ login, password, name }) => {
  const response = await api.post("/user", {
    login,
    password,
    name,
  });

  return response.data.user;
};

// авторизация
export const loginUser = async ({ login, password }) => {
  const response = await api.post("/user/login", {
    login,
    password,
  });

  return response.data.user;
};

// список пользователей
export const getUsers = async () => {
  const response = await api.get("/user");
  return response.data.users;
};
