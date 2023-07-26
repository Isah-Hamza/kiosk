import React, { useState } from "react";
import AppLayoutNew from "../../layout/AppLayoutNew";
import hamza from "../../assets/images/hamza.jpeg";
import shoppingBag from "../../assets/images/image-shopping-bag-dd0f7627.svg";
import CustomButton from "../../components/Buttons/CustomButton";
import { FaEdit } from "react-icons/fa";
import { BiShare } from "react-icons/bi";
import UpdateStock from "./UpdateStock";
import EditProduct from "./EditProduct";
import PageHeader from "../../shared/PageHeader";
import ShareProduct from "./ShareProduct";

const ProductDetails = () => {
  const [updateStock, setUpdateStock] = useState(false);
  const [editProduct, setEditProduct] = useState(false);
  const [shareProduct, setShareProduct] = useState(false);
  return (
    <AppLayoutNew noHeader={true}>
      <div className="mx-4 sm:mx-7 my-10">
        <PageHeader title={"Product Details"} />
        <div className="bg-dimmed_white p-5 rounded-xl mt-5 min-h-[200px]">
          <div className=" text-center md:text-left flex flex-col md:flex-row sm:items-center gap-7">
            <div>
              <img
                src={shoppingBag}
                alt="shoppingbag"
                className="w-48 m-auto md:m-[unset]"
              />
            </div>
            <div className="grid sm:grid-cols-2 sm:gap-10 flex-1 max-w-[600px]">
              <div>
                <p className="text-lg font-medium text-gray-700">
                  Ridiculous Product
                </p>
                <p className="font-medium text-lg">₦100.00</p>
                <p className="mt-3 mb-1">Total Value: ₦0.00</p>
                <p className="mb-1">22 total units</p>
                <p className="mb-1">10 units sold</p>
              </div>
              <div className="mt-7">
                <p className="mb-2.5">
                  <span className="font-medium opacity-70">Cost Price: </span>
                  ₦100.00
                </p>
                <p className="mb-2.5">
                  <span className="font-medium opacity-70">Type: </span>
                  Digital Product
                </p>
                <p className="mb-2.5">
                  <span className="font-medium opacity-70">Tags: </span>
                  School, Students, Classroom
                </p>
                <p className="mb-2.5">
                  <span className="font-medium opacity-70">SKU: </span>
                  No Sku
                </p>
              </div>
            </div>
          </div>
          <div className="border-y py-3 mt-5 flex justify-between">
            <CustomButton
              clickHandler={() => setShareProduct(true)}
              className={
                "hidden sm:flex items-center gap-2 !bg-transparent border !px-7 !border-[rgba(0,158,170,.4)] !text-[rgba(0,158,170,1)] font-semibold  !py-2.5 rounded-lg"
              }
            >
              {" "}
              <BiShare />
              Share Product
            </CustomButton>
            <div className="w-full sm:w-[unset] flex flex-col sm:flex-row gap-3">
              <CustomButton
                clickHandler={() => setUpdateStock(true)}
                className={
                  "w-full sm:w-[unset] !bg-transparent border !px-7 !border-[rgba(0,158,170,.4)] !text-[rgba(0,158,170,1)] font-semibold  !py-2.5 rounded-lg"
                }
              >
                {" "}
                Update Stock
              </CustomButton>
              <CustomButton
                clickHandler={() => setEditProduct(true)}
                className={
                  "flex gap-1 justify-center items-center !bg-[rgba(0,158,170,0.3)] !px-7 font-semibold !text-[rgba(0,158,170,1)] border !border-[rgba(0,158,170,1)]  !py-2.5 rounded-lg"
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
                www.ridiculousguy.glowbiz.com/products/123
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
      {shareProduct ? <ShareProduct {...{ setShareProduct }} /> : null}
    </AppLayoutNew>
  );
};

export default ProductDetails;
