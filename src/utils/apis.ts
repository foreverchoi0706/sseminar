import axios from "axios";
import { getCookie } from "@/utils/cookie.ts";
import { ACCESS_TOKEN } from "@/utils/constants";
import { Response, Seminar } from "@/utils/types.ts";

const axiosInstance = axios.create({
  baseURL: "api",
  headers: {
    Authorization: getCookie(ACCESS_TOKEN),
  },
});

axiosInstance.interceptors.request.use(
  (value) => value,
  () => {},
);

export const getAuth = () => {
  console.log("getAuth");
  return new Promise<boolean>((resolve) => {
    setTimeout(() => resolve(true), 500);
  });
};

export const getSeminars = async () => {
  const { data } = await axiosInstance.get<Response<Seminar[]>>("/seminars");
  return data.result;
};
