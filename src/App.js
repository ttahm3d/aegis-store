import { BrowserRouter } from "react-router-dom";
import { Header } from "./components";
import Router from "./router/Router";

export default function () {
  return (
    <BrowserRouter>
      <Header />
      <Router />
    </BrowserRouter>
  );
}
