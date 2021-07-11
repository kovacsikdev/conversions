import React, { useState } from 'react';
import { formulas } from '../../libs/formulas/formulas';
import './ConversionUnit.scss';

export const ConversionUnit = ({imperial, metric}) => {
  const [imperialNum, setImperialNum] = useState(imperial === 'Fahrenheit' ? 32 : 0);
  const [metricNum, setMetricNum] = useState(0);

  const updateMetricNum = num => {
    setImperialNum(num);
    setMetricNum(formulas[imperial.toLowerCase()](num).toFixed(2));
  }

  const updateImperialNum = num => {
    setMetricNum(num);
    setImperialNum(formulas[metric.toLowerCase()](num).toFixed(2));
  }

  return (
    <div className="ConversionUnit">
      <div className="imperial">
        <label>{imperial}
          <input
            type="number"
            value={imperialNum}
            onChange={e =>{
              updateMetricNum(e.target.value)
            }}
            onFocus={e => {e.target.select();}}
          />
        </label>
      </div>
      <div className="spacer">=</div>
      <div className="metric">
        <label>{metric}
          <input
            type="number"
            value={metricNum}
            onChange={e =>{
              updateImperialNum(e.target.value)
            }}
            onFocus={e => {e.target.select();}}
          />
        </label>
      </div>
    </div>
  )
};