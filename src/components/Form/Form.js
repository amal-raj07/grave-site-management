import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../Buttons";
import { ButtonCancel } from "../Buttons";
function Form() {
  const navigate = useNavigate();
  const NavigateFunction = () => {
    navigate("/");
  };
  return (
    <div className=" bg-slate-300 px-10 py-8 rounded-[1rem] lg:w-[40rem] w-80 ml-80 mt-5">
      <h2 className="text-black text-3xl font-semibold mb-6">Add Section</h2>
      <div className="lg:grid lg:grid-cols-2 gap-4 pb-12 border-b-2 border-[#ccc]">
        <div className="">
          <label className="block mb-2 text-base font-medium text-gray-900">
            Code
          </label>
          <input
            placeholder="Code"
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus-visible:outline-0 block w-full p-2.5"
            id="Code"
            name="Code"
          />
        </div>
        <div className="">
          <label className="block mb-2 text-base font-medium text-gray-900">
            Name
          </label>
          <input
            placeholder="Name"
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus-visible:outline-0 block w-full p-2.5"
            id="Name"
            name="Name"
          />
        </div>
        <div className="col-span-2">
          <label className="block mb-2 text-base font-medium text-gray-900">
            Description
          </label>
          <textarea
            placeholder="Description"
            rows={3}
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 focus-visible:outline-0 block w-full p-2.5"
          />
        </div>
      </div>
      <div className="mt-3">
        <Button className=" bg-[#90ee90]">Submit</Button>
        <ButtonCancel onClick={NavigateFunction} className=" ml-3 bg-[#d3dad3]">Cancel</ButtonCancel>
      </div>
    </div>
  );
}

export default Form;
