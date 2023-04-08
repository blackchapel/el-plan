import React from "react";
import AdminLanding from "./pages/admin/admin_landing";
import { Route, Routes } from "react-router-dom";
import Landing from "./landing";
import Login from "./pages/admin/login";
import SignUp from "./pages/admin/signup";

function App() {
  return (
    
      <Routes>
        <Route element={<Landing />} path="/" />
        <Route element={<Login />} path="login" />
        <Route element={<SignUp />} path="signup" />
        <Route element={<AdminLanding />} path="admin" />
      </Routes>
    
  );
}

export default App;
