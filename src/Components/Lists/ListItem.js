import React, { useContext } from "react";
import SecondaryButton from "../Utilities/SecondaryButton";
import DeleteButton from "../Utilities/DeleteButton";
import context from "../../MyContext";

function ListItem({ data }) {
  const ctx = useContext(context);
  return (
    <li className=" py-3 grid grid-cols-12 gap-x-2 text-sm sm:text-base">
      <p className=" sm:col-span-5 col-span-4 self-center">{data.name}</p>
      <p className=" sm:col-span-5 col-span-4 self-center">{data.phone}</p>
      <div className=" sm:col-span-1 col-span-2 grid">
        <SecondaryButton
          onClickFunction={() => {
            ctx.editingBooking(data);
          }}
        >
          Edit
        </SecondaryButton>
      </div>
      <div className=" sm:col-span-1 col-span-2 grid">
        <DeleteButton
          onClickFunction={() => {
            ctx.deleteBooking(data);
          }}
        />
      </div>
    </li>
  );
}

export default ListItem;
