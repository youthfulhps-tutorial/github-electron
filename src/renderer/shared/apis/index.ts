import axios from 'axios';
import cookie from 'cookiejs';

const BASE_URL = 'https://api.github.com';

const getAccessToken = () => {
  return cookie.get('accessToken');
};

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Token ${getAccessToken()}`,
  },
});

export default axiosInstance;
