import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:4000",
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

let retry = false;
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response && error.response.status === 401 && !retry) {
      retry = true;
      try {
        const res = await axiosInstance.post("/auth/refresh");
        if (!res.data.accessToken) throw new Error("Access token is missing");
        retry = false;
        localStorage.setItem("accessToken", res.data.accessToken);
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        localStorage.removeItem("accessToken");
        await axiosInstance.post("/auth/logout");
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);
