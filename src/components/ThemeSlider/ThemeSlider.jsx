import React from 'react';
import { themes } from './themes';
import sunIcon from '../../assets/sun-icon.png';
import nightIcon from '../../assets/night-icon.png';
import './ThemeSlider.scss';

export const ThemeSlider = () => {
  const [themeName, setThemeName] = React.useState(themes.themeName);

  const setCSSVariables = theme => {
    for (const value in theme) {
      document.documentElement.style.setProperty(`--${value}`, theme[value]);
    }
  };

  const toggleTheme = () => {
    if (themeName === 'dark') {
      setThemeName('light');
      localStorage.setItem('themeName', 'light');
    } else {
      setThemeName('dark');
      localStorage.setItem('themeName', 'dark');
    }
  };

  React.useEffect(() => {
    const savedTheme = localStorage.getItem('themeName');

    if(savedTheme){
      setThemeName(savedTheme);
    }
  }, []);

  React.useEffect(() => {
    setCSSVariables(themes[themeName]);
  }, [themeName]);

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
