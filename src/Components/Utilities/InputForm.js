import React from "react";

function InputForm({
  children,
  name,
  type = "text",
  req = false,
  defaultValue = "",
}) {
  return (
    <div className="flex flex-col space-y-1 mb-2">
      <label htmlFor="" className="  ps-0.5">
        {children}
      </label>
      <input
        defaultValue={defaultValue}
        required={req}
        type={type}
        name={name}
        id=""
        className=" focus:outline-none rounded-md py-1 px-2 border-2 focus:border-blue-300"
      />
    </div>
  );
}

export default InputForm;
