import React, { useState } from "react";
import { FiEye, FiPlus } from "react-icons/fi";
import { BiPlus } from "react-icons/bi";
import CustomButton from "../../components/Buttons/CustomButton";
import CustomSelect from "../../components/CustomInput/Select";
import AppLayoutNew from "../../layout/AppLayoutNew";
import { ImDownload3 } from "react-icons/im";
import { GiCheckMark } from "react-icons/gi";
import { CgClose, CgSearch } from "react-icons/cg";
import hamza from "../../assets/images/hamza.jpeg";
import shoppingBag from "../../assets/images/image-shopping-bag-dd0f7627.svg";
import { BsCloudArrowUp, BsTrash3Fill } from "react-icons/bs";
import CustomInput from "../../components/CustomInput";
import { FaUser, FaUsers } from "react-icons/fa";

const Products = () => {
  const [addNew, setAddNew] = useState(false);
  const [type, setType] = useState(0);

  const products_summary = [
    { title: "Items", value: 6 },
    { title: "Total Units", value: 42 },
    { title: "Total Value", value: "₦12,000" },
  ];
  const filter = [
    { label: "No Filter", value: 1 },
    { label: "Active", value: 2 },
    { label: "Inactive", value: 3 },
    { label: "Suspended", value: 4 },
  ];
  const staff_type = [
    { label: "Select Role", value: null },
    { label: "Adhoc", value: 1 },
    { label: "Sub Admin", value: 2 },
    { label: "Admin", value: 3 },
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
        <p className="text-2xl font-semibold opacity-80 mb-7">Products</p>
        <div className="bg-dimmed_white p-5 rounded-xl mt-5">
          <div className="flex justify-between items-center ">
            <div className="w-full flex gap-4">
              <CustomButton
                clickHandler={() => setAddNew(true)}
                className={
                  " !bg-[rgba(0,158,170,0.3)] font-semibold !text-[rgba(0,158,170,1)] border !border-[rgba(0,158,170,1)] !px-7 !py-1 rounded-lg"
                }
                children={
                  <div className="flex items-center gap-1 !text-sm">
                    <BiPlus size={20} />
                    <span>Add Product</span>
                  </div>
                }
              />
              <div className="flex-1 relative">
                <div className="span absolute left-3 top-[11px] ">
                  <CgSearch size={18} className="text-gray-500" />
                </div>
                <input
                  type="text"
                  placeholder="Search product by name"
                  className="w-full rounded-lg border outline-none h-full px-5 pl-10 text-sm placeholder:text-sm"
                />
              </div>
              <CustomButton
                clickHandler={() => setAddNew(true)}
                className={
                  "!py-2 !rounded-lg !px-7 bg-transparent border !border-[rgba(0,158,170,1)] !text-[rgba(0,158,170,1)]"
                }
                children={
                  <div className="flex items-center gap-1 !text-sm">
                    <span>Import Products</span>
                  </div>
                }
              />
            </div>
          </div>
          <div className="table mt-2 w-full">
            <table className="w-full table-auto border-separate border-spacing-y-3 ">
              <thead className="">
                <tr className="!text-left !opacity-70 !font-semibold">
                  <th className="text-sm py-3 border-y !font-semibold pl-3 w-[52%]">
                    Product Details
                  </th>
                  <th className="text-sm py-3 border-y !font-semibold">
                    Selling Price
                  </th>
                  <th className="text-sm py-3 border-y !font-semibold">
                    {" "}
                    Available Stock
                  </th>
                  <th className="text-sm py-3 border-y !font-semibold">
                    {" "}
                    Total Value
                  </th>
                  <th className="text-sm py-3 border-y !font-semibold">
                    Updated{" "}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    className="px-3 font-semibold  py-5 pt-1 border-b opacity-80"
                    colSpan={5}
                  >
                    Items
                  </td>
                </tr>
                <>
                  {records.map((item, idx) => (
                    <tr
                      className="pt-3 transition-all duration-300 shadow-sm hover:shadow-md bg-white mb-2"
                      key={idx}
                    >
                      <td className="text-sm py-2 pl-4 flex items-center gap-1">
                        <img
                          className="w-16 rounded-full"
                          src={shoppingBag}
                          alt="user image"
                        />
                        <span> {item.name}</span>
                      </td>
                      <td className="text-sm pl-2 py-2">
                        ₦{item.sellingPrice}
                      </td>
                      <td className="text-sm pl-10 py-2">
                        {item.stockAvailable}
                      </td>
                      <td className="text-sm pl-2 py-2">₦{item.totalValue}</td>
                      <td className="text-sm pl-2 py-2">{item.joinDate}</td>
                    </tr>
                  ))}
                </>
              </tbody>
            </table>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-5 mt-5">
          {products_summary.map((item, idx) => (
            <div
              className="text-center grid place-content-center bg-white/90 rounded-xl p-5 h-24"
              key={idx}
            >
              <p className="text-xl font-semibold opacity-80"> {item.value}</p>
              <p className="opacity-75 text-sm font-medium ">{item.title} </p>
            </div>
          ))}
        </div>
      </div>
    </AppLayoutNew>
  );
};

export default Products;
