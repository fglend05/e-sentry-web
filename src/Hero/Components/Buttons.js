import React from "react";

const Buttons = ({ Icon, title, textColor, textSize, onClick }) => {
  return (
    <button
      className={`${textColor} ${textSize} block mt-4 px-5 py-3 rounded-lg hover:bg-[#9E9E9E] lg:inline-block lg:mt-0 hover:text-white mr-4`}
      onClick={onClick}
    >
      {Icon && <Icon className="object-contain w-[25px] h-[25px]" />}
      <span>{title}</span>
    </button>
  );
};

export default Buttons;
