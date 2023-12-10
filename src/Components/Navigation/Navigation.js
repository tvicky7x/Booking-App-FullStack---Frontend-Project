import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className=" px-3 bg-slate-200 shadow-lg mb-5 ">
      <div className=" py-4  max-w-3xl mx-auto flex justify-between items-center">
        <p className=" font-semibold sm:text-3xl text-xl">Booking App</p>
        <ul className=" flex items-center space-x-4 sm:text-lg text-base">
          <li>
            <NavLink
              to={"/booking-page"}
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "text-slate-600"
              }
            >
              Booking
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/queue-page"}
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "text-slate-600"
              }
            >
              Queue
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
