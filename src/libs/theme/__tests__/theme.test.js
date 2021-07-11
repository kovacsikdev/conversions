import { theme } from '../theme';

const mockSetAttribute = jest.spyOn(document.getElementsByTagName('html')[0], 'setAttribute');
const mockGetAttribute = jest.spyOn(document.getElementsByTagName('html')[0], 'getAttribute');

describe("lib/theme", () => {
  it('should set the documents data-theme attribute with provided theme name', () => {
    theme.setTheme('dark');

    expect(mockSetAttribute).toHaveBeenCalledTimes(1);
    expect(mockSetAttribute).toHaveBeenLastCalledWith('data-theme', 'dark');
  });

  it('should get the current theme in the documents data-theme attribute', () => {
    mockGetAttribute.mockReturnValue('light');
    const result = theme.getTheme();

    expect(mockGetAttribute).toHaveBeenCalledTimes(1);
    expect(mockGetAttribute).toHaveBeenCalledWith('data-theme')
    expect(result).toBe('light');
  });
});