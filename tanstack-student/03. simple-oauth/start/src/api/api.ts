import type { AxiosError } from "axios";
import { axiosInstance } from "./axiosInstance";
import type { ErrorResponse } from "react-router";

export const register = async (
  email: string,
  password: string,
  name: string
) => {
  try {
    const { data } = await axiosInstance.post("/auth/register", {
      name,
      email,
      password,
    });

    return data;
  } catch (err) {
    if ((err as AxiosError).isAxiosError) {
      const axiosErr = err as AxiosError<ErrorResponse>;
      if (axiosErr.response) {
        throw axiosErr.response.data;
      }
    }
    throw err;
  }
};
