import React from "react";
import AdminLanding from "./pages/admin/admin_landing";
import { Route, Routes } from "react-router-dom";
import Landing from "./landing";
import Login from "./login";
import SignUp from "./signup";
import ManageProduct from "./pages/admin/manage_products"

function App() {
  return (
    
      <Routes>
        <Route element={<Landing />} path="/home" />
        <Route element={<Login />} path="login" />
        <Route element={<SignUp />} path="signup" />
        <Route element={<AdminLanding />} path="admin" />
        <Route element={<ManageProduct />} path="admin/manageProducts" />
      </Routes>
    
  );
}

export default App;
