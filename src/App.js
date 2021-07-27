import React from "react";
import { ConversionUnit } from "./components/ConversionUnit/ConversionUnit";
import { ThemeSlider } from "./components/ThemeSlider/ThemeSlider";
import { theme } from "./libs/theme/theme";
import measurements from "./measurements.json";
import usIcon from "./assets/us-icon.png";
import worldIcon from "./assets/world-icon.png";
import "./App.scss";

export const App = () => {
  const savedTheme = localStorage.getItem("themeName");
  theme.setTheme(savedTheme || "light");

  return (
    <div className="App">
      <div className="header">
        <div className="unit">
          <strong>Imperial</strong>
          <img src={usIcon} alt="USA" />
        </div>
        <div className="center">vs</div>
        <div className="unit">
          <strong>Metric</strong>
          <img src={worldIcon} alt="World" />
        </div>
        <ThemeSlider />
      </div>

      <div className="contents">
        {measurements.map((item, index) => {
          return (
            <ConversionUnit
              key={`conversion_${index}`}
              imperial={item.imperial}
              metric={item.metric}
            />
          );
        })}
      </div>
    </div>
  );
};
