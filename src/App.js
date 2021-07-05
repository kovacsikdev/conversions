import React from 'react';
import { ConversionUnit } from './components/ConversionUnit/ConversionUnit';
import { ThemeSlider } from './components/ThemeSlider/ThemeSlider';
import measurements from './measurements.json';
import './App.scss';

function App() {
  return (
    <div className="App">
      <ThemeSlider />

      <div className="header">
        <strong>Imperial</strong>
        <div className="center">vs</div>
        <strong>Metric</strong>
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

export default App;
