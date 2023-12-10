// client/src/App.js
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import BookingPage from "./Pages/BookingPage";
import QueuePage from "./Pages/QueuePage";
import Navigation from "./Components/Navigation/Navigation";

const App = () => {
  return (
    <div className=" text-slate-800 font-poppins">
      <Navigation />

      <div className=" p-3">
        <div className=" max-w-2xl mx-auto bg-white drop-shadow-md rounded-md">
          <Routes>
            <Route path="/" element={<Navigate to={"/booking-page"} />}></Route>
            <Route path="/booking-page" element={<BookingPage />}></Route>
            <Route path="/queue-page" element={<QueuePage />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
