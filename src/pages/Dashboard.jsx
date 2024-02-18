import React, { useState } from "react";
import { ReactComponent as PlusIcon } from "../icons/plus-circle.svg";

const Dashboard = () => {
  const [transactions, setTransactions] = useState("1,598");
  const [pendingApp, setPendingApp] = useState(0);
  const [completedApp, setCompletedApp] = useState(0);

  return (
    <div className=" fixed top-[-1] bottom-1 left-14 right-1 h-[91%] w-[90%] bg-gray-800 rounded-xl m-3 px-3 py-5 flex justify-center items-center font-arial">
      <p className="text-3xl text-white absolute top-3 left-11">Lender Admin</p>
      <button className=" flex items-center text-sm absolute top-3 right-4 bg-red-600 rounded-md px-4 py-2">
        <PlusIcon className="mr-2" />
        <div>Invite Employee</div>
      </button>
      <div className="absolute flex my-12 mx-7 p-2 top-3 left-1">
        <p className="px-10 mx-1 py-1 rounded-md bg-gray-600">Dashboard</p>
        <p className="px-10 mx-1 py-1 rounded-md bg-gray-600">Employees</p>
      </div>
      {/* <div className=" absolute flex mx-2 top-16 right-5 px-2">
        <p className="px-3">Reset User Password</p>
        <input type="text" placeholder="Search" className="rounded-lg" />
      </div> */}
      <div className="w-full  grid grid-flow-col grid-cols-3 px-8">
        <div className="relative top-[10%] rounded-md bg-gray-700 text-white px-[40px] py-[240px] mr-2">
          <div className="absolute top-2 text-sm left-2 text-blue-400">
            Transactions
          </div>
          <div className="absolute bottom-2 right-2 text-7xl">
            {transactions}
          </div>
        </div>
        <div className="relative top-[10%] rounded-md bg-gray-700 text-white p-6 px-[40px] py-[200px] mr-2">
          <div className="absolute top-2 text-sm left-2 text-blue-400">
            Applicants Pending
          </div>
          <div className="absolute bottom-2 right-2 text-7xl">{pendingApp}</div>
        </div>
        <div className="relative top-[10%] rounded-md bg-gray-700 text-white p-6 px-[40px] py-[200px] mr-2">
          <div className="absolute top-2 text-sm left-2 text-blue-400">
            Applicants Completed
          </div>
          <div className="absolute bottom-2 right-2 text-7xl">
            {completedApp}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
