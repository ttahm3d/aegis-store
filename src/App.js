import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import { Footer, Header } from "./components";
import { AuthProvider } from "./context/auth";
import { ProductsProvider } from "./context/products/";
import { WishlistProvider } from "./context/wishlist";
import Router from "./router/Router";

export default function () {
  return (
    <BrowserRouter>
      <Page>
        <ProductsProvider>
          <AuthProvider>
            <WishlistProvider>
              <Header />
              <Router />
              <Footer />
            </WishlistProvider>
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
