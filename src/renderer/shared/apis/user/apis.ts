import axiosInstance from '../index';

const getUser = (userId: string) => {
  return axiosInstance.get(`/users/${userId}`);
};

export { getUser };
