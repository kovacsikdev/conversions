import React from 'react';
import { theme } from '../../libs/theme/theme'
import sunIcon from '../../assets/sun-icon.png';
import nightIcon from '../../assets/night-icon.png';
import './ThemeSlider.scss';

export const ThemeSlider = () => {
  const [themeName, setThemeName] = React.useState(theme.getTheme());

  const toggleTheme = () => {
    const newTheme = themeName === 'light' ? 'dark' : 'light';
    setThemeName(newTheme);
    localStorage.setItem('themeName', newTheme);
    theme.setTheme(newTheme);
  };

  return (
    <div className="ThemeSlider">
      <label className="switch">
        <img src={sunIcon} alt="light" />
        <input
          checked={themeName === 'dark'}
          type="checkbox"
          onChange={toggleTheme}
        />
        <span className="slider round"></span>
        <img src={nightIcon} alt="dark"/>
      </label>
    </div>
  )
}
