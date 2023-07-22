import React, { useState } from "react";
import { BsCloudArrowUp, BsPatchCheckFill } from "react-icons/bs";
import CustomInput from "../../components/CustomInput";
import { FaLuggageCart } from "react-icons/fa";
import { PiCurrencyNgnLight } from "react-icons/pi";
import { GrCloudComputer } from "react-icons/gr";
import CustomButton from "../../components/Buttons/CustomButton";
import { FiPlus } from "react-icons/fi";
import CustomSelect from "../../components/CustomInput/Select";

const EditProduct = ({ setEditProduct }) => {
  const product_type = [
    {
      label: "Physical Product",
      value: 1,
    },
    {
      label: "Digital Product",
      value: 2,
    },
  ];

  return (
    <div className="overflow-auto fixed inset-0 bg-black/60 grid place-content-center z-[10001]">
      <div className="div w-full h-full ">
        <div className="mx-7 my-10 ">
          <div className="p-6 bg-white rounded-xl mt-48">
            <div className="border-b pb-7">
              <div className="flex items-center justify-between">
                <p className="font-semibold">Edit Product Information</p>
                <button onClick={() => setEditProduct(false)}>
                  <FiPlus className="rotate-45" size={22} />
                </button>
              </div>
            </div>
            <div className="mt-7 grid gap-4">
              <CustomInput
                className={"!bg-bg"}
                label={"Product Name"}
                id={"product_name"}
              />
              <div className="grid grid-cols-2 gap-5">
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
              </div>
              <CustomSelect
                allowFirstOption
                className={"!bg-bg grid-cols-2"}
                options={product_type}
                label={"Select Product Type"}
              />
              <div className="">
                <label htmlFor="" className="text-sm">
                  Product Description
                </label>
                <textarea
                  className="w-full border rounded h-20 text-sm placeholder:text-sm p-2 outline-none resize-none !bg-bg"
                  placeholder="Short Description"
                ></textarea>
              </div>
              <div className="">
                <p className="text-sm">Images of Product</p>
                <div className="border border-dashed rounded-md min-h-[100px] grid place-content-center">
                  <p>
                    Drag and Drop Images or <span>select from file</span>
                  </p>
                </div>
              </div>
              <div>
                <CustomButton className=" ml-auto mt-3 text-white text-sm flex items-center justify-end gap-2 !px-10 !py-3 rounded-md">
                  <BsCloudArrowUp size={20} /> Save Changes
                </CustomButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
