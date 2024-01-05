import React from "react";

const Dashboard = () => {
  return (
    <div className=" fixed top-[-1] bottom-1 left-14 right-1 h-[91%] w-[90%] bg-slate-500 rounded-xl m-3 px-3 py-5 flex justify-center items-center">
      <p className="text-3xl absolute top-3 left-4">Lender Admin</p>
      <button className="text-gl absolute top-3 right-4 bg-red-600 rounded-md px-2 py-1">
        Invite Employee
      </button>
      <div className="absolute flex m-10 p-2 top-3 left-4">
        <p className="px-2">Dashboard</p>
        <p className="px-2">Employees</p>
      </div>
      <div className=" absolute flex mx-2 top-16 right-5 px-2">
        <p className="px-3">Reset User Password</p>
        <input type="text" placeholder="Search" />
      </div>
      <div className="w-full  grid grid-flow-col grid-cols-4">
        <div className="relative top-[10%] rounded-md bg-blue-400 text-white px-[40px] py-[200px]">
          1
        </div>
        <div className="relative top-[10%] rounded-md bg-blue-400 text-white p-6 px-[40px] py-[200px]">
          2
        </div>
        <div className="relative top-[10%] rounded-md bg-blue-400 text-white p-6 px-[40px] py-[200px]">
          3
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
