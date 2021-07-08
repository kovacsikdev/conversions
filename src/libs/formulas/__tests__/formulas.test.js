import { formulas } from '../formulas';

describe("formulas", () => {
  it.each([
    ['fahrenheit', 10, -12.22],
    ['celsius', 10, 50],
    ['miles', 10, 16.09],
    ['kilometers', 10, 6.21],
    ['pounds', 10, 4.54],
    ['kilograms', 10, 22.05],
    ['feet', 10, 3.05],
    ['meters', 10, 32.81],
    ['inches', 10, 254],
    ['millimeters', 10, 0.39]
  ])('converts to opposite of %s', (unit, num, expected) => {
    const convertedNum = formulas[unit](num);
    const expectedNum = parseFloat(convertedNum.toFixed(2));
    expect(expectedNum).toEqual(expected);
  });
});