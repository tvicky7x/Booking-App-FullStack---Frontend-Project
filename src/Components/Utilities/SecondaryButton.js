import React from "react";

function SecondaryButton({
  children,
  type = "button",
  onClickFunction = () => {},
}) {
  return (
    <button
      className=" bg-slate-200  py-1 px-2 rounded-md hover:bg-slate-300 transition-colors duration-300 ease-in-out"
      type={type}
      onClick={onClickFunction}
    >
      {children}
    </button>
  );
}

export default SecondaryButton;
