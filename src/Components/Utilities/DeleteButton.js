import React from "react";

function DeleteButton({
  children,
  type = "button",
  onClickFunction = () => {},
}) {
  return (
    <button
      className=" bg-red-500 text-white rounded-md hover:bg-red-200 hover:text-slate-800 transition-colors duration-300 ease-in-out flex items-center justify-center"
      type={type}
      onClick={onClickFunction}
    >
      <span class="material-symbols-outlined text-lg">delete</span>
    </button>
  );
}

export default DeleteButton;
