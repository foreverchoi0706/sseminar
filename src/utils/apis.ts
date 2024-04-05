import axios from "axios";
import { getCookie } from "@/utils/cookie.ts";
import { ACCESS_TOKEN } from "@/utils/constants";

const instance = axios.create({
  baseURL: "",
  headers: {
    Authorization: getCookie(ACCESS_TOKEN),
  },
});

instance.interceptors.request.use(
  (value) => value,
  () => {}
);

export const getAuth = () => {
  console.log("getAuth");
  return new Promise<boolean>((resolve) => {
    setTimeout(() => resolve(true), 500);
  });
};
