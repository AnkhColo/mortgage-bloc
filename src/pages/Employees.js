import React from "react";

export default function Employees() {
  return (
    <div className=" fixed top-[-1] bottom-1 left-14 right-1 h-[91%] w-[90%] bg-gray-800 rounded-xl m-3 px-3 py-5 flex justify-center items-center font-arial">
      <div
        className=" fixed top-[-1] bottom-1 left-14 right-1 h-[91%] w-[90%] bg-gray-800 rounded-xl 
      m-3 px-3 py-5 flex justify-center items-center font-arial text-white"
      >
        {/* Section 1 - Header elements */}
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

        {/* Section 2 - Grid elements */}
        <div className="w-full grid grid-flow-col grid-cols-3 px-4">
          <div className="absolute top-[18%] rounded-md  text-white w-[49%] px-[70px] py-[240px] mr-2 ml-2 right-2">
            <div className="absolute top-0 left-0  flex flex-col ">
              <div className=" rounded-md mb-2 bg-gray-700 w-[600px] h-[82px] ">
                <div>Number of Connected Bank Accounts</div>
                <div>2</div>
              </div>
              <div className=" rounded-md my-2 bg-gray-700 w-[600px] h-[82px] ">
                <div>Total Transactions Uploaded</div>
                <div>137</div>
              </div>
              <div className=" rounded-md my-2 bg-gray-700 w-[600px] h-[82px] ">
                <div>Balance Outstanding:</div>
                <div>COMING SOON</div>
                <div>0</div>
              </div>
              <div className=" rounded-md my-2 bg-gray-700 w-[600px] h-[82px] ">
                <div>Missed Payments</div>
                <div>0</div>
              </div>
              <div className=" rounded-md my-2 bg-gray-700 w-[600px] h-[82px] ">
                <div>Total Current Balance</div>
                <div>£4,409.49</div>
              </div>
            </div>
          </div>
          <div className="absolute top-[18%] rounded-md bg-gray-700 text-white w-[47%]  px-[100px] py-[240px] mr-2 ml-4 left-0">
            <div className="absolute top-2 text-sm left-2 text-blue-400">
              Applicants Pending
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
