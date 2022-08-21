import {
  createContext,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from 'react';

type UserContextProviderProps = {
  children: ReactNode;
};

type UserContextState = {
  hasUserId: boolean;
  userId: string;
  setUserId: (userId: string) => void;
};

const USER_ID_KEY = 'github-electron:userId';

const initialUserContextState: UserContextState = {
  hasUserId: false,
  userId: '',
  setUserId: (userId: string) => {},
};

export const UserContext = createContext<UserContextState>(
  initialUserContextState
);

const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const userId = localStorage.getItem(USER_ID_KEY) ?? '';

  const [hasUserId, setHasUserId] = useState<boolean>(!!userId);

  const setUserId = useCallback((userId: string) => {
    localStorage.setItem(USER_ID_KEY, userId);
    setTimeout(() => {
      setHasUserId(true);
    }, 2000);
  }, []);

  const userContextState = useMemo<UserContextState>(
    () => ({ hasUserId, userId, setUserId }),
    [hasUserId, userId, setUserId]
  );

  return (
    <UserContext.Provider value={userContextState}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
