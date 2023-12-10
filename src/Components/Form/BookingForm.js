import React, { useContext } from "react";
import InputForm from "../Utilities/InputForm";
import PrimaryButton from "../Utilities/PrimaryButton";
import context from "../../MyContext";
import { useLocation } from "react-router-dom";

function BookingForm() {
  const ctx = useContext(context);
  console.log(ctx.formData);
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const editQuery = query.get("edit");
  return (
    <div>
      <div className=" bg-slate-900 text-slate-50 p-1.5 rounded-t-md">
        <h1 className=" sm:text-xl text-base">Booking Form</h1>
      </div>
      <div className="p-2 border-x-2 border-b-2 rounded-b-md">
        <form
          action={editQuery ? "/edit-booking" : "/add-booking"}
          method="post"
        >
          {editQuery && (
            <input
              type="text"
              name="id"
              id=""
              hidden
              defaultValue={ctx.formData.id}
            />
          )}
          <InputForm name={"name"} req={true} defaultValue={ctx.formData.name}>
            Name
          </InputForm>
          <InputForm
            name={"phone"}
            req={true}
            type="number"
            defaultValue={ctx.formData.phone}
          >
            Phone Number
          </InputForm>
          <div className="pt-1">
            <PrimaryButton type="submit">Submit Booking</PrimaryButton>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookingForm;
