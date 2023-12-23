import React from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./Dashboard";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;
