import axios from "axios";
import { getCookie } from "@/utils/cookie.ts";
import { ACCESS_TOKEN } from "@/utils/constant.ts";

const instance = axios.create({
  baseURL: "",
  headers: {
    Authorization: getCookie(ACCESS_TOKEN),
  },
});

instance.interceptors.request.use(
  (value) => {
    return value;
  },
  () => {},
);

export const getAuth = () => {
  return new Promise<boolean>((resolve) => {
    resolve(true);
  });
};
