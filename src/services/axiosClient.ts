import axios, { InternalAxiosRequestConfig } from "axios";
import queryString from "query-string";
// import { cookies } from "next/headers";

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use((config: any) => {
  // const cookieStore = cookies();
  // const token = cookieStore.get("token") || "";

  // if (token) {
  //   config.headers = {
  //     Authorization: "Bearer" + token,
  //   };
  // }

  return config;
});

axiosClient.interceptors.response.use();

export default axiosClient;
