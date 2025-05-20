import axios from "axios";
import { useAuthStore } from "../stores/authStore";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

// 요청을 인터셉트한다
axiosInstance.interceptors.request.use((config) => {
  const token = useAuthStore.getState().accessToken;
  // 전역 상태에서 access 토큰이 있으면(=로그인 되어 있으면)?
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`; // 유저에게 권한 주기
  }
  return config;
});

let retry = false;

//응답을 인터셉트한다
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 403 && !retry) {
      console.log("token 실패"); // refresh토큰 신규 토큰
      retry = true;
      try {
        const { data } = await axiosInstance.post("/token");
        useAuthStore.setState({
          accessToken: data.accessToken,
          isLoggedIn: true,
        });
        retry = false;
        originalRequest.headers["Authorization"] = `Bearer ${data.accessToken}`;
        return axiosInstance(originalRequest);
      } catch (error) {
        //리프레시 오류 나면 로그아웃 시키고 다른 페이지로 튕기게 해도 됨 여기서
        console.log(error);
      }
    }
  }
);
