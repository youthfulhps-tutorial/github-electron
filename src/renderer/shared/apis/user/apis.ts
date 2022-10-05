import axiosInstance from '../index';
import { getUserLanguageListQuery } from './queries';

const getUser = (userId: string) => {
  return axiosInstance.get(`/users/${userId}`);
};

const getUserLanguageList = (userId: string) => {
  const body = {
    query: getUserLanguageListQuery(userId),
  };

  return axiosInstance.post('/graphql', body);
};

export { getUser, getUserLanguageList };
