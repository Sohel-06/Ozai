import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import { routes } from "./routes";
import Login from "./components/common/Login"

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {routes}
      </Route>
    </Routes>
  </BrowserRouter>
  );
};

export default App;
