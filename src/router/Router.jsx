import { Route, Routes } from "react-router-dom";
import { Wishlist } from "../pages/wishlist";
import { Cart } from "../pages/cart";
import { ProductListing } from "../pages/products";
import { NotFound } from "../pages/utils";
import { LandingPage } from "../pages/landing-page";

export default function () {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/products" element={<ProductListing />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
