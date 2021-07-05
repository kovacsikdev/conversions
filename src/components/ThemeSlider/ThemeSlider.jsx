import React, { useState, useEffect } from 'react';
import { themes } from './themes';
import sunIcon from '../../assets/rsz_sun-icon.png';
import nightIcon from '../../assets/rsz_night-icon.png';
import './ThemeSlider.scss';

export const ThemeSlider = () => {
  const [themeName, setThemeName] = useState(themes.themeName);

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

  useEffect(() => {
    const savedTheme = localStorage.getItem('themeName');

    if(savedTheme){
      setThemeName(savedTheme);
    }
  }, [])

  useEffect(() => {
    setCSSVariables(themes[themeName]);
  }, [themeName]);

  return (
    <div className="ThemeSlider">
      <img src={sunIcon} alt="light" />
      <label className="switch">
        <input
          checked={themeName === 'dark'}
          type="checkbox"
          onChange={toggleTheme}
        />
        <span className="slider round"></span>
      </label>
      <img src={nightIcon} alt="dark"/>
    </div>
  )
}
