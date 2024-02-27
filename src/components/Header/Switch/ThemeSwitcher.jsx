import React from 'react';
import { SwitchWrapper } from '../Switch/ThemeSwitcher.styled';

const ThemeSwitcher = ({ toggleTheme, theme }) => {
  const handleToggleTheme = (e) => {
    e.stopPropagation(); // Остановка всплытия события
    toggleTheme(); // Вызов функции переключения темы
  };

  return (
    <SwitchWrapper>
      <label className="switch">
        <input
          type="checkbox"
          checked={theme === 'dark'}
          onChange={handleToggleTheme} // Используем обработчик с остановкой всплытия события
        />
        <span className="slider"></span>
      </label>
    </SwitchWrapper>
  );
};

export default ThemeSwitcher;