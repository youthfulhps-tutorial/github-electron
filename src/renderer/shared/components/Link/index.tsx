import { AnchorHTMLAttributes } from 'react';

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement>;

const Link = ({ children, ...anchorProps }: LinkProps) => {
  return <a {...anchorProps}>{children}</a>;
};

export default Link;
