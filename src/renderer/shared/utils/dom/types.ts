export type GetElements = (selector: string) => NodeListOf<HTMLElement> | null;

export type GetElement = (selector: string) => HTMLElement | null;

export type GetBody = () => HTMLElement | null;

export type BodyMethod = (className: string) => void;

export type DomTokenListMethod = (
  element: HTMLElement | null,
  className: string
) => void;
