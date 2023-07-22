import React from "react";
import CustomButton from "../../components/Buttons/CustomButton";
import CustomInput from "../../components/CustomInput";
import { FiPlus } from "react-icons/fi";

const UpdateStock = ({ setUpdateStock }) => {
  return (
    <div className="fixed inset-0 bg-black/60 overflow-hidden grid place-content-center z-[10001]">
      <div className="min-h-[300px] bg-white rounded-xl w-[450px] p-7 py-5">
        <div className="flex justify-between items-center">
          <p className="text-lg font-semibold text-primary capitalize ">
            Update Stock
          </p>
          <button onClick={() => setUpdateStock(false)}>
            <FiPlus className="rotate-45" size={22} />
          </button>
        </div>
        <p className="text-sm mt-3">
          Available Stock: <span className="font-medium">0</span>
        </p>
        <div className="grid grid-cols-2 gap-5 mt-7">
          <CustomInput
            className={"!bg-bg !py-3"}
            label={"Change In Stock"}
            id={"change"}
          />{" "}
          <CustomInput
            className={"!bg-bg !py-3"}
            label={"Total Stock"}
            id={"total"}
            readOnly
          />
        </div>
        <div className="col-span-2 mt-3">
          <label htmlFor="" className="text-sm">
            Reason
          </label>
          <textarea className="w-full border rounded h-20 text-sm placeholder:text-sm p-2 outline-none resize-none !bg-bg"></textarea>
        </div>
        <div className="col-span-2 mt-3">
          <label htmlFor="" className="text-sm">
            Note
          </label>
          <textarea className="w-full border rounded h-20 text-sm placeholder:text-sm p-2 outline-none resize-none !bg-bg"></textarea>
        </div>
        <CustomButton
          className={"w-full mt-5 border !px-7font-semibold  !py-3 rounded-md"}
        >
          Update Product Stock
        </CustomButton>
      </div>
    </div>
  );
};

export default UpdateStock;
