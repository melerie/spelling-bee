import { lighten } from 'polished'
import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
${({ theme }) => css`
  body,
  h1,
  h2,
  h3,
  p,
  ul,
  li {
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }

  body {
    font-family: 'Poppins', sans-serif;
    color: ${theme.textColour};
    line-height: 1.6;
  }

  body {
    background-color: #f5f5f5;
  }

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    box-shadow: inset 0 -0.25em 0 ${lighten(0.1, theme.primary)};

    transition: background-color 0.15s cubic-bezier(0.33, 0.66, 0.66, 1);

    &,
    &:visited {
      color: ${theme.textColour};
    }

    &:hover,
    &:focus {
      background-color: ${lighten(0.1, theme.primary)};
    }
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;

    &:focus {
      outline: 0;
    }
  }

  h1 {
    font-size: 1.6rem;
  }
  h2 {
    font-size: 1.45rem;
  }
  h3 {
    font-size: 1.3rem;
  }
  h4 {
    font-size: 1.15rem;
  }
`}
`
