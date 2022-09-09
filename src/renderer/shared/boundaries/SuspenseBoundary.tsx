import { CSSProperties, ReactNode, Suspense } from 'react';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import ErrorBoundary from './ErrorBoundary';
import Loader from '../components/Loader';

type SuspenseBoundaryProps = {
  children: ReactNode;
  fallbackStyle?: CSSProperties;
};

const SuspenseBoundary = ({
  children,
  fallbackStyle,
}: SuspenseBoundaryProps) => {
  const { reset } = useQueryErrorResetBoundary();
  return (
    <ErrorBoundary reset={reset} fallbackStyle={fallbackStyle}>
      <Suspense fallback={<Loader style={fallbackStyle} />}>
        {children}
      </Suspense>
    </ErrorBoundary>
  );
};

export default SuspenseBoundary;
