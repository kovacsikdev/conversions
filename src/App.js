import React from 'react';
import { ConversionUnit } from './components/ConversionUnit/ConversionUnit';
import { ThemeSlider } from './components/ThemeSlider/ThemeSlider';
import measurements from './measurements.json';
import usIcon from './assets/us-icon.png';
import worldIcon from './assets/world-icon.png';
import './App.scss';

export const App = () => {
  return (
    <div className="App">

      <div className="header">
        <div className="unit">
          <strong>Imperial</strong>
          <img src={usIcon} />
        </div>
        <div className="center">vs</div>
        <div className="unit">
          <strong>Metric</strong>
          <img src={worldIcon} />
        </div>
        <ThemeSlider />
      </div>

      <div className="contents">
        {
          measurements.map((item, index) => {
            return (
              <ConversionUnit
                key={`conversion_${index}`}
                imperial={item.imperial}
                metric={item.metric}
              />
            )
          })
        }
      </div>
    </div>
  );
}
