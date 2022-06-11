import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import { Footer, Header, ScrollToTop } from "./components";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/auth";
import { ProductsProvider } from "./context/products/";
import { WishlistProvider } from "./context/wishlist";

import Router from "./router/Router";
import { CartProvider } from "./context/cart";

export default function () {
  return (
    <BrowserRouter>
      <Toaster position="top-center" reverseOrder={false} />
      <Page>
        <ProductsProvider>
          <AuthProvider>
            <WishlistProvider>
              <CartProvider>
                <ScrollToTop />
                <Header />
                <Router />
                <Footer />
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
