import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const context = createContext({
  list: [],
  getBookings: () => {},
  deleteBooking: () => {},
  formData: {},
  editingBooking: () => {},
});

export default context;

export function ContextProvider({ children }) {
  const [formData, setForm] = useState({ name: "", phone: "" });
  const [list, setList] = useState([]);
  const navigate = useNavigate();

  // getting bookings
  function getBookings(data) {
    setList(data);
  }

  //  deleting booking
  async function deleteBooking(data) {
    const newList = list.filter((item) => item.id !== data.id);
    setList(newList);
    await axios.delete("/delete-booking", { data });
  }

  //  editing booking
  async function editingBooking(data) {
    navigate("/booking-page?edit=true");
    console.log(data);
    setForm(data);
  }

  useEffect(() => {
    (async () => {
      const bookingData = await axios.get("/get-booking");
      setList(bookingData.data);
    })();
  }, []);

  return (
    <context.Provider
      value={{ list, getBookings, deleteBooking, formData, editingBooking }}
    >
      {children}
    </context.Provider>
  );
}
