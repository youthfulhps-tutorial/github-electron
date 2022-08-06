import { useState, ChangeEventHandler } from 'react';
import * as Dom from '@shared/utils/dom';
import { THEME } from '../constants';

const useTheme = () => {
  const [isDark, setIsDark] = useState(false);

  const getCurrentTheme = (isDark: boolean) => {
    return isDark ? THEME.DARK : THEME.LIGHT;
  };

  const toggleTheme = (theme: string) => {
    const isDarkTheme = theme === THEME.DARK;
    Dom.addClassToBody(isDarkTheme ? THEME.LIGHT : THEME.DARK);
    Dom.removeClassToBody(isDarkTheme ? THEME.DARK : THEME.LIGHT);
  };

  const handleModeChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const isDark = e.target.checked;
    const theme = getCurrentTheme(isDark);

    setIsDark(isDark);
    toggleTheme(theme);
  };

  return {
    isDark,
    handleModeChange,
  };
};

export default useTheme;
