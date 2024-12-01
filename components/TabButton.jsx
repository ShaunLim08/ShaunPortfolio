import React from "react";

//1c
const TabButton = ({ active, selectTab, children }) => {
  const buttonClass = active 
    ? "text-red-500 border-b border-red-500" 
    : "text-black";
  return (
    <button onClick={selectTab}>
      <p className={`mr-5 font-semibold hover:text-gray-400 ${buttonClass}`}>
        {children}
      </p>
    </button>
  );
};

export default TabButton;
