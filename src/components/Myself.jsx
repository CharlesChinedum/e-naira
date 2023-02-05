import { useState } from "react";
import MultipleSelect from "./TransactionType";

const Suggestion = ({ text }) => {
  return (
    <div className="bg-green-100 rounded-md py-3 px-2 font-[600] md:px-7 md:py-4 hover:cursor-pointer">
      N{text}
    </div>
  );
};

const suggestions = [100, 500, 1000, 5000];

const Myself = () => {
  const [count, setCount] = useState(0.0);

  const handleCountIncrease = () => {
    setCount((count) => count + 50);
  };

  const handleCountDecrease = () => {
    setCount((count) => (count > 0 ? count - 50 : count));
  };

  return (
    <div className="px-5 md:px-40 w-full pt-5">
      <div>
        <p className="text-gray-500 text-lg poppins-title">Choose Category</p>
        <MultipleSelect />
      </div>

      <div className="w-full py-2">
        <p className="text-gray-500 text-lg poppins-title">Enter Amount</p>

        <div className="w-full flex gap-2 justify-between items-center py-2">
          <div
            className="border-2 border-gray-200 py-3 px-5 text-2xl font-[700]"
            onClick={handleCountDecrease}
          >
            <span>-</span>
          </div>
          <div className="w-full">
            <input
              type="number"
              className="border-2 border-gray-200 py-4 font-extrabold text-black text-xl text-center w-full placeholder:font-extrabold placeholder:text-black"
              placeholder="N0.00"
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

      <div className="flex gap-3 justify-between">
        {suggestions.map((price, index) => (
          <Suggestion text={price} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Myself;
