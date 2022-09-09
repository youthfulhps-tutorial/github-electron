import { CSSProperties } from 'react';
import { Renew } from '@carbon/icons-react';
import './index.scss';

type ErrorFallbackProps = {
  errorMessage: string | null;
  reset: () => void;
  style?: CSSProperties;
};

const Error = ({ errorMessage, reset, style }: ErrorFallbackProps) => {
  return (
    <section className="error" style={style}>
      <div className="error__message">{errorMessage}</div>
      <Renew onClick={reset} />
    </section>
  );
};

export default Error;
