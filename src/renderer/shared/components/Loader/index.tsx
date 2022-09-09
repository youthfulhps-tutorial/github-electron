import { CSSProperties } from 'react';
import './index.scss';

type LoaderProps = {
  style?: CSSProperties;
};

const Loader = ({ style }: LoaderProps) => {
  return (
    <div className="loader" style={style}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};

export default Loader;
