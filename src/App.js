import React from "react";
import AdminLanding from "./pages/admin/admin_landing";
import { Route, Routes } from "react-router-dom";
import Landing from "./landing";
import Login from "./login";
import SignUp from "./signup";
import ManageProduct from "./pages/admin/manage_products"
import ViewSales from "./pages/admin/view_sales";
import CouponManager from "./pages/admin/coupon_manager";

function App() {
  return (
    
      <Routes>
        <Route element={<Landing />} path="/home" />
        <Route element={<Login />} path="login" />
        <Route element={<SignUp />} path="signup" />
        <Route element={<AdminLanding />} path="admin" />
        <Route element={<ManageProduct />} path="admin/manageProducts" />
        <Route element={<ViewSales />} path="admin/viewSales" />
        <Route element={<CouponManager />} path="admin/couponManager" />
      </Routes>
    
  );
}

export default App;
