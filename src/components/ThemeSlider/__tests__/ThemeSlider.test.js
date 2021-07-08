import React from 'react';
import { shallow } from 'enzyme';
import { ThemeSlider } from '../ThemeSlider';
import { themes } from '../themes';

const useEffectSpy = jest.spyOn(React, 'useEffect');
const useStateSpy = jest.spyOn(React, 'useState');

describe("ThemeSlider", () => {

  beforeAll(() => {
    global.Storage.prototype.getItem = jest.fn();
    global.Storage.prototype.setItem = jest.fn();
    global.document.documentElement.style.setProperty = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render the component correctly', () => {
    const wrapper = shallow(<ThemeSlider />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should use the default theme if none saved in localStorage on initial start', () => {
    shallow(<ThemeSlider />);

    const [appStartUseEffect] = useEffectSpy.mock.calls[0];
    appStartUseEffect();

    expect(global.Storage.prototype.getItem).toHaveBeenCalledTimes(1);

    const [setCSSVariablesUseEffect] = useEffectSpy.mock.calls[1];
    setCSSVariablesUseEffect();

    expect(global.document.documentElement.style.setProperty).toHaveBeenCalledTimes(2);
    expect(global.document.documentElement.style.setProperty).toHaveBeenCalledWith('--color', themes.light.color);
    expect(global.document.documentElement.style.setProperty).toHaveBeenCalledWith('--background', themes.light.background);
  });

  it('should use a saved theme in localStorage on inital start', () => {
    global.Storage.prototype.getItem.mockReturnValueOnce('dark');
    useStateSpy.mockImplementationOnce(() => ['dark', jest.fn()]);

    shallow(<ThemeSlider />);

    const [appStartUseEffect] = useEffectSpy.mock.calls[0];
    appStartUseEffect();

    const [setCSSVariablesUseEffect] = useEffectSpy.mock.calls[1];
    setCSSVariablesUseEffect();

    expect(global.Storage.prototype.getItem).toHaveBeenCalledTimes(1);
    expect(global.document.documentElement.style.setProperty).toHaveBeenCalledTimes(2);
    expect(global.document.documentElement.style.setProperty).toHaveBeenCalledWith('--color', themes.dark.color);
    expect(global.document.documentElement.style.setProperty).toHaveBeenCalledWith('--background', themes.dark.background);
  });

  it('should toggle the theme from light to dark', () => {
    const wrapper = shallow(<ThemeSlider />);
    const toggleInput = wrapper.find('input');

    const [setCSSVariablesUseEffect] = useEffectSpy.mock.calls[1];
    setCSSVariablesUseEffect();
    expect(global.document.documentElement.style.setProperty).toHaveBeenCalledWith('--color', themes.light.color);

    toggleInput.simulate('change');

    expect(global.Storage.prototype.setItem).toHaveBeenCalledTimes(1);
    expect(global.Storage.prototype.setItem).toHaveBeenCalledWith('themeName', 'dark');
  });

  it('should toggle the theme from light to dark', () => {
    useStateSpy.mockImplementationOnce(() => ['dark', jest.fn()]);
    const wrapper = shallow(<ThemeSlider />);
    const toggleInput = wrapper.find('input');

    const [setCSSVariablesUseEffect] = useEffectSpy.mock.calls[1];
    setCSSVariablesUseEffect();
    expect(global.document.documentElement.style.setProperty).toHaveBeenCalledWith('--color', themes.dark.color);

    toggleInput.simulate('change');

    expect(global.Storage.prototype.setItem).toHaveBeenCalledTimes(1);
    expect(global.Storage.prototype.setItem).toHaveBeenCalledWith('themeName', 'light');
  });
});