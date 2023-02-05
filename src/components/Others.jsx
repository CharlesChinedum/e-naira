import React, { useState } from "react";
import MultipleSelect from "./TransactionType";

import CallOutlinedIcon from "@mui/icons-material/CallOutlined";

const Others = () => {
  const [count, setCount] = useState(0);

  const handleCountIncrease = () => {
    setCount((count) => count + 50);
  };

  const handleCountDecrease = () => {
    setCount((count) => (count > 0 ? count - 50 : count));
  };

  return (
    <div className="px-5  md:px-40 w-full  pt-5">
      <div>
        <p className="text-gray-500 text-lg poppins-title">Choose Category</p>
        <MultipleSelect />
      </div>

      <div className="w-full py-2">
        <p className="text-gray-500 text-lg poppins-title">Enter Amount</p>

        <div className="w-full flex gap-2 justify-between items-center pt-1">
          <div
            className="border-2 border-gray-200 py-3 px-5 text-2xl font-[700]"
            onClick={handleCountDecrease}
          >
            <span>-</span>
          </div>
          <div className="w-full">
            <input
              type="number"
              className="border-2 border-gray-200 py-4 font-extrabold text-black text-xl text-center w-full placeholder:font-extrabold placeholder:text-black focus:border-0 active:border-0 focus:outline-none active:outline-none"
              placeholder="N5,000.00"
              value={count}
            />
          </div>
          <div
            className="border-2 border-gray-200 py-3 px-5 text-2xl font-[700]"
            onClick={handleCountIncrease}
          >
            <span>+</span>
          </div>
        </div>
      </div>

      <div className="w-full">
        <p>Mobile Number</p>
        <div className="w-full my-3 flex justify-between rounded-md py-4 px-2 border-2 border-gray-200">
          <input
            type="number"
            placeholder="08123456789"
            className="border-0 font-[600] w-full text-lg text-black placeholder:font-[600] outline-none"
          />
          <div>
            <CallOutlinedIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Others;
