import { getUser } from '@shared/apis/user';
import { debounce } from '@shared/utils/common';
import { useCallback, useState, useContext } from 'react';
import { UserContext } from '@shared/contexts/UserContext';

const useRegistration = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [isValidate, setIsValidate] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isFadingOut, setIsFadingOut] = useState<boolean>(false);

  const { setUserId } = useContext(UserContext);

  const checkUserValidation = useCallback(async (userId: string) => {
    setIsLoading(true);
    try {
      const user = await getUser(userId);
      setIsValidate(user.data.login === userId);
    } catch (e) {
      setIsValidate(false);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const debouncedUserValidation = useCallback(
    debounce((userId: string) => checkUserValidation(userId), 1500),
    []
  );

  const changeInputValue = useCallback((userId: string) => {
    setInputValue(userId);
    debouncedUserValidation(userId);
  }, []);

  const successRegistration = useCallback(() => {
    setUserId(inputValue);
    setIsFadingOut(true);
  }, []);

  const cancelRegistration = useCallback(() => {
    setIsValidate(false);
    setInputValue('');
  }, []);

  return {
    isLoading,
    setIsLoading,
    isValidate,
    inputValue,
    isFadingOut,
    changeInputValue,
    successRegistration,
    cancelRegistration,
  };
};

export default useRegistration;
