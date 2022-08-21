import {
  useCallback,
  ChangeEventHandler,
  MouseEventHandler,
  ReactSVGElement,
  useEffect,
} from 'react';
import useRegistration from '@Registration/hooks/useRegistration';
import Loader from '@shared/components/Loader';
import ResultConfirm from './ResultConfirm';
import UserInput from './UserInput';
import '../styles/index.scss';

const Registration = () => {
  const {
    isLoading,
    setIsLoading,
    isValidate,
    inputValue,
    isFadingOut,
    changeInputValue,
    successRegistration,
    cancelRegistration,
  } = useRegistration();

  const handleUserInputChange: ChangeEventHandler<HTMLInputElement> =
    useCallback((e) => changeInputValue(e.target.value), [changeInputValue]);

  const handleConfirmClick: MouseEventHandler<ReactSVGElement> = useCallback(
    (e) => successRegistration(),
    [successRegistration]
  );

  const handleCancelClick: MouseEventHandler<ReactSVGElement> = useCallback(
    (e) => cancelRegistration(),
    [cancelRegistration]
  );

  useEffect(() => {
    if (!inputValue) return;
    setIsLoading(true);
  }, [inputValue, setIsLoading]);

  return (
    <div className="registration">
      <h1 className={`${isFadingOut ? 'fade-out' : ''}`}>안녕하세요</h1>
      <UserInput
        className={`${isFadingOut ? 'move-to-right' : ''}`}
        onChange={handleUserInputChange}
        name="user-input"
        value={inputValue}
        readOnly={isValidate}
      />
      {isLoading ? <Loader /> : null}
      {!isLoading && isValidate ? (
        <ResultConfirm
          className={`${isFadingOut ? 'fade-out' : ''}`}
          onConfirmClick={handleConfirmClick}
          onCancelClick={handleCancelClick}
        />
      ) : null}
    </div>
  );
};

export default Registration;
