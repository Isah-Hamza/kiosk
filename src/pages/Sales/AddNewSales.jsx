import React from "react";
import AppLayoutNew from "../../layout/AppLayoutNew";
import { BsCloudArrowUp, BsTrash2Fill } from "react-icons/bs";
import CustomInput from "../../components/CustomInput";
import { PiCurrencyNgnLight, PiPlusLight } from "react-icons/pi";
import CustomButton from "../../components/Buttons/CustomButton";
import CustomSelect from "../../components/CustomInput/Select";
import shoppingBag from "../../assets/images/image-shopping-bag-dd0f7627.svg";

const NewSales = () => {
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

  const sales_medium = [
    { label: "Select One", value: "0" },
    { label: "Social Media", value: "1" },
    { label: "Physical Store", value: "2" },
    { label: "Affiliate Marketing", value: "3" },
    { label: "Partnership", value: "4" },
    { label: "Others", value: "5" },
  ];

  const records = [
    { name: "Tomatoes", qty: 2, amount: "200.00" },
    { name: "Onions", qty: 5, amount: "50.00" },
  ];

  return (
    <AppLayoutNew noHeader={true}>
      <div className="mx-7 my-10 ">
        <p className="text-xl font-semibold opacity-80 mb-7">Record New Sale</p>
        <div className="grid grid-cols-[3.5fr,2fr] gap-8">
          <div className="p-6 bg-dimmed_white rounded-xl">
            <div className="border-b pb-5">
              <p className="text-sm font-medium opacity-70">Total Sum</p>
              <p className="font-bold text-2xl text-primary">₦0.00</p>
            </div>
            <div className="grid grid-cols-1 gap-5">
              <div className="mt-7 grid gap-5">
                <CustomSelect
                  className={"!bg-bg"}
                  options={products}
                  label={"Select Product(s) sold"}
                />
                <CustomSelect
                  className={"!bg-bg"}
                  options={customers}
                  label={"Find / Select Customer"}
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
                    id={"product_name"}
                    type="date"
                  />
                </div>
                <div className=" border-b pb-6">
                  <CustomSelect
                    className={"!bg-bg"}
                    options={payment_status}
                    label={"Payment Status"}
                  />
                </div>
                <div className=" border-b pb-6 -mt-1">
                  <label htmlFor="" className="text-sm">
                    Discounted Price (if applicable)
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
                <div className=" border-b pb-6">
                  <CustomSelect
                    className={"!bg-bg"}
                    options={sales_medium}
                    label={"Sales Medium / Channel"}
                  />
                </div>

                <div>
                  <CustomButton className=" ml-auto mt-2 text-white text-sm flex items-center justify-end gap-2 !px-10 !py-3 rounded-md">
                    Record Sale
                  </CustomButton>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full ">
            <div className="p-5 pt-3 bg-dimmed_white rounded-xl min-h-[200px] mb-12">
              <p className="">Selected Products</p>
              <table className="text-sm w-full table-auto border-separate border-spacing-y-3 ">
                <thead className="bg-[#f3f4f5] shadow">
                  <tr className="!text-left !opacity-70 !font-semibold bg-[#f3f4f5]">
                    <th className="text-xs w-[25%] py-2 !font-semibold pl-3">
                      Name
                    </th>
                    <th className="text-xs w-[25%] py-2 !font-semibold">
                      Quantity
                    </th>
                    <th className="text-xs w-[25%] py-2 !font-semibold">
                      Amount
                    </th>
                    <th className="text-xs w-[25%] py-2 !font-semibold"></th>
                  </tr>
                </thead>
                <tbody>
                  {records.map((item, idx) => (
                    <tr
                      className="pt-1 transition-all duration-300 shadow-sm hover:shadow-md bg-white mb-1"
                      key={idx}
                    >
                      <td className="py-2 text-xs pl-2 ">{item.name}</td>
                      <td className="py-2 text-xs pl-5">{item.qty}</td>
                      <td className="py-2 text-xs ">₦{item.amount}</td>

                      <td className="py-2 text-xs">
                        <div
                          // onClick={() => history.push("/customer/details")}
                          className="bg-primaryColor-900/80 text-red-500 flex items-center gap-1.5
                     rounded cursor-pointer px-4 py-1 w-fit"
                        >
                          {" "}
                          <BsTrash2Fill color="" />
                          <span>Remove</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <CustomButton
                  className={
                    " !bg-[rgba(0,158,170,0.3)] !px-3 font-semibold !text-[rgba(0,158,170,1)] border !border-[rgba(0,158,170,1)]  !py-1.5 rounded-lg"
                  }
                >
                  Add More
                </CustomButton>
                <CustomButton
                  className={
                    "!bg-transparent border !px-3 !border-[rgba(0,158,170,.4)] !text-[rgba(0,158,170,1)] font-semibold  !py-1.5 rounded-lg"
                  }
                >
                  Select From Stock
                </CustomButton>
              </div>
            </div>

            <p className="font-medium opacity-75">
              Did you made bulk sales? You can save stress by uploading a .xlxs
              or .csv file in a specific format.
            </p>
            <p className="text-sm opacity-70 mt-7">
              Streamline data integration by effortlessly importing your CSV
              file and unlocking a world of possibilities for seamless content
              management and organization. You may click on the button below to
              download a sample csv file on how to prepare your own .csv file
              for your sales for upload.
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

export default NewSales;
