import { toast } from "react-toastify";
import axiosInstance from "../interceptors/axiosInstance";

export const signUp = async (userData) => {
  try {
    const response = await axiosInstance.post("/users/add", userData);
    toast.success(response?.data?.msg);
    return response?.data;
  } catch (error) {
    // toast.error(error?.response?.data?.msg || "Sign-up failed");
    return null;
  }
};

export const signIn = async (credentials) => {
  try {
    const response = await axiosInstance.post("/users/login", credentials);
    toast.success(response?.data?.msg);
    console.log("🚀 ~ signIn ~ response:", response);
    const { token } = response?.data?.data;
    localStorage.setItem("auth_token", token);
    return response?.data;
  } catch (error) {
    // toast.error(error?.response?.data?.msg || "Sign-in failed");
    return null;
  }
};
