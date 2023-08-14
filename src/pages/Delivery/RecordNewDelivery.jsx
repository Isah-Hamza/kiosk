import React from "react";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/Buttons/CustomButton";
import CustomSelect from "../../components/CustomInput/Select";
import { FiPlus } from "react-icons/fi";

const NewDelivery = ({ closeHanlder }) => {
  const address = [
    { label: "Select One", value: "0" },
    { label: "JEDO Estate, Abuja", value: "1" },
    { label: "Victoria Island, Lagos", value: "2" },
  ];

  const vehicle = [
    { label: "Select One", value: "0" },
    { label: "Lamborghini", value: "1" },
    { label: "Rolls Roys", value: "2" },
    { label: "Land Cruiser Jeep", value: "3" },
  ];

  const category = [
    { label: "Select One", value: "0" },
    { label: "Services / Maintenance", value: "1" },
    { label: "Salary", value: "2" },
    { label: "Workmanship", value: "3" },
    { label: "Food", value: "4" },
    { label: "Transport", value: "5" },
    { label: "Others", value: "6" },
  ];

  return (
    <div className="fixed inset-0 bg-black/60 overflow-hidden grid place-content-center z-[10001]">
      <form
        // onSubmit={handleSubmit}
        className="min-h-[300px] overflow-auto bg-white rounded-xl w-[500px] p-7 px-8"
      >
        <div className="flex justify-between items-center">
          <p className="text-lg font-semibold text-primary capitalize ">
            Record New Order
          </p>
          <button onClick={closeHanlder}>
            <FiPlus className="rotate-45" size={22} />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-5 mt-7">
          <div>
            <CustomSelect
              className={"!bg-bg !py-3"}
              label={"Pickup Address"}
              id={"pickup"}
              options={address}
            />{" "}
          </div>
          <div>
            <CustomSelect
              className={"!bg-bg !py-3"}
              label={"Delivery Address"}
              id={"delivery"}
              options={address}
            />{" "}
          </div>
        </div>
        <div className="mt-5">
          <CustomInput
            className={"!bg-bg !py-3 "}
            label={"Item Weight(kg)"}
            id={"weight"}
          />{" "}
        </div>
        <div className="grid grid-cols-2 gap-5 mt-5">
          <div>
            <CustomSelect
              className={"!bg-bg !py-3"}
              label={"Category"}
              id={"cat"}
              options={category}
            />{" "}
          </div>
          <div>
            <CustomSelect
              className={"!bg-bg !py-3"}
              label={"Vehicle Type"}
              id={"vehicle"}
              options={vehicle}
            />{" "}
          </div>
        </div>

        <div className="col-span-2 mt-5">
          <label htmlFor="" className="text-sm">
            Description
          </label>
          <textarea
            placeholder="Describe the delivery item"
            className="w-full border rounded h-20 text-sm placeholder:text-sm p-2 outline-none resize-none !bg-bg"
          ></textarea>
        </div>
        <CustomButton
          type={"button"}
          className={"w-full mt-5 border !px-7font-semibold  !py-3 rounded-md"}
        >
          Start Order
        </CustomButton>
      </form>
    </div>
  );
};

export default NewDelivery;
