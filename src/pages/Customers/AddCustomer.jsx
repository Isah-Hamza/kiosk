import React from "react";
import AppLayoutNew from "../../layout/AppLayoutNew";
import { BsCloudArrowUp } from "react-icons/bs";
import CustomInput from "../../components/CustomInput";
import { FaUser } from "react-icons/fa";
import { PiCurrencyNgnLight } from "react-icons/pi";
import CustomButton from "../../components/Buttons/CustomButton";
import CustomSelect from "../../components/CustomInput/Select";
import { MdCall, MdEmail } from "react-icons/md";
import PageHeader from "../../shared/PageHeader";

const AddCustomer = () => {
  const gender = [
    { label: "Select One", value: "0" },
    { label: "Male", value: "1" },
    { label: "Female", value: "2" },
  ];

  return (
    <AppLayoutNew noHeader={true}>
      <div className="mx-4 sm:mx-7 my-10 min-w-[300px]">
        <PageHeader title={"Add Customer"} />
        <div className="grid grid-cols-[1fr,1.4fr] sm:grid-cols-2 lg:hidden max-w-md mb-5  gap-4 mt-8">
          <CustomButton
            className={
              " !bg-[rgba(0,158,170,0.3)] !px-3 font-semibold !text-[rgba(0,158,170,1)] border !border-[rgba(0,158,170,1)]  !py-2.5 rounded-lg"
            }
          >
            Import Custs.
          </CustomButton>
          <CustomButton
            className={
              "!bg-transparent border !px-3 !border-[rgba(0,158,170,.4)] !text-[rgba(0,158,170,1)] font-semibold  !py-2.5 rounded-lg"
            }
          >
            Download Sample
          </CustomButton>
        </div>
        <div className="grid lg:grid-cols-[3.5fr,2fr] gap-8">
          <div className="p-6 bg-dimmed_white rounded-xl">
            <div className="grid grid-cols-1 gap-5">
              <div className=" grid gap-6">
                <CustomInput
                  className={"!bg-bg"}
                  label={"Customer Name *"}
                  placeholder={"Johnson Doe"}
                />
                <div>
                  <CustomInput
                    className={"!bg-bg"}
                    label={"Customer Public display Name *"}
                    placeholder={"Johnson Doe 2345"}
                    hasIcon
                    Icon={FaUser}
                  />
                  <span className="text-[11px]">
                    This name will show on invoices, receipts and messages.
                  </span>
                </div>

                <div className="grid sm:grid-cols-2 gap-5 border-b pb-8">
                  <CustomInput
                    className={"!bg-bg"}
                    label={"Customer Email *"}
                    placeholder={"itshamzy@gmail.com"}
                    hasIcon
                    Icon={MdEmail}
                  />
                  <CustomInput
                    className={"!bg-bg"}
                    label={"Customer Phone *"}
                    placeholder={"08123456789"}
                    hasIcon
                    Icon={MdCall}
                  />
                </div>
                <div className="grid gap-5">
                  <p className="opacity-80 font-semibold mb-2">
                    Additional Information (optional)
                  </p>
                  <div className="grid sm:grid-cols-2 gap-5 ">
                    <CustomSelect
                      className={"!bg-bg"}
                      options={gender}
                      label={"Gender"}
                    />
                    <CustomInput
                      className={"!bg-bg"}
                      label={"Date of Birth"}
                      id={"dob"}
                      type="date"
                    />
                  </div>
                  <CustomInput
                    className={"!bg-bg"}
                    label={"Customer Address"}
                    placeholder={"ABC street, along XYZ company"}
                    id={"address"}
                  />
                  <div className="">
                    <label htmlFor="" className="text-sm">
                      Note about customer
                    </label>
                    <textarea
                      className="w-full border rounded h-28 text-sm placeholder:text-sm p-2 outline-none resize-none !bg-bg"
                      placeholder="e.g John Doe is a very ridiculous customer..."
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                    ></textarea>
                  </div>
                </div>

                <div>
                  <CustomButton className=" ml-auto mt-2 text-white text-sm flex items-center justify-end gap-3 !px-10 !py-3 rounded-md">
                    Create Customer{" "}
                  </CustomButton>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block w-full ">
            <p className="font-medium opacity-75">
              Got lots of customers to add? You can simply upload a .csv or
              .xlsx file that follows a specific format described on our sample.
            </p>
            <p className="text-sm opacity-70 mt-7">
              Streamline data integration by effortlessly importing your CSV
              file and unlocking a world of possibilities for seamless content
              management and organization. You may click on the button below to
              download a sample csv file on how to prepare your own .csv file
              for your customers for upload.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <CustomButton
                className={
                  " !bg-[rgba(0,158,170,0.3)] !px-3 font-semibold !text-[rgba(0,158,170,1)] border !border-[rgba(0,158,170,1)]  !py-2.5 rounded-lg"
                }
              >
                Import Customers
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

export default AddCustomer;
