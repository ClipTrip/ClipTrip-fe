import { isValidElement, type ElementType, type ReactNode } from 'react';

export const renderIconElement = (
  Icon: ElementType | ReactNode,
  element: ReactNode
) => {
  if (!Icon) return null;

  if (isValidElement(Icon)) {
    return Icon;
  }

  if (typeof Icon === 'function') {
    return element;
  }

  return null;
};
