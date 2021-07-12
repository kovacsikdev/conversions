/**
 * Object containing conversions for Imperial and Metric measurements
 * @Object
 *
 * @return {number} The converted value
 */
export const formulas = {
  fahrenheit: num => {    // Convert to Celsius
    return (num - 32) * (5/9);
  },
  celsius: num => {       // Convert to Fahrenheit
    return num * (9/5) + 32;
  },
  miles: num => {         // Convert to kilometers
    return num * 1.60934;
  },
  kilometers: num => {    // Convert to miles
    return num * 0.621371;
  },
  pounds: num => {        // Convert to kilograms
    return num * 0.453592;
  },
  kilograms: num => {     // Convert to pounds
    return num * 2.204623
  },
  feet: num => {          // Convert to meters
    return num * 0.3048;
  },
  meters: num => {        // Convert to feet
    return num * 3.28084;
  },
  inches: num => {        // Convert to millimeters
    return num * 25.4;
  },
  millimeters: num => {   // Convert to inches
    return num / 25.4; 
  }
}