import axios from "axios";

const api = axios.create({
  baseURL: "https://wedev-api.sky.pro/api",
  headers: {
    "Content-Type": "",
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const message =
      error.response?.data?.message ||
      error.response?.status === 401
        ? "Необходима авторизация"
        : "Ошибка сервера";

    return Promise.reject(message);
  }
);

export default api;
