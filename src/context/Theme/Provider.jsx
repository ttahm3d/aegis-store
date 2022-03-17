import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyles";
import { lightTheme, darkTheme } from "./Themes";

const StyledThemeProvider = ({ theme, children }) => {
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export { StyledThemeProvider };
