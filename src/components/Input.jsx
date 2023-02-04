import React from "react";

const Input = ({ placeholder }) => {
  return (
    <input
      type="number"
      placeholder={placeholder}
      className="w-[3.5em] border-2 border-gray-300 px-3 py-4 rounded-md text-black text-center text-lg font-bold placeholder:font-bold placeholder:text-black"
    />
  );
};

export default Input;
