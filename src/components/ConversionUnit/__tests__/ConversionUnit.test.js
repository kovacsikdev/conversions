import React from 'react';
import { shallow } from 'enzyme';
import { ConversionUnit } from '../ConversionUnit';

const mockData = {
  imperial: 'Pounds',
  metric: 'Kilograms'
}
const mockEvent = { target: { value: 10 } };

describe("ConversionUnit", () => {

  it('should render the component correctly', () => {
    const wrapper = shallow(<ConversionUnit {...mockData}/>);
    const imperialNum = wrapper.find('input').at(0).prop('value');
    const metricNum = wrapper.find('input').at(1).prop('value');

    expect(imperialNum).toEqual(0);
    expect(metricNum).toEqual(0);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the Fahrenheit unit with a default of 32', () => {
    const wrapper = shallow(
      <ConversionUnit
        imperial="Fahrenheit"
        metric="Celsius"
      />
    );
    const fahrenheitNum = wrapper.find('input').at(0).prop('value');

    expect(fahrenheitNum).toBe(32);
  });

  it('should update the metric unit if the imperial unit is changed', () => {
    const wrapper = shallow(<ConversionUnit {...mockData}/>);
    const imperialInput = wrapper.find('input').at(0);

    // Update input of imperial unit
    imperialInput.simulate('change', mockEvent);

    // Get value of metric input
    const metricNum = wrapper.find('input').at(1).prop('value');

    // Metric input should not be zero anymore
    expect(metricNum).not.toEqual(0);
  });

  it('should update the imperial unit if the metric unit is changed', () => {
    const wrapper = shallow(<ConversionUnit {...mockData}/>);
    const metricInput = wrapper.find('input').at(1);

    // Update input of metric unit
    metricInput.simulate('change', mockEvent);

    // Get value of imperial unit
    const imperialNum = wrapper.find('input').at(0).prop('value');

    // Imperial input should not be zero anymore
    expect(imperialNum).not.toEqual(0);
  });
});