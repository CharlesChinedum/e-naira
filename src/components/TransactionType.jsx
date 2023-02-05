import React, { useState } from "react";

const TransactionType = () => {
  const [img, setImg] = useState("airtel");

  const handleChange = (e) => {
    setImg(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className="border-2 border-gray-200 w-full rounded-md">
      <div className="flex items-center px-2">
        <select
          name="cars"
          id="cars"
          className="py-5 bg-white w-full flex justify-between outline-none"
          onChange={handleChange}
        >
          <option value="airtel">Airtime Purchase</option>
          <option value="mtn">Data Purchase</option>
        </select>
      </div>
    </div>
  );
};

export default TransactionType;
