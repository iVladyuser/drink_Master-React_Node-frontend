import React from 'react';
import { SwitchWrapper } from '../Switch/ThemeSwitcher.styled';

const ThemeSwitcher = ({ toggleTheme, theme }) => {
  // const [theme, setTheme] = useState(initialTheme);

  // const toggleTheme = () => {
  //   const newTheme = theme === 'light' ? 'dark' : 'light';
  //   setTheme(newTheme);
  //   onThemeChange(newTheme);
  // };

  return (
    <SwitchWrapper>
      <label className="switch">
        <input
          type="checkbox"
          checked={theme === 'dark'}
          onChange={toggleTheme}
        />
        <span className="slider"></span>
      </label>
    </SwitchWrapper>
  );
};

export default ThemeSwitcher;
