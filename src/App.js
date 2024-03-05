import React from "react";
import Sidebar from "./components/Sidebar";
import Dashboards from "./pages/Dashboards";
import { Route, Routes } from "react-router";
import Employees from "./pages/Employees";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboards />} />
        <Route path="employees" element={<Employees />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
