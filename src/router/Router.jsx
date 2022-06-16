import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import RequireAuth from "./RequireAuth";
import RedirectAuth from "./RedirectAuth";
import { Loader } from "../components";

const Login = lazy(() => import("../pages/auth/Login/Login"));
const Signup = lazy(() => import("../pages/auth/Signup/Signup"));

const LandingPage = lazy(() => import("../pages/landing-page/LandingPage"));
const Listing = lazy(() => import("../pages/products/Listing/Listing"));
const Detail = lazy(() => import("../pages/products/Detail/Detail"));
const Wishlist = lazy(() => import("../pages/wishlist/Wishlist"));
const Cart = lazy(() => import("../pages/cart/Cart"));
const MockApi = lazy(() => import("../pages/api-response/ApiResponse"));
const NotFound = lazy(() => import("../pages/utils/NotFound/NotFound"));

export default function () {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route element={<RequireAuth />}>
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Route>
        <Route element={<RedirectAuth />}>
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/signup" element={<Signup />} />
        </Route>
        <Route path="/products" element={<Listing />} />
        <Route path="/products/:productId" element={<Detail />} />
        <Route path="/api-response" element={<MockApi />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
