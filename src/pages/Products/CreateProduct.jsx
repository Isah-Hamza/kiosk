import React, { useState } from "react";
import AppLayoutNew from "../../layout/AppLayoutNew";
import { BsCloudArrowUp, BsPatchCheckFill, BsTrash3Fill } from "react-icons/bs";
import CustomInput from "../../components/CustomInput";
import { FaLuggageCart, FaUser, FaUsers } from "react-icons/fa";
import { PiCurrencyNgnLight } from "react-icons/pi";
import { GrCloudComputer } from "react-icons/gr";
import CustomButton from "../../components/Buttons/CustomButton";

const CreateProduct = () => {
  const [type, setType] = useState(-1);

  return (
    <AppLayoutNew noHeader={true}>
      <div className="mx-7 my-10 ">
        <p className="text-2xl font-semibold opacity-80 mb-7">Create Product</p>
        <div className="grid grid-cols-[3.5fr,2fr] gap-8">
          <div className="p-6 bg-dimmed_white rounded-xl">
            <div className="border-b pb-7">
              <p className="font-semibold">Product Information</p>
              <p className="text-sm opacity-70">
                All you need is a name and a price to create a product
              </p>
            </div>
            <div className="mt-7 grid gap-4">
              <CustomInput
                className={"!bg-bg"}
                label={"Product Name"}
                id={"product_name"}
              />
              <div>
                <label htmlFor="" className="text-sm">
                  Cost Price
                </label>
                <div className="flex-1 relative">
                  <div className="span absolute left-3 top-4 text-lg">
                    <PiCurrencyNgnLight />{" "}
                  </div>
                  <input
                    type="text"
                    className="!bg-bg w-full rounded border outline-none h-full px-5 pl-9 py-[14px] text-sm placeholder:text-sm"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="" className="text-sm">
                  Selling Price
                </label>
                <div className="flex-1 relative">
                  <div className="span absolute left-3 top-4 text-lg">
                    <PiCurrencyNgnLight />{" "}
                  </div>
                  <input
                    type="text"
                    className="!bg-bg w-full rounded border outline-none h-full px-5 pl-9 py-[14px] text-sm placeholder:text-sm"
                  />
                </div>
              </div>
              <div className="">
                <label className="text-sm mb-1" htmlFor="">
                  Select Type
                </label>
                <div className="grid grid-cols-2 gap-4 overflow-hidden text-center ">
                  <div
                    onClick={() => {
                      setType(0);
                    }}
                    className={`${
                      type === 0 && " !border-primary"
                    } cursor-pointer flex flex-col items-center gap-4 py-5 pt-7 !bg-bg rounded border relative`}
                  >
                    {type === 0 ? (
                      <BsPatchCheckFill className="absolute top-3 left-3 text-primary" />
                    ) : null}
                    <FaLuggageCart size={30} className="-mt-1" />
                    <p className="max-w-[150px] text-sm -mt-2">
                      Physical Product
                    </p>
                  </div>
                  <div
                    onClick={() => {
                      setType(1);
                    }}
                    className={`${
                      type === 1 && " !border-primary"
                    } cursor-pointer flex flex-col items-center py-5 gap-3 border !bg-bg rounded relative`}
                  >
                    {type === 1 ? (
                      <BsPatchCheckFill className="absolute top-3 left-3 text-primary" />
                    ) : null}
                    <GrCloudComputer size={30} />
                    <p className="max-w-[150px] text-sm">Digital Product</p>
                  </div>
                </div>
              </div>

              <div className="">
                <label htmlFor="" className="text-sm">
                  Product Description (optional)
                </label>
                <textarea
                  className="w-full border rounded h-28 text-sm placeholder:text-sm p-2 outline-none resize-none !bg-bg"
                  placeholder="Short Description"
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <div>
                <CustomButton className=" ml-auto mt-2 text-white text-sm flex items-center justify-end gap-2 !px-10 !py-3 rounded-md">
                  <BsCloudArrowUp size={20} /> Save Product
                </CustomButton>
              </div>
            </div>
          </div>
          <div className="w-full ">
            <p className="font-medium opacity-75">
              You may also import your products in bulk by uploading a .xlxs
              file in a specific format
            </p>
            <p className="text-sm opacity-70 mt-6">
              Streamline data integration by effortlessly importing your CSV
              file and unlocking a world of possibilities for seamless content
              management and organization. You may click on the button below to
              download a sample csv file on how to prepare your own .csv file
              for your products for upload.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <CustomButton
                className={
                  " !bg-[rgba(0,158,170,0.3)] !px-3 font-semibold !text-[rgba(0,158,170,1)] border !border-[rgba(0,158,170,1)]  !py-2.5 rounded-lg"
                }
              >
                Import Products
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

export default CreateProduct;
