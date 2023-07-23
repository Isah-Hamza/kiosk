import React from "react";
import AppLayoutNew from "../../layout/AppLayoutNew";
import { CgSearch } from "react-icons/cg";
import CustomButton from "../../components/Buttons/CustomButton";
import { BiPlus } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Customers = () => {
  const navigate = useNavigate();
  const records = [
    {
      name: "Ridiculous Customer 123",
      email: "ridiculous@customer.com",
      phone: "09123456789",
      total_orders: 2,
      total_spent: "200.00",
      date_added: "23 Aug, 2023",
    },
    {
      name: "Testing Testd",
      email: "test@customer.com",
      phone: "08028835099",
      total_orders: 0,
      total_spent: "0.00",
      date_added: "09 Dec, 2021",
    },
  ];

  return (
    <AppLayoutNew noHeader={true}>
      <div className="mx-7 my-10">
        <p className="text-2xl font-semibold opacity-80 mb-7">Customers</p>
        <div className="bg-dimmed_white p-5 rounded-xl mt-5">
          <div className="w-full flex gap-4 pt-3">
            <CustomButton
              clickHandler={() => navigate("/add-customer")}
              className={
                " !bg-[rgba(0,158,170,0.1)] font-semibold !text-[rgba(0,158,170,1)] border !border-[rgba(0,158,170,1)] !px-7 !py-1 rounded-lg"
              }
              children={
                <div className="flex items-center gap-1 !text-sm">
                  <BiPlus size={20} />
                  <span>Add Customer</span>
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
                className="w-full rounded-sm border outline-none h-full px-5 pl-10 text-sm placeholder:text-sm"
              />
            </div>
            <CustomButton
              className={
                "!py-2 !rounded-lg !px-7 bg-transparent border !border-[rgba(0,158,170,1)] !text-[rgba(0,158,170,1)]"
              }
              children={
                <div className="flex items-center gap-1 !text-sm">
                  <span>Import Contact</span>
                </div>
              }
            />
          </div>
          <div className="table mt-2 w-full">
            <table className="w-full table-auto border-separate border-spacing-y-3 ">
              <thead className="">
                <tr className="!text-left !opacity-70 !font-semibold">
                  <th className="text-sm py-3 border-y !font-semibold pl-3 w-[32%]s">
                    Customer Name
                  </th>
                  <th className="text-sm py-3 border-y !font-semibold">
                    Email
                  </th>
                  <th className="text-sm py-3 border-y !font-semibold">
                    {" "}
                    Phone
                  </th>
                  <th className="text-sm py-3 border-y !font-semibold">
                    {" "}
                    Total Spent
                  </th>
                  <th className="text-sm py-3 border-y !font-semibold">
                    {" "}
                    Total Orders
                  </th>
                  <th className="text-sm py-3 border-y !font-semibold">
                    Date Added{" "}
                  </th>
                </tr>
              </thead>
              <tbody>
                <>
                  {records.map((item, idx) => (
                    <tr
                      onClick={() => navigate("#")}
                      className="cursor-pointer pt-3 transition-all duration-300 shadow-sm hover:shadow-md bg-white mb-2"
                      key={idx}
                    >
                      <td className="text-sm py-2.5 pb-4 pl-3">{item.name}</td>
                      <td className="text-sm py-2.5 pb-4">{item.email}</td>
                      <td className="text-sm py-2.5 pb-4">{item.phone}</td>
                      <td className="text-sm  py-2.5 pb-4">
                        ₦{item.total_spent}
                      </td>
                      <td className="text-sm pl-8 py-2.5 pb-4">
                        {item.total_orders}
                      </td>
                      <td className="text-sm  py-2.5 pb-4">
                        {item.date_added}
                      </td>
                    </tr>
                  ))}
                </>
              </tbody>
            </table>
            <div className="flex justify-center mt-2">
              <div className="w-8 h-8 grid place-content-center rounded-md bg-bg">
                <span className="font-semibold text-primary">1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayoutNew>
  );
};

export default Customers;
