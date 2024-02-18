import React from "react";

export default function Employees() {
  return (
    <div className=" fixed top-[-1] bottom-1 left-14 right-1 h-[91%] w-[90%] bg-gray-800 rounded-xl m-3 px-3 py-5 flex justify-center items-center font-arial">
      <div
        className=" fixed top-[-1] bottom-1 left-14 right-1 h-[91%] w-[90%] bg-gray-800 rounded-xl 
      m-3 px-3 py-5 flex justify-center items-center font-arial text-white"
      >
        <p className="text-3xl text-white absolute top-3 left-11">
          Vladmir Isadev
        </p>
        <button className=" flex items-center text-sm absolute top-3 right-4 bg-red-600 text-black rounded-md px-4 py-2">
          {/* <PlusIcon className="mr-2" /> */}
          <div>Download</div>
        </button>
        <div className="absolute flex my-12 mx-7 p-2 top-3 left-1">
          <p className="px-10 mx-1 py-1 rounded-md bg-gray-600">Overview</p>
          <p className="px-10 mx-1 py-1 rounded-md bg-gray-600">Charts</p>
          <p className="px-10 mx-1 py-1 rounded-md bg-gray-600">Credit Data</p>
          <p className="px-10 mx-1 py-1 rounded-md bg-gray-600">Transactions</p>
        </div>
        <div className="w-full  grid grid-flow-col grid-cols-3 px-8">
          <div className="relative top-[10%] rounded-md bg-gray-700 text-white px-[40px] py-[240px] mr-2">
            <div className="absolute top-2 text-sm left-2 text-blue-400">
              Transactions
            </div>
            <div className="absolute bottom-2 right-2 text-7xl"></div>
          </div>
          <div className="relative top-[10%] rounded-md bg-gray-700 text-white p-6 px-[40px] py-[200px] mr-2">
            <div className="absolute top-2 text-sm left-2 text-blue-400">
              Applicants Pending
            </div>
            <div className="absolute bottom-2 right-2 text-7xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
