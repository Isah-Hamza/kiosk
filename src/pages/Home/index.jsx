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
import { BsArrowDownLeft, BsArrowUpRight } from "react-icons/bs";
import CustomButton from "../../components/Buttons/CustomButton";

function Home() {
  const todaySummary = [
    {
      title: "Today's Sales",
      value: "3,000",
    },
    {
      title: "Customers",
      value: "19",
      notCurrency: true,
    },
    {
      title: "Products",
      value: "30",
      notCurrency: true,
    },
    {
      title: "Today's Expenses",
      value: "22,000",
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
      rise: true,
      rate: "+40%",
    },
    {
      title: "Total Sales",
      desc: "Total sales made this month.",
      amount: "15.9M",
      rise: false,
      rate: "-25%",
    },
    {
      title: "Total Inventory Items",
      desc: "Total items in inventory.",
      amount: "2.5K",
      rise: false,
      rate: "-13%",
      notCurrency: true,
    },
    {
      title: "Total Income Revenue",
      desc: "Total amount made this month.",
      amount: "312K",
      rate: "+53%",
      rise: true,
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
      name: "Cash Payment",
      status: "failed",
      amount: "95,300",
      time: "Wed, 03 Sept, 2023 10:25 PM",
      payment_type: "transfer",
      transaction_type: "outgoing",
    },
    {
      name: "Bank Transfer",
      status: "successful",
      amount: "30,600",
      time: "Mon, 23 Sept, 2021 10:25 PM",
      payment_type: "transfer",
      transaction_type: "incoming",
    },
    {
      name: "Laon Repayment",
      status: "successful",
      amount: "65,000",
      time: "Fri, 11 Aug, 2029 04:55 PM",
      payment_type: "cash",
      transaction_type: "outgoing",
    },
    {
      name: "Wallet Deposit",
      status: "failed",
      amount: "77,900",
      time: "Wed, 04 Apr, 2023 09:42 AM",
      payment_type: "cash",
      transaction_type: "incoming",
    },
    {
      name: "Maintenance Fee",
      status: "successful",
      amount: "45,000",
      time: "Wed, 03 Sept, 2023 10:25 PM",
      payment_type: "automatic",
      transaction_type: "outgoing",
    },
  ];

  return (
    <AppLayoutNew>
      {/* main */}
      <div className="pb-10">
        <div className="rounded text px-7 pt-0">
          <p className="text-2xl font-semibold mb-4">Overview</p>
          <div className="grid grid-cols-4 gap-5">
            {analysis.map((item, idx) => (
              <div
                key={idx}
                style={{ backgroundColor: "rgba(255,255,255,.9)" }}
                className="flex flex-col justify-between rounded min-h-[180px] p-5"
              >
                <div className="flex items-center justify-between">
                  <p className="font-medium">{item.title} </p>
                  <button>
                    <MdArrowRightAlt
                      color="rgb(97, 51, 51)"
                      className={item.rise ? "" : ""}
                      size={25}
                    />
                  </button>
                </div>
                <div className=" mt-auto">
                  <p className="text-xs">{item.desc}</p>
                  <div className="flex justify-between items-center">
                    <p className="font-medium opacity-70 text-2xl">
                      {!item.notCurrency ? "₦" : ""}
                      {item.amount}{" "}
                    </p>
                    {/* <div
                      className={`font-bold opacity-80 px-2 py-1.5 text-xs rounded-md text-primary bg-secondary/70 ${
                        item.rise && "bg-green-200 "
                      }`}
                    >
                      {item.rate}
                    </div> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded min-h-[200px] bg-dimmed_white mx-7 mt-5 p-5 !pb-7 ">
          <p className="text-lg font-medium mb-5"> Today's Business Insight</p>
          <div className="flex justify-between">
            {todaySummary.map((item, idx) => (
              <div
                key={idx}
                className={` text-center
                ${idx == 0 && "!text-left"}
                ${idx == todaySummary.length - 1 && "text-right"}
                
                `}
              >
                <p className="font-medium opacity-70 mb-1.5">{item.title}</p>
                <p className="font-semibold text-xl">
                  {!item.notCurrency ? "₦" : ""}
                  {item.value}
                </p>
              </div>
            ))}
          </div>
          <div className="border-y px-2 p-3.5 flex justify-between  mt-10">
            <CustomButton
              className={
                " !bg-[rgba(0,158,170,0.3)] font-semibold !text-[rgba(0,158,170,1)] border !border-[rgba(0,158,170,1)] px-20 !py-2.5 rounded-lg"
              }
            >
              Record Sales
            </CustomButton>
            <CustomButton
              className={" px-20  !bg-transparent border !border-[rgba(0,158,170,.4)] !text-[rgba(0,158,170,1)] font-semibold  !py-2.5 rounded-lg"}
            >
              Add Customers
            </CustomButton>
            <CustomButton className={"px-20 !bg-[#eb57571a] !text-[#eb5757] border !border-[#eb5757] font-bold !py-2.5 rounded-lg"}>
              Record Expenses
            </CustomButton>
          </div>
        </div>
        <div className="mt-5">
          <div className=" px-7 grid grid-cols-3 gap-5">
            <div className="flex flex-col col-span-2 bg-[#fff]/90 rounded p-4 pt-5">
              <p className="text-xl font-semibold mb-5">Performance</p>
              <AreaCharts />
            </div>
            <div className="bg-white/90 rounded p-5">
              <div className="flex justify-between items-center">
                <p className="text-lg font-medium">Last 5 Transactions</p>
                <button className="text-primary text-sm font-medium opacity-80">
                  VIEW ALL
                </button>
              </div>
              <div className="mt-5">
                {lastFiveCredits.map((trnx, idx) => (
                  <div
                    key={idx}
                    className={`border-b py-2 flex justify-between items-center ${
                      idx == topPerformingProducts.length - 1 && "border-b-0 "
                    } `}
                  >
                    <div className="flex gap-2 items-center">
                      <div
                        className={`grid place-content-center w-9 h-9 rounded-full ${
                          trnx.transaction_type == "incoming"
                            ? "bg-[#bafbee]"
                            : "bg-[#fcd0cc]"
                        }`}
                      >
                        {trnx.transaction_type == "incoming" ? (
                          <BsArrowDownLeft />
                        ) : (
                          <BsArrowUpRight />
                        )}
                      </div>
                      <div className="flex flex-col gap-[7px] ">
                        <span className="text-sm font-medium opacity-70">
                          {trnx.name}
                        </span>
                        <span className="-mt text-xs">{trnx.time}</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[7px] text-right">
                      <span className="font-medium opacity-80 text-sm ">
                        {trnx.transaction_type == "incoming" ? "+" : "-"} ₦
                        {trnx.amount}
                      </span>
                      <span
                        className={`text-xs capitalize font-medium ${
                          trnx.status == "successful"
                            ? "text-[#1c5c4f]"
                            : "text-[#cc746c]"
                        }`}
                      >
                        {trnx.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="mt-5 px-7 grid grid-cols-2 gap-5">
        <div className="bg-white/90 rounded p-5">
          <p className="text-lg font-medium">Top Perfoming Products</p>
          <div className="mt-5">
            {topPerformingProducts.map((product, idx) => (
              <div
                style={{
                  backgroundColor: (idx + 1) % 2 == 1 ? "#f9f4f5" : "white",
                }}
                key={idx}
                className={`border-b py-2 px-5 rounded flex justify-between items-center bg-opacity-10 ${
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
                  <span className="text-xs">
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
                  <span className="text-xs">Wallet balance</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}
      {/* <div className="mx-7 grid grid-cols-3 gap-5 m-5 mb-10 ">
        <div className="bg-white/90 col-span-2 rounded text p-5 w-full">
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
                  <span className="text-xs">Trnx. amount</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </AppLayoutNew>
  );
}

export default Home;
