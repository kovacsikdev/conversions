import React from 'react';
import { shallow } from 'enzyme';
import { ThemeSlider } from '../ThemeSlider';
import { theme } from '../../../libs/theme/theme';

theme.getTheme = jest.fn();
theme.setTheme = jest.fn();

describe("components/ThemeSlider", () => {
  beforeAll(() => {
    theme.getTheme.mockReturnValue('light');
    global.Storage.prototype.setItem = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render the component correctly', () => {
    const wrapper = shallow(<ThemeSlider />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should toggle the theme from light to dark', () => {
    const wrapper = shallow(<ThemeSlider />);
    
    wrapper.find('input').simulate('change');

    expect(global.Storage.prototype.setItem).toHaveBeenCalledTimes(1);
    expect(global.Storage.prototype.setItem).toHaveBeenCalledWith('themeName', 'dark');
    expect(theme.setTheme).toHaveBeenCalledTimes(1);
    expect(theme.setTheme).toHaveBeenCalledWith('dark');
  });

  it('should toggle the theme from dark to light', () => {
    theme.getTheme.mockReturnValueOnce('dark');
    const wrapper = shallow(<ThemeSlider />);
    
    wrapper.find('input').simulate('change');

    expect(global.Storage.prototype.setItem).toHaveBeenCalledTimes(1);
    expect(global.Storage.prototype.setItem).toHaveBeenCalledWith('themeName', 'light');
    expect(theme.setTheme).toHaveBeenCalledTimes(1);
    expect(theme.setTheme).toHaveBeenCalledWith('light');
  });
});