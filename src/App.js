import { BrowserRouter } from "react-router-dom";
import { Header } from "./components";
// import { ThemeProvider } from "styled-components";
import { StyledThemeProvider } from "./context/Theme/Provider";
import Router from "./router/Router";
import useLocalStorage from "./hooks/useLocalStorage";

export default function () {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  const toggleTheme = () =>
    theme === "light" ? setTheme("dark") : setTheme("light");

  return (
    <StyledThemeProvider theme={theme} setTheme={setTheme}>
      <BrowserRouter>
        <Header toggleTheme={toggleTheme} />
        <Router />
      </BrowserRouter>
    </StyledThemeProvider>
  );
}
