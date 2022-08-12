import useTheme from '@ThemeSwitch/hooks/useTheme';
import '../styles/index.scss';

const ThemeSwitch = () => {
  const { isDark, handleModeChange } = useTheme();

  return (
    <div className="toggle-switch">
      <label htmlFor="switch">
        <input
          onChange={handleModeChange}
          checked={isDark}
          type="checkbox"
          id="switch"
        />
        <span className="slider" />
      </label>
    </div>
  );
};

export default ThemeSwitch;
