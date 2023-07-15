import axios from "axios";
import axiosClient from "./axiosClient";

const concatPath = (...paths: string[]) =>
  paths.join("/").replaceAll(/\/{2,}/gi, "/");

class BaseApi {
  constructor(private prefixPath: string) {}

  get<T>(...params: Parameters<typeof axios.get>) {
    const [url, ...resParams] = params;
    return axiosClient.get<T>(concatPath(this.prefixPath, url), ...resParams);
  }
  post<T>(...params: Parameters<typeof axios.post>) {
    const [url, ...resParams] = params;
    return axiosClient.post<T>(concatPath(this.prefixPath, url), ...resParams);
  }
  put<T>(...params: Parameters<typeof axios.put>) {
    const [url, ...resParams] = params;
    return axiosClient.put<T>(concatPath(this.prefixPath, url), ...resParams);
  }
  patch<T>(...params: Parameters<typeof axios.patch>) {
    const [url, ...resParams] = params;
    return axiosClient.patch<T>(concatPath(this.prefixPath, url), ...resParams);
  }
  delete<T>(...params: Parameters<typeof axios.delete>) {
    const [url, ...resParams] = params;
    return axiosClient.delete<T>(
      concatPath(this.prefixPath, url),
      ...resParams
    );
  }
}

export default BaseApi;
