import { Debounce } from './type';

export const debounce: Debounce<any[]> = (func, timeout) => {
  let timer: NodeJS.Timeout;
  return (...args) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
};
