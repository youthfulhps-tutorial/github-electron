import {
  MergedLanguageList,
  GetMergedLanguageList,
  GetDestructuredLanguageList,
  SortedLanguageList,
  GetLanguageColor,
  GetMaximumLanguage,
} from './types';

import { languageColorList } from '../../constants/languageColorList';

export const getDestructuredLanguageList: GetDestructuredLanguageList = (
  responseData
) => {
  return responseData?.data?.user?.repositories?.nodes ?? {};
};

export const getMergedLanguageList: GetMergedLanguageList = (
  languageNodeList
) => {
  const mergedLanguageList: MergedLanguageList = {};

  languageNodeList.forEach((languageNode) => {
    languageNode.languages.edges.forEach((edge: any) => {
      const {
        node: { name },
        size,
      } = edge;

      if (mergedLanguageList[name]) {
        mergedLanguageList[name] += size;
      } else {
        mergedLanguageList[name] = size;
      }
    });
  });

  return mergedLanguageList;
};

export const getSortedLanguageList: SortedLanguageList = (
  mergedLanguageList
) => {
  return Object.entries(mergedLanguageList)
    .sort(([, a], [, b]) => Number(b) - Number(a))
    .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
};

export const getMaximumLanguage: GetMaximumLanguage = (mergedLanguageList) => {
  if (!mergedLanguageList) return '';
  return Object.keys(mergedLanguageList).reduce((a, b) =>
    mergedLanguageList[a] > mergedLanguageList[b] ? a : b
  );
};

export const getLanguageColor: GetLanguageColor = (language) => {
  return languageColorList[language]?.color ?? '#000000';
};
