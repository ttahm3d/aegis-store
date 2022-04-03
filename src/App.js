import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import { Footer, Header, ScrollToTop } from "./components";
import { AuthProvider } from "./context/auth";
import { ProductsProvider } from "./context/products/";
import { WishlistProvider } from "./context/wishlist";
import { ToastContainer } from "react-toastify";

import Router from "./router/Router";
import { CartProvider } from "./context/cart";

export default function () {
  return (
    <BrowserRouter>
      <Page>
        <ProductsProvider>
          <AuthProvider>
            <WishlistProvider>
              <CartProvider>
                <ScrollToTop />
                <Header />
                <Router />
                <Footer />
                <ToastContainer />
              </CartProvider>
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
