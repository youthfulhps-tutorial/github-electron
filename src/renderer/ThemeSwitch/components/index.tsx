import React from 'react';
import useTheme from '@ThemeSwitch/hooks/useTheme';
import '../styles/index.scss';

const ThemeSwitch = () => {
  const { isDark, handleModeChange } = useTheme();

  return (
    <div className="toggle-switch">
      <label>
        <input type="checkbox" onChange={handleModeChange} checked={isDark} />
        <span className="slider" />
      </label>
    </div>
  );
};

export default ThemeSwitch;
