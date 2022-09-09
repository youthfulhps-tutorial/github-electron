import axios, { AxiosRequestConfig } from 'axios';
import cookie from 'cookiejs';

const BASE_URL = 'https://api.github.com';

export const getAccessToken = () => {
  return cookie.get('accessToken');
};

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {},
});

axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
  if (!config || !config.headers) {
    throw new Error(
      "Expected 'config' and 'config.headers' not to be undefined"
    );
  }
  const accessToken = getAccessToken();

  if (accessToken) return;

  config.headers.Authorization = `Token ${accessToken}`;

  return config;
});

export default axiosInstance;
