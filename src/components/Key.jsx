import React from "react";

const Key = ({ text, bg, className, divClass, onClick }) => {
  return (
    <div
      className={`${bg} w-5 flex justify-center py-7 px-10 ${divClass}`}
      onClick={onClick}
    >
      <p className={className}>{text}</p>
    </div>
  );
};

export default Key;
