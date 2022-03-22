import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import { Footer, Header } from "./components";
import { ProductsProvider } from "./context/products/Context";
import Router from "./router/Router";

export default function () {
  return (
    <BrowserRouter>
      <Page>
        <ProductsProvider>
          <Header />
          <Router />
          <Footer />
        </ProductsProvider>
      </Page>
    </BrowserRouter>
  );
}

const Page = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
