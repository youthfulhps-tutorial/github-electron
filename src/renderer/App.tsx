import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ThemeSwitch from '@ThemeSwitch/components';
import Registration from '@Registration/components';
import UserProfile from '@UserProfile/components';
import UserContextProvider, { UserContext } from '@shared/contexts/UserContext';
import '@shared/styles/index.scss';
import { useContext } from 'react';
import SuspenseBoundary from '@shared/boundaries/SuspenseBoundary';

const Main = () => {
  const { hasUserId } = useContext(UserContext);

  if (!hasUserId) return <Registration />;

  return (
    <>
      <ThemeSwitch />
      <SuspenseBoundary fallbackStyle={{ width: 360, height: 360 }}>
        <UserProfile />
      </SuspenseBoundary>
    </>
  );
};

export default function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchInterval: 1000 * 60 * 15,
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <UserContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </Router>
        <ReactQueryDevtools />
      </UserContextProvider>
    </QueryClientProvider>
  );
}
