import React, { useState } from "react";
import AppLayoutNew from "../../layout/AppLayoutNew";
import hamza from "../../assets/images/hamza.jpeg";
import shoppingBag from "../../assets/images/image-shopping-bag-dd0f7627.svg";
import CustomButton from "../../components/Buttons/CustomButton";
import { FaEdit } from "react-icons/fa";
import { BiShare } from "react-icons/bi";
import UpdateStock from "./UpdateStock";
import EditProduct from "./EditProduct";

const ProductDetails = () => {
  const [updateStock, setUpdateStock] = useState(false);
  const [editProduct, setEditProduct] = useState(false);

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
                clickHandler={() => setEditProduct(true)}
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
      {updateStock ? <UpdateStock {...{ setUpdateStock }} /> : null}
      {editProduct ? <EditProduct {...{ setEditProduct }} /> : null}
    </AppLayoutNew>
  );
};

export default ProductDetails;
