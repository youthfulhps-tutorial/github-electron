import { useQuery } from '@tanstack/react-query';
import { getUser } from '@shared/apis/user';

const useUser = (userId: string) => {
  const { data: user } = useQuery({
    queryKey: ['user', userId],
    queryFn: async () => {
      const { data } = await getUser(userId);
      return data;
    },
    enabled: !!userId,
    suspense: true,
  });

  return { user };
};

export default useUser;
