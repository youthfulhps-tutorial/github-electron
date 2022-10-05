import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getUserLanguageList } from '@shared/apis/user';
import {
  getDestructuredLanguageList,
  getMaximumLanguage,
  getMergedLanguageList,
  getSortedLanguageList,
} from '../utils/languageHelper';

const useLanguageList = (userId: string) => {
  const { data: languageList } = useQuery({
    queryKey: ['languageList', userId],
    queryFn: async () => {
      const { data } = await getUserLanguageList(userId);
      const destructuredLanguageList = getDestructuredLanguageList(data);
      const mergedLanguageList = getMergedLanguageList(
        destructuredLanguageList
      );
      const sortedLanguageList = getSortedLanguageList(mergedLanguageList);

      return sortedLanguageList;
    },
    enabled: !!userId,
  });

  const mostLanguage = useMemo(() => {
    return getMaximumLanguage(languageList);
  }, [languageList]);

  return { languageList, mostLanguage };
};

export default useLanguageList;
