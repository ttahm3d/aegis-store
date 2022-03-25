import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import { Footer, Header } from "./components";
import { AuthProvider } from "./context/auth";
import { ProductsProvider } from "./context/products/Context";
import Router from "./router/Router";

export default function () {
  return (
    <BrowserRouter>
      <Page>
        <ProductsProvider>
          <AuthProvider>
            <Header />
            <Router />
            <Footer />
          </AuthProvider>
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
