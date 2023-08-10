type CustomTheme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {}
}

export const theme = {
  textColour: '#31313e',
  primary: '#6acaf3',
  lightGrey: '#e6e6e6',
  white: '#ffffff',
  dark: '#3e474c',
}