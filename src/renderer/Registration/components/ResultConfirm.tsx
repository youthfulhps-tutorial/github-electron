import { Close, ArrowRight } from '@carbon/icons-react';
import { memo, MouseEventHandler, ReactSVGElement } from 'react';

type ResultConfirmProps = {
  className: string;
  onConfirmClick: MouseEventHandler<ReactSVGElement>;
  onCancelClick: MouseEventHandler<ReactSVGElement>;
};

const ResultConfirm = ({
  onConfirmClick,
  onCancelClick,
  className = '',
}: ResultConfirmProps) => {
  return (
    <div className={`result-confirm ${className}`}>
      <ArrowRight
        className="result-confirm__confirm"
        onClick={onConfirmClick}
      />
      <Close className="result-confirm__cancel" onClick={onCancelClick} />
    </div>
  );
};

export default memo(ResultConfirm);
