import React, { useState, useEffect } from "react";
import { MdArrowRightAlt } from "react-icons/md";
import { PiHandWaving } from "react-icons/pi";
import { GiCheckMark } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import { FiEye } from "react-icons/fi";
import AppLayout from "../../layout/AppLayout";
import AreaCharts from "../../components/Chart/AreaCharts";
import hamza from "../../assets/images/hamza.jpeg";
import CustomSelect from "../../components/CustomInput/Select";
import AppLayoutNew from "../../layout/AppLayoutNew";

function Home() {
  const summary = [
    {
      title: "Total Balance",
      value: "6,143,000",
      color: "#f3f3f0",
    },
    {
      title: "Total Savings",
      value: "252,000",
      color: "#fcf7fd",
    },
    {
      title: "Total Debts",
      value: "1,090,000",
      color: "#fcf5f5",
    },
    {
      title: "Total Loans",
      value: "3,300,000",
      color: "#f4f5f5",
    },
  ];

  const records = [
    {
      image: hamza,
      name: "Ridiculous Guy",
      email: "ridiculousguy@gmail.com",
      score: "100,000",
      joinDate: "02/23/2023",
      activated: false,
      numberOfReqs: 23,
      indebted: "89,000",
    },
    {
      image: hamza,
      name: "Isah Hamza",
      email: "itshamzy@gmail.com",
      score: "30,000",
      joinDate: "02/23/2023",
      activated: true,
      numberOfReqs: 19,
      indebted: "23,000",
    },
    {
      image: hamza,
      name: "Obajemu Samuel",
      email: "objsamuel@gmail.com",
      score: "150,000",
      joinDate: "12/30/2020",
      activated: true,
      numberOfReqs: 32,
      indebted: "90,000",
    },
    {
      image: hamza,
      name: "Hyper-realistic User",
      email: "unrealuser@gmail.com",
      score: "90,000",
      joinDate: "08/02/2021",
      activated: false,
      numberOfReqs: 11,
      indebted: "54,000",
    },
  ];

  const analysis = [
    {
      title: "Net Balance",
      desc: "Final balance after expenditure.",
      amount: "6.3M",

      rate: "+40%",
    },
    {
      title: "Total Sales",
      desc: "Total sales made this month.",
      amount: "15.9M",

      rate: "-25%",
    },
    {
      title: "Total Inventory Items",
      desc: "Total items in inventory.",
      amount: "2.5K",

      rate: "-13%",
      notCurrency: true,
    },
    {
      title: "Total Income Revenue",
      desc: "Total amount made this month.",
      amount: "312K",
      rate: "+53%",
    },
  ];

  const filter = [
    { label: "Filter by Period", value: null },
    { label: "All Time", value: 0 },
    { label: "Today", value: 1 },
    { label: "This Week", value: 2 },
    { label: "This Month", value: 3 },
    { label: "This Year", value: 4 },
  ];

  const topPerformingProducts = [
    {
      name: "Radiated Radio",
      status: "available",
      total_sold: "3,046",
      total_remaining: "109",
    },
    {
      name: "Blended Blender",
      status: "finished",
      total_sold: "2,250",
      total_remaining: "04",
    },
    {
      name: "Spectacular Spec",
      status: "finished",
      total_sold: "2,250",
      total_remaining: "0",
    },
    {
      name: "Extended Extenstions",
      status: "available",
      total_sold: "3,046",
      total_remaining: "404",
    },
    {
      name: "Fanatical Fans",
      status: "finished",
      total_sold: "4,900",
      total_remaining: "0",
    },
  ];

  const topPerformingCustomers = [
    {
      name: "Paulo Coelho",
      status: "active",
      worth: "650,000",
    },
    {
      name: "John Ebenizer",
      status: "inactive",
      worth: "500,900",
    },
    {
      name: "Elegant Person",
      status: "active",
      worth: "370,460",
    },
    {
      name: "Promice Grace",
      status: "inactive",
      worth: "770,460",
    },
    {
      name: "Isaih Jenefer",
      status: "active",
      worth: "1,070,460",
    },
  ];

  const lastFiveCredits = [
    {
      name: "Fortune 500",
      status: "failed",
      worth: "950,300",
      color: "red",
    },
    {
      name: "Jay & Sons",
      status: "confirmed",
      worth: "730,600",
      color: "green",
    },
    {
      name: "Pelemo Limited",
      status: "pending",
      worth: "650,000",
      color: "#ff9700",
    },
    {
      name: "Hamza and Co.",
      status: "confirmed",
      worth: "770,900",
      color: "green",
    },
    {
      name: "Saint Electronics",
      status: "failed",
      worth: "770,900",
      color: "red",
    },
  ];

  return (
    <AppLayoutNew>
      {/* <div className="px-7 mb-7 flex justify-between items-center">
        <div className="">
          <p className="flex items-center gap-1 font-bold text-2xl">
            <span className="font-normal">Hello, </span>
            <span className="capitalize">Isah Hamza</span>
            <span className="block">
              {" "}
              <PiHandWaving color="#f8a300" />{" "}
            </span>
          </p>
          <p className="text-sm">This is how kiosk is performing.</p>
        </div>

        <div className="flex gap-3">
          <CustomSelect className={"min-w-[200px] px-4"} options={filter} />
        </div>
      </div> */}

      {/* main */}
      <div className="rounded text  px-7 pt-0 mb-5">
        <p className="text-2xl font-semibold mb-4">Overview</p>
        <div className="grid grid-cols-4 gap-3">
          {analysis.map((item, idx) => (
            <div
              key={idx}
              style={{ backgroundColor: "white" }}
              className="flex flex-col justify-between rounded-md min-h-[180px] p-5"
            >
              <div className="flex items-center justify-between">
                <p className="font-medium">{item.title} </p>
                <MdArrowRightAlt
                  color="rgb(97, 51, 51)"
                  className="cursor-pointer"
                  size={25}
                />
              </div>
              <div className=" mt-auto">
                <p className="text-xs">{item.desc}</p>
                <div className="flex justify-between items-center">
                  <p className="font-medium opacity-70 text-2xl">
                    {!item.notCurrency ? "₦" : ""}
                    {item.amount}{" "}
                  </p>
                  <div className="px-2 py-1.5 text-xs rounded-md text-primary font-medium bg-secondary/70">
                    {item.rate}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="">
        <div className=" px-7 grid grid-cols-3 gap-5">
          <div className="flex flex-col col-span-2 bg-[#fff]/90 rounded p-4 pt-5">
            <p className="text-xl font-semibold mb-5">Monthly Disbursement</p>
            <AreaCharts />
          </div>
          <div className="bg-white/90 rounded p-5 flex flex-col">
            <p className="text-xl font-semibold mb-6">ShopHub Finance</p>
            <div className="grid grid-cols-2 gap-4 flex-1">
              {summary.map((item, idx) => (
                <div
                  key={idx}
                  style={{ background: item.color }}
                  className="p-5 bg-white rounded"
                >
                  <p className="font-medium text-sm">{item.title}</p>
                  <p
                    className={`text-lg font-medium opacity-80 ${
                      idx === 5 && "text-[coral]"
                    }`}
                  >
                    ₦{item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 px-7 grid grid-cols-3 gap-5">
        <div className="bg-white/90 rounded p-5">
          <p className="text-lg font-medium">Top Perfoming Products</p>
          <div className="mt-5">
            {topPerformingProducts.map((product, idx) => (
              <div
                key={idx}
                className={`border-b py-2 flex justify-between items-center ${
                  idx == topPerformingProducts.length - 1 && "border-b-0 "
                } `}
              >
                <div className="flex gap-2 items-center">
                  <div className="w-10 h-10 rounded-lg bg-primary/50"></div>
                  <div className="flex flex-col ">
                    <span className="font-medium opacity-70">
                      {product.name}
                    </span>
                    <span className="-mt-1">{product.status}</span>
                  </div>
                </div>
                <div className="flex flex-col text-right">
                  <span>{product.total_sold} Sold</span>
                  <span className="-mt-1 text-xs">
                    {product.total_remaining} in stock
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white/90 rounded p-5">
          <p className="text-lg font-medium">Top Performing Customers</p>
          <div className="mt-5">
            {topPerformingCustomers.map((customer, idx) => (
              <div
                key={idx}
                // className="mb-3 flex justify-between items-center"
                className={`border-b py-2 flex justify-between items-center ${
                  idx == topPerformingProducts.length - 1 && "border-b-0 "
                } `}
              >
                <div className="flex gap-2 items-center">
                  <div className="w-10 h-10 rounded-lg bg-primary/50"></div>
                  <div className="flex flex-col ">
                    <span className="font-medium opacity-70">
                      {customer.name}
                    </span>
                    <span className="-mt-1">{customer.status}</span>
                  </div>
                </div>
                <div className="flex flex-col text-right">
                  <span>₦{customer.worth}</span>
                  <span className="-mt-1 text-xs">Wallet balance</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white/90 rounded p-5">
          <p className="text-lg font-medium">Last 5 Credits</p>
          <div className="mt-5">
            {lastFiveCredits.map((trnx, idx) => (
              <div
                key={idx}
                className={`border-b py-2 flex justify-between items-center ${
                  idx == topPerformingProducts.length - 1 && "border-b-0 "
                } `}
              >
                <div className="flex gap-2 items-center">
                  <div className="w-10 h-10 rounded-lg bg-primary/50"></div>
                  <div className="flex flex-col ">
                    <span className="font-medium opacity-70">{trnx.name}</span>
                    <span style={{ color: trnx.color }} className="-mt-1">
                      {trnx.status}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col text-right">
                  <span>₦{trnx.worth}</span>
                  <span className="-mt-1 text-xs">Trnx. amount</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-7 flex gap-5 m-5 mb-10 ">
        <div className="bg-white/90 rounded text p-5 w-full">
          <p className="text-xl font-semibold ">Last 5 Transactions</p>
          <div className="mt-2">
            <table className="w-full table-auto border-separate border-spacing-y-3 ">
              <thead className="bg-[#f3f4f5] shadow">
                <tr className="!text-left !opacity-70 !font-semibold">
                  <th className="py-2 !font-semibold pl-3">Person</th>
                  <th className="py-2 !font-semibold">Email</th>
                  <th className="py-2 !font-semibold">Trnx. Type</th>
                  <th className="py-2 !font-semibold">Trnx. Amount</th>
                  <th className="py-2 !font-semibold">Date / Time</th>
                  {/* <th className="py-2 !font-semibold">Debt</th> */}
                  <th className="py-2 !font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {records.map((item, idx) => (
                  <tr
                    className="pt-3 transition-all duration-300 shadow-sm hover:shadow-md bg-white mb-2"
                    key={idx}
                  >
                    <td className="text-sm py-2 pl-4 flex items-center gap-1">
                      <img
                        className="w-8 rounded-full"
                        src={item.image}
                        alt="user image"
                      />
                      <span> {item.name}</span>
                    </td>
                    <td className="text-sm py-2 ">{item.email}</td>
                    <td className="text-sm py-2">
                      {item.activated ? (
                        <p className="flex gap-1 items-center">
                          <GiCheckMark color="green" />
                          Income
                        </p>
                      ) : (
                        <p className="flex gap-1 items-center">
                          <CgClose color="coral" size={18} />
                          <span> Expenditure</span>
                        </p>
                      )}
                    </td>
                    <td className="text-sm py-2 ">₦{item.score}</td>
                    <td className="text-sm py-2">{item.joinDate}</td>
                    <td className="text-sm py-2">
                      <div
                        className="bg-secondary/70 text-white flex items-center gap-1.5
                     rounded cursor-pointer px-4 py-1 w-fit"
                      >
                        {" "}
                        <FiEye color="white" />
                        <span>view</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button className="text-bluebg-blue-400 w-full mt-2 flex justify-center items-center gap-1">
              <span className="text-xs font-semibold">
                View all transactions
              </span>
              <MdArrowRightAlt className="text-current" />
            </button>
          </div>
        </div>
      </div>
    </AppLayoutNew>
  );
}

export default Home;
