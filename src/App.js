import React from "react";
import AdminLanding from "./pages/admin/admin_landing";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    
      <Routes>
        <Route element={<AdminLanding />} path="admin" />
      </Routes>
    
  );
}

export default App;
