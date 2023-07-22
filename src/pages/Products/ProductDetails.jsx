import React, { useState } from "react";
import AppLayoutNew from "../../layout/AppLayoutNew";
import hamza from "../../assets/images/hamza.jpeg";
import shoppingBag from "../../assets/images/image-shopping-bag-dd0f7627.svg";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/Buttons/CustomButton";
import { FaEdit } from "react-icons/fa";
import { BiShare } from "react-icons/bi";
import { FiPlus } from "react-icons/fi";
import CustomInput from "../../components/CustomInput";

const ProductDetails = () => {
  const navigate = useNavigate();
  const [updateStock, setUpdateStock] = useState(false);
  const products_summary = [
    { title: "Items", value: 6 },
    { title: "Total Units", value: 42 },
    { title: "Total Value", value: "₦12,000" },
  ];

  const records = [
    {
      image: hamza,
      name: "Digital Product",
      sellingPrice: "100",
      joinDate: "Apr 09 2023",
      stockAvailable: 2,
      totalValue: "200.00",
    },
    {
      image: hamza,
      name: "Testing Product",
      sellingPrice: "700",
      joinDate: "Aug 23 2023",
      stockAvailable: 0,
      totalValue: "700.00",
    },
  ];

  return (
    <AppLayoutNew noHeader={true}>
      <div className="mx-7 my-10">
        <p className="text-2xl font-semibold opacity-75 mb-7">
          Product Details
        </p>
        <div className="bg-dimmed_white p-5 rounded-xl mt-5 min-h-[200px]">
          <div className="flex items-center gap-7">
            <div>
              <img src={shoppingBag} alt="shoppingbag" className="w-48" />
            </div>
            <div className="grid grid-cols-2 gap-10 flex-1 max-w-[600px]">
              <div>
                <p className="text-lg font-medium text-gray-700">
                  Ridiculous Product
                </p>
                <p className="font-medium text-lg">₦100.00</p>
                <p className="mt-3">Total Value: ₦0.00</p>
                <p>22 total units</p>
                <p>10 units sold</p>
              </div>
              <div>
                <p className="mb-3">
                  <span className="font-medium opacity-70">Cost Price: </span>
                  ₦100.00
                </p>
                <p className="mb-3">
                  <span className="font-medium opacity-70">Type: </span>
                  Digital Product
                </p>
                <p className="mb-3">
                  <span className="font-medium opacity-70">Tags: </span>
                  School, Students, Classroom
                </p>
                <p className="mb-3">
                  <span className="font-medium opacity-70">SKU: </span>
                  No Sku
                </p>
              </div>
            </div>
          </div>
          <div className="border-y py-3 mt-5 flex justify-between">
            <CustomButton
              className={
                "flex items-center gap-2 !bg-transparent border !px-7 !border-[rgba(0,158,170,.4)] !text-[rgba(0,158,170,1)] font-semibold  !py-2.5 rounded-lg"
              }
            >
              {" "}
              <BiShare />
              Share Product
            </CustomButton>
            <div className=" flex gap-3">
              <CustomButton
                clickHandler={() => setUpdateStock(true)}
                className={
                  "!bg-transparent border !px-7 !border-[rgba(0,158,170,.4)] !text-[rgba(0,158,170,1)] font-semibold  !py-2.5 rounded-lg"
                }
              >
                {" "}
                Update Stock
              </CustomButton>
              <CustomButton
                className={
                  "flex gap-1 items-center !bg-[rgba(0,158,170,0.3)] !px-7 font-semibold !text-[rgba(0,158,170,1)] border !border-[rgba(0,158,170,1)]  !py-2.5 rounded-lg"
                }
              >
                <FaEdit />
                Edit Product
              </CustomButton>
            </div>
          </div>
          <div className="text-sm mt-10 mb-3">
            <div>
              <p className="font-medium">Product url link</p>
              <p className="text-blue-500">
                https://www.glowbiz.ridiculousguy.com/product/123
              </p>
            </div>
            <div className="mt-5">
              <p className="font-medium">Product description</p>
              <p>
                This is the description that you supplied while creating this
                product
              </p>
            </div>
          </div>
        </div>
      </div>
      {updateStock ? (
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
              className={
                "w-full mt-5 border !px-7font-semibold  !py-3 rounded-md"
              }
            >
              Update Product Stock
            </CustomButton>
          </div>
        </div>
      ) : null}
    </AppLayoutNew>
  );
};

export default ProductDetails;
