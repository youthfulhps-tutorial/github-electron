import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import ThemeSwitch from '@ThemeSwitch/components';
import '@shared/styles/index.scss';

const Main = () => {
  return (
    <div>
      <h1>테스트입니다</h1>
      <ThemeSwitch />
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}
