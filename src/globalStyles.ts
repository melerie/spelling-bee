import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body, h1, h2, h3, p, ul, li {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Arial, sans-serif;
  }

  body {
    background-color: #f5f5f5;
  }

  * {
    box-sizing: border-box;
  }
`;

