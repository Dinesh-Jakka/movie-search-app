import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
  }

  .App {
    text-align: center;
    padding: 20px;
  }
`;

export default GlobalStyles;
