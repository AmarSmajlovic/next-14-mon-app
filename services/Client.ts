import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { cookies } from "next/headers";

axios.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = cookies().get("token")?.value;
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const get = (
  url: string,
  options?: AxiosRequestConfig
): Promise<AxiosResponse> => {
  return axios({
    method: "GET",
    url: url,
    headers: {
      Authorization: cookies().get("token")?.value,
    },
    ...options,
  });
};
