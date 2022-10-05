export type MergedLanguageList = {
  [key: string]: string;
};

export type GetMergedLanguageList = (
  languageNodeList: any[]
) => MergedLanguageList;

export type GetDestructuredLanguageList = (responseData: any) => any;

export type SortedLanguageList = (
  mergedLanguageList: MergedLanguageList
) => MergedLanguageList;

export type GetLanguageListTotalSize = (
  mergedLanguageList: MergedLanguageList
) => number;

export type GetMaximumLanguage = (
  mergedLanguageList: MergedLanguageList | undefined
) => string;

export type GetLanguageColor = (language: string) => string;
