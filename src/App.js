import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import { Footer, Header } from "./components";
import Router from "./router/Router";

export default function () {
  return (
    <BrowserRouter>
      <Page>
        <Header />
        <Router />
        <Footer />
      </Page>
    </BrowserRouter>
  );
}

const Page = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
