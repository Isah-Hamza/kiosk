import React, { useState } from "react";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/Buttons/CustomButton";
import CustomSelect from "../../components/CustomInput/Select";
import { FiPlus } from "react-icons/fi";
import { PiCurrencyNgnLight } from "react-icons/pi";

const NewDelivery = ({ closeHanlder }) => {
  const [step, setStep] = useState(1);

  const address = [
    { label: "Select One", value: "0" },
    { label: "JEDO Estate, Abuja", value: "1" },
    { label: "Victoria Island, Lagos", value: "2" },
  ];

  const vehicle = [
    { label: "Select One", value: "0" },
    { label: "Bike", value: "1" },
    { label: "Car", value: "2" },
    { label: "Truck", value: "3" },
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

  const weights = ["<5kg", "10kg", "50kg", "100kg", "500kg", "500kg>"];

  return (
    <div className="fixed inset-0 bg-black/60 overflow-hidden grid place-content-center z-[10001]">
      <form
        // onSubmit={handleSubmit}
        className="min-h-[300px] overflow-auto bg-white rounded-xl w-full sm:w-[500px] p-7 px-8"
      >
        <div className="flex justify-between items-center">
          <p className="text-lg font-semibold text-primary capitalize ">
            Record New Order
          </p>
          <button onClick={closeHanlder}>
            <FiPlus className="rotate-45" size={22} />
          </button>
        </div>
        {step == 1 ? (
          <>
            <div className="grid sm:grid-cols-2 gap-5 mt-7">
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
                label={"Recipient Name"}
                id={"name"}
              />{" "}
            </div>
            <div className="grid sm:grid-cols-2 gap-5 mt-5">
              <CustomInput
                className={"!bg-bg !py-3 "}
                label={"Recipient Email"}
                id={"email"}
                type="email"
              />{" "}
              <CustomInput
                className={"!bg-bg !py-3 "}
                label={"Phone Number"}
                id={"phone"}
              />{" "}
            </div>
            <div className="mt-5">
              <label htmlFor="" className="text-sm">
                Weight
              </label>
              <div className="mt-2 sm:mt-0 flex items-center justify-center sm:justify-between gap-2 flex-wrap ">
                {weights.map((w, idx) => (
                  <button
                    type="button"
                    className="border rounded-lg p-2 px-3 text-sm"
                    key={idx}
                  >
                    {w}
                  </button>
                ))}
              </div>
            </div>

            <div className="col-span-2 mt-4">
              <label htmlFor="" className="text-sm">
                Description
              </label>
              <textarea
                placeholder="Describe the delivery item"
                className="w-full border rounded h-20 text-sm placeholder:text-sm p-2 outline-none resize-none !bg-bg"
              ></textarea>
            </div>
            <CustomButton
              clickHandler={() => setStep(2)}
              type={"button"}
              className={
                "w-full mt-5 border !px-7font-semibold  !py-3 rounded-md"
              }
            >
              Proceed to Next
            </CustomButton>
          </>
        ) : (
          <>
            <div className="mt-6">
              <CustomSelect
                className={"!bg-bg !py-3"}
                label={"Select Vehicle Type"}
                id={"vehicleType"}
                options={vehicle}
              />{" "}
            </div>
            <div className="grid grid-cols-2 gap-5 mt-6">
              <div className="">
                <label htmlFor="" className="text-sm">
                  Price
                </label>
                <div className="flex-1 relative">
                  <div className="span absolute left-3 top-4 text-lg">
                    <PiCurrencyNgnLight />{" "}
                  </div>
                  <input
                    value={"200"}
                    type="text"
                    disabled
                    className="!bg-bg w-full rounded border outline-none h-full px-5 pl-8 py-[14px] text-sm placeholder:text-sm"
                  />
                </div>
              </div>
              <div className="">
                <label htmlFor="" className="text-sm">
                  Speed
                </label>
                <div className="flex-1 relative">
                  <div className="span absolute left-3 top-4 text-lg">
                    <PiCurrencyNgnLight />{" "}
                  </div>
                  <input
                    value={"45km/hr"}
                    disabled
                    type="text"
                    className="!bg-bg w-full rounded border outline-none h-full px-5 pl-8 py-[14px] text-sm placeholder:text-sm"
                  />
                </div>
              </div>
            </div>
            <div className="mt-6">
              <CustomInput
                className={"!bg-bg !py-3 "}
                label={"Preferred Pickup Date"}
                id={"time"}
                type="date"
              />{" "}
            </div>
            <div className="mt-6">
              <CustomInput
                className={"!bg-bg !py-3 "}
                label={"Preferred Pickup Time"}
                id={"time"}
                type="time"
              />{" "}
            </div>
            <div className="grid grid-cols-2 gap-5 mt-10">
              <CustomButton
                clickHandler={() => setStep(1)}
                type={"button"}
                className={
                  "w-full !bg-white !border border-primary  !text-primary !px-7 font-semibold  !py-3 rounded-md"
                }
              >
                Go Back
              </CustomButton>
              <CustomButton
                clickHandler={() => setStep(2)}
                type={"button"}
                className={
                  "w-full  border !px-7  font-semibold !py-3 rounded-md"
                }
              >
                Proceed to Pay
              </CustomButton>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default NewDelivery;
