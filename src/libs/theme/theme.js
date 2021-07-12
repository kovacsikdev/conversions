/**
 * Object containing methods to either set or get data-theme from the document
 * @Object
 */
export const theme = {
  setTheme: (themeName) => {
    document.getElementsByTagName('html')[0].setAttribute('data-theme', themeName);
  },
  getTheme: () => document.getElementsByTagName('html')[0].getAttribute('data-theme')
}