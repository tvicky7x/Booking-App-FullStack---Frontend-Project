import React, { useContext } from "react";
import ListItem from "./ListItem";
import context from "../../MyContext";

function QueueList() {
  const ctx = useContext(context);

  return (
    <div>
      <div className=" bg-slate-900 text-slate-50 p-1.5 rounded-t-md">
        <h1 className="sm:text-xl text-base">Booking Queue</h1>
      </div>
      <ul className="px-2 border-x-2 border-b-2 rounded-b-md divide-y-2">
        {ctx.list.map((item, i) => {
          return <ListItem key={i} data={item} />;
        })}
        {ctx.list.length === 0 && (
          <li className="py-3">No Booking Queue formed</li>
        )}
      </ul>
    </div>
  );
}

export default QueueList;
