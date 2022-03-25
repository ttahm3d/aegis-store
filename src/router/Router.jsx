import { Route, Routes } from "react-router-dom";
import { Wishlist } from "../pages/wishlist";
import { Cart } from "../pages/cart";
import { Listing } from "../pages/products";
import { NotFound } from "../pages/utils";
import { LandingPage } from "../pages/landing-page";
import { MockApi } from "../pages/api-response";
import { Signup, Login } from "../pages/auth";

export default function () {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/products" element={<Listing />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/signup" element={<Signup />} />
      <Route path="/api-response" element={<MockApi />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
