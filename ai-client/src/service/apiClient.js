import axios from "axios";

let apiClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL || "http://localhost:5000/",
});
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("jwtToken");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

export { apiClient };
