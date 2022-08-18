import { getUser } from '@shared/apis/user';
import { debounce } from '@shared/utils/common';
import { KeyboardEventHandler, useCallback, useState } from 'react';

const useRegistration = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [isValidate, setIsValidate] = useState<boolean>(false);

  const checkUserValidation = useCallback(
    debounce(async (userId: string) => {
      try {
        const user = await getUser(userId);
        setIsValidate(user.data.login === userId);
      } catch (e) {
        setIsValidate(false);
      }
    }, 1500),
    []
  );

  const handleInputChange: KeyboardEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      setInputValue(e.target.value);
      checkUserValidation(e.target.value);
    },
    [checkUserValidation]
  );

  return { isValidate, inputValue, handleInputChange };
};

export default useRegistration;
