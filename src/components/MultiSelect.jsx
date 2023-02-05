import React, { useState } from "react";

const MultiSelect = () => {
  const [img, setImg] = useState("airtel");

  const handleChange = (e) => {
    setImg(e.target.value);
  };

  return (
    <div className="border-2 border-gray-200 w-full rounded-md">
      <div className="flex items-center px-3">
        <div>
          <img src={`/${img}.png`} alt="" className="w-10 rounded-lg" />
        </div>
        <select
          name="cars"
          id="cars"
          className="py-5 pl-2 bg-white w-full flex justify-between outline-none"
          onChange={handleChange}
        >
          <option value="airtel">Airtel Nigeria</option>
          <option value="mtn">MTN Nigeria</option>
          <option value="glo">GLO Nigeria</option>
          <option value="etisalat">9Mobile Nigeria</option>
        </select>
      </div>
    </div>
  );
};

export default MultiSelect;
