import React from "react";

function PrimaryButton({
  children,
  type = "button",
  onClickFunction = () => {},
}) {
  return (
    <button
      className=" bg-blue-500 text-white  py-1 px-2 rounded-md hover:bg-blue-200 hover:text-slate-800 transition-colors duration-300 ease-in-out"
      type={type}
      onClick={onClickFunction}
    >
      {children}
    </button>
  );
}

export default PrimaryButton;
