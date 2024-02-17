import React from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./Dashboard";
import { Route, Routes } from "react-router";
import Employees from "./Employees";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <Routes>
        <Route path="/Dashboard" element={Dashboard} />
        <Route path="/Employees" element={Employees} />
      </Routes>
    </div>
  );
}

export default App;
