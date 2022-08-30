import axios from 'axios';

const BASE_URL = 'https://api.github.com';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Token ${process.env.ELECTRON_GITHUB_DEVELOP_TOKEN}`,
  },
});

export default axiosInstance;
