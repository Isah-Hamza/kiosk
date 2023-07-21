import React, { useState } from "react";
import AppLayoutNew from "../../layout/AppLayoutNew";
import { BsCloudArrowUp, BsPatchCheckFill, BsTrash3Fill } from "react-icons/bs";
import CustomInput from "../../components/CustomInput";
import { FaUser, FaUsers } from "react-icons/fa";
import { PiCurrencyNgnLight, PiPlusLight } from "react-icons/pi";
import CustomButton from "../../components/Buttons/CustomButton";
import CustomSelect from "../../components/CustomInput/Select";
import shoppingBag from "../../assets/images/image-shopping-bag-dd0f7627.svg";

const RecordExpenses = () => {
  const [type, setType] = useState(-1);

  const products = [
    { label: "Choose One / Multiple", value: "1" },
    { label: "Ridiculous Product", value: "1" },
    { label: "Testing Product", value: "2" },
    { label: "Digital Product", value: "3" },
  ];

  const customers = [
    { label: "John Smith 2345", value: "1" },
    { label: "Ridiculous Customer", value: "1" },
    { label: "Testing Customer", value: "2" },
    { label: "Digital Customer", value: "3" },
  ];

  const payment_type = [
    { label: "Select One", value: "0" },
    { label: "Cash", value: "1" },
    { label: "Transfer", value: "2" },
    { label: "Debit Card", value: "3" },
  ];

  const payment_status = [
    { label: "Select One", value: "0" },
    { label: "Fully Paid", value: "1" },
    { label: "Partially Paid", value: "2" },
    { label: "Unpaid", value: "3" },
  ];

  const category = [
    { label: "Services / Maintenance", value: "1" },
    { label: "Salary", value: "2" },
    { label: "Workmanship", value: "3" },
    { label: "Food", value: "4" },
    { label: "Transport", value: "5" },
    { label: "Others", value: "6" },
  ];

  return (
    <AppLayoutNew noHeader={true}>
      <div className="mx-7 my-10 ">
        <p className="text-xl font-semibold opacity-80 mb-7">Record Expenses</p>
        <div className="grid grid-cols-[3.5fr,2fr] gap-8">
          <div className="p-6 bg-dimmed_white rounded-xl">
            <div className="border-b pb-5">
              <p className="text-sm font-medium opacity-70">Total Sum</p>
              <p className="font-bold text-2xl text-primary">₦0.00</p>
            </div>
            <div className="grid grid-cols-1 gap-5">
              <div className="mt-7 grid gap-5">
                <div className=" border-b pb-7 -mt-1">
                  <label htmlFor="" className="text-sm">
                    Total Amount Spent
                  </label>
                  <div className="flex-1 relative">
                    <div className="span absolute left-3 top-4 text-lg">
                      <PiCurrencyNgnLight />{" "}
                    </div>
                    <input
                      type="text"
                      className="!bg-bg w-full rounded border outline-none h-full px-5 pl-8 py-[14px] text-sm placeholder:text-sm"
                    />
                  </div>
                </div>

                <CustomInput
                  className={"!bg-bg"}
                  label={"Who Did You Paid To"}
                  placeholder={'Select Beneficiary'}
                  hasIcon
                  Icon={FaUser}
                />
                <div className="grid grid-cols-2 gap-5 border-b pb-7">
                  <CustomSelect
                    className={"!bg-bg"}
                    options={payment_type}
                    label={"Select Payment Type"}
                  />
                  <CustomInput
                    className={"!bg-bg"}
                    label={"Sales Date"}
                    id={"sales_date"}
                    type="date"
                  />
                </div>
                <CustomSelect
                  allowFirstOption
                  className={"!bg-bg"}
                  options={category}
                  label={"Select Expense Category"}
                />
                <div className="">
                  <label htmlFor="" className="text-sm">
                    What was the payment for (optional)
                  </label>
                  <textarea
                    className="w-full border rounded h-28 text-sm placeholder:text-sm p-2 outline-none resize-none !bg-bg"
                    placeholder="e.g purchase of new items..."
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>

                <div>
                  <CustomButton className=" ml-auto mt-2 text-white text-sm flex items-center justify-end gap-2 !px-10 !py-3 rounded-md">
                    <BsCloudArrowUp size={20} /> Submit Expense{" "}
                  </CustomButton>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full ">
           
            <p className="font-medium opacity-75">
              Did you know that if you had performed a bulk expenses, you can save stress by uploading a .xlxs
              or .csv file in a specific format.
            </p>
            <p className="text-sm opacity-70 mt-7">
              Streamline data integration by effortlessly importing your CSV
              file and unlocking a world of possibilities for seamless content
              management and organization. You may click on the button below to
              download a sample csv file on how to prepare your own .csv file
              for your expenses for upload.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <CustomButton
                className={
                  " !bg-[rgba(0,158,170,0.3)] !px-3 font-semibold !text-[rgba(0,158,170,1)] border !border-[rgba(0,158,170,1)]  !py-2.5 rounded-lg"
                }
              >
                Import Sales
              </CustomButton>
              <CustomButton
                className={
                  "!bg-transparent border !px-3 !border-[rgba(0,158,170,.4)] !text-[rgba(0,158,170,1)] font-semibold  !py-2.5 rounded-lg"
                }
              >
                Download Sample
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
    </AppLayoutNew>
  );
};

export default RecordExpenses;
