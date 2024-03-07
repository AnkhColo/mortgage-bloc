import React from "react";
import { ReactComponent as PlusIcon } from "../icons/plus-circle.svg";

export default function Employees() {
  return (
    <div className=" fixed top-[-1] bottom-1 left-14 right-1 h-[91%] w-[90%] bg-gray-800 rounded-xl m-3 px-3 py-5 flex justify-center items-center font-arial">
      <div
        className=" fixed top-[-1] bottom-1 left-14 right-1 h-[91%] w-[90%] bg-gray-900 rounded-xl 
      m-3 px-3 py-5 flex justify-center items-center font-arial text-white"
      >
        {/* Section 1 - Header elements */}
        <p className="text-3xl text-white absolute top-3 left-11">
          Vladmir Isadev
        </p>
        <button className=" flex items-center text-sm absolute top-3 right-4 bg-red-600 text-black rounded-md px-4 py-2">
          <PlusIcon className="mr-2" />
          <div>Download</div>
        </button>
        <div className="absolute flex my-12 mx-4 py-2  top-3 left-0">
          <p className="px-10 mx-1 py-1 rounded-md bg-slate-800">Overview</p>
          <p className="px-10 mx-1 py-1 rounded-md bg-slate-800">Charts</p>
          <p className="px-10 mx-1 py-1 rounded-md bg-slate-800">Credit Data</p>
          <p className="px-10 mx-1 py-1 rounded-md bg-slate-800">
            Transactions
          </p>
        </div>
        {/* Section 1 - Block elements LEFT */}
        <div className="absolute top-[18%] flex flex-col rounded-md bg-slate-800 text-white w-[47%]  px-[100px] py-[255px] mr-2 ml-4 left-0">
          <div className="absolute top-4 left-1 flex text-sm">
            <div className="mx-2 border-2 border-gray-600 rounded-lg bg-transparent px-6 py-2 ">
              1 Nov, 1996
            </div>
            <div className=" border-2 border-gray-600 rounded-lg bg-transparent px-6 py-2 ">
              27 Y.O.
            </div>
          </div>
          <div className=" absolute top-16 left-3 border-2 border-gray-600 rounded-lg bg-transparent w-[440px] px-2 py-2 ">
            11 West 53 Street, Manhattan New York, New York, 10019
          </div>

          {/* bottom-stuff */}
          <div className=" absolute left-1 bottom-1 flex text-sm">
            {/* bottom-stuff-left */}
            <div className=" right-1 mx-4 ">
              DONE
              <div className="mx-2 border-2 border-blue-600 rounded-lg bg-transparent px-6  my-1 ">
                Bank Account Name Match
              </div>
              <div className="mx-2 border-2 border-blue-600 rounded-lg bg-transparent px-6  my-1 ">
                Bank Account Connected
              </div>
              <div className="mx-2 border-2 border-blue-600 rounded-lg bg-transparent px-6  my-1 ">
                Data Categorised
              </div>
            </div>

            {/* bottom-stuff-right */}
            <div className=" left-1 mx-4 ">
              IN PROGRESS
              <div className="mx-2 border-2 border-gray-600 rounded-lg bg-red-500 overflow-visible px-12 py-2  my-1 ">
                Document Verification
              </div>
              <div className="flex">
                <div className="mx-2 border-2 border-gray-600 rounded-lg bg-red-500 px-6 py-2 my-1 ">
                  KYC Check
                </div>
                <div className="mx-2 border-2 border-gray-600 rounded-lg bg-red-500 px-6 py-2 my-1 ">
                  AML Check
                </div>
              </div>
              <div className="mx-2 border-2 border-gray-600 rounded-lg bg-red-500 px-6 py-2 my-1 ">
                Selfie Check
              </div>
            </div>
          </div>
        </div>

        {/* Section 2 - Grid elements RIGHT */}
        <div className="w-full grid grid-flow-col grid-cols-3 px-4">
          <div className="absolute top-[18%] rounded-md  text-white w-[49%] px-[70px] py-[240px] mr-2 ml-2 right-2">
            <div className="absolute top-0 left-0  flex flex-col ">
              <Section title={"Number of Connected Bank Accounts"} value={2} />
              <Section title={"Total Transactions Uploaded"} value={137} />
              <Section title={"Balance Outstanding:"} value={0}></Section>
              <Section title={"Missed Payments"} value={0} />
              <Section title={"Total Current Balance"} value={"£4,409.49"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({ title, value }) {
  return (
    <>
      <div className="relative rounded-md my-1 bg-slate-800 w-[570px] h-[89px]">
        <div className="absolute top-2 left-2 text-blue-600">{title}</div>
        <div className="text-7xl absolute right-2 top-2 ">{value}</div>
      </div>
    </>
  );
}
