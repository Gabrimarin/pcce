import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3001/",
  headers: {
    "Content-Type": "application/json",
  },
  delayed: true,
});

instance.interceptors.request.use((config) => {
  if (config.delayed) {
    return new Promise((resolve) => setTimeout(() => resolve(config), 600));
  }
  return config;
});

export default instance;
