import { createContext, ReactNode, useCallback, useMemo } from 'react';

type UserContextProviderProps = {
  children: ReactNode;
};

type UserContextState = {
  userId: string;
};

const USER_ID_KEY = 'github-electron:userId';

const initialUserContextState: UserContextState = {
  userId: '',
};

export const UserContext = createContext<UserContextState>(
  initialUserContextState
);

const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const getUserId = useCallback(() => {
    return localStorage.getItem(USER_ID_KEY) ?? '';
  }, []);

  const setUserId = useCallback((userId: string) => {
    localStorage.setItem(USER_ID_KEY, userId);
  }, []);

  const userContextState = useMemo<UserContextState>(
    () => ({ userId: getUserId(), setUserId }),
    [getUserId, setUserId]
  );

  return (
    <UserContext.Provider value={userContextState}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
