export type Debounce<Params extends any[]> = (
  func: (...args: Params) => any,
  timeout: number
) => (...args: Params) => void;
