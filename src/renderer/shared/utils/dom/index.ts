import {
  GetElements,
  GetElement,
  DomTokenListMethod,
  BodyMethod,
  GetBody,
} from './types';

const BODY = 'body';

export const getElements: GetElements = (selector) =>
  document.querySelectorAll(selector);

export const getElement: GetElement = (selector) =>
  document.querySelector(selector);

export const addClass: DomTokenListMethod = (element, className) =>
  element?.classList.add(className);

export const removeClass: DomTokenListMethod = (element, className) =>
  element?.classList.remove(className);

export const hasClass: DomTokenListMethod = (element, className) =>
  element?.classList.contains(className);

export const getBody: GetBody = () => getElement(BODY);

export const addClassToBody: BodyMethod = (className) =>
  addClass(getBody(), className);

export const removeClassToBody: BodyMethod = (className) =>
  removeClass(getBody(), className);

export const hasClassOfBody: BodyMethod = (className) =>
  hasClass(getBody(), className);
