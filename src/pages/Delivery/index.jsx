import React, { useState } from "react";
import AppLayoutNew from "../../layout/AppLayoutNew";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../shared/PageHeader";
import TableTop from "../../components/Table/TableTop";
import NewDelivery from "./RecordNewDelivery";

const Delivery = () => {
  const navigate = useNavigate();
  const [addOrder, setAddOrder] = useState(false);

  const records = [
    {
      name: "#3289",
      email: "ridiculous@customer.com",
      phone: "09123456789",
      total_orders: 2,
      amount: "200.00",
      status: "pending",
      date_added: "23 Aug, 2023",
    },
    {
      name: "#9909",
      email: "test@customer.com",
      phone: "08028835099",
      total_orders: 0,
      amount: "0.00",
      status: "successful",
      date_added: "09 Dec, 2021",
    },
    {
      name: "#2323",
      email: "test@customer.com",
      phone: "08028835099",
      total_orders: 0,
      amount: "0.00",
      status: "failed",
      date_added: "09 Dec, 2021",
    },
  ];

  return (
    <AppLayoutNew noHeader={true}>
      <div className="mx-4 sm:mx-7 my-10">
        <PageHeader children={"All Deliveries"} />
        <div className="bg-dimmed_white p-5 rounded-xl mt-5">
          <TableTop
            what_to_add={"Create Order"}
            what_to_import={"Import Orders"}
            addHandler={() => setAddOrder(true)}
          />
          <div className="mt-2 w-full">
            <div className="overflow-x-auto">
              <table className="min-w-[900px] w-full table-auto border-separate border-spacing-y-3 ">
                <thead className="">
                  <tr className="!text-left !opacity-70 !font-semibold">
                    <th className="w-[150px] text-sm py-3 border-y !font-semibold pl-3 w-[32%]s">
                      Order ID
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
                      Order Amount
                    </th>
                    <th className="text-sm py-3 border-y !font-semibold">
                      {" "}
                      Status
                    </th>
                    <th className="text-sm py-3 border-y !font-semibold">
                      Date Created{" "}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <>
                    {records.map((item, idx) => (
                      <tr
                        onClick={() => navigate("/delivery/details")}
                        className="cursor-pointer pt-3 transition-all duration-300 shadow-sm hover:shadow-md bg-white mb-2"
                        key={idx}
                      >
                        <td className="text-sm py-2.5 pb-4 pl-3">
                          {item.name}
                        </td>
                        <td className="text-sm py-2.5 pb-4">{item.email}</td>
                        <td className="text-sm py-2.5 pb-4">{item.phone}</td>
                        <td className="text-sm  py-2.5 pb-4">₦{item.amount}</td>
                        <td className="text-sm  py-2.5 pb-4">{item.status}</td>
                        <td className="text-sm  py-2.5 pb-4">
                          {item.date_added}
                        </td>
                      </tr>
                    ))}
                  </>
                </tbody>
              </table>
            </div>
            <div className="flex justify-center mt-2">
              <div className="w-8 h-8 grid place-content-center rounded-md bg-bg">
                <span className="font-semibold text-primary">1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {addOrder ? (
        <NewDelivery closeHanlder={() => setAddOrder(false)} />
      ) : null}
    </AppLayoutNew>
  );
};

export default Delivery;
