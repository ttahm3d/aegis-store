import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box
  }

  :root {
    --font-family-open-sans: 'Open Sans', sans-serif;
    --font-family-poppins: "Poppins", sans-serif;
    --font-family-lato-sans: "Lato Sans", sans-serif;
  }

  .shadow {
    box-shadow: 0 0 4px ${(props) => props.theme.colors.gray7};
  }

  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }

  img {
    max-width: 100%;
  }

  input, button {
    font-family: inherit;
  }

  button {
    cursor: pointer;
    font-size: 1rem;
    color: inherit
    background-color: inherit;
  }

  .main-container {
    width: min(calc(90vw - 2rem), 80em);
    margin-inline: auto;
  }

  body {
    background-color:  ${(props) => props.theme.colors.gray1};
    color: ${(props) => props.theme.colors.gray12}; 
    font-family: var(--font-family-poppins);
  }
`;

export { GlobalStyle };
