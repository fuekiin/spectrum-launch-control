import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    color: ${({ theme }) => theme.colors.basePrimary};
    background: ${({ theme }) => theme.colors.backgroundMain};
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
