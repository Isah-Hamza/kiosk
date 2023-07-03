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

function Home() {
  const summary = [
    {
      title: "Total Users",
      value: "2,143",
    },
    {
      title: "Total Debtors",
      value: "252",
    },
    {
      title: "Period (years)",
      value: "3.5",
    },
    {
      title: "Rate",
      value: "-45%",
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
      amount: "6,300,000",
      color: "#f3f3f0",
    },
    {
      title: "Total Sales",
      desc: "Total sales made this month.",
      amount: "15,902,000",
      color: "#fcf7fd",
    },
    {
      title: "Total Inventory Items",
      desc: "Total items in inventory.",
      amount: "2,508",
      color: "#f7f7f9",
      notCurrency: true,
    },
    {
      title: "Total Income Revenue",
      desc: "Total amount generated this month.",
      amount: "312,000",
      color: "#faf8f9",
    },
    {
      title: "Total Loan Disbursement",
      desc: "Total loan disbursed.",
      amount: "550,000",
      color: "#f1f1f1",
    },
    {
      title: "Total Expenditure",
      desc: "Expenses incured this month.",
      amount: "59,000",
      color: "#fcf7fd",
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

  return (
    <AppLayout>
      <div className="px-7 mb-7 flex justify-between items-center">
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
          {/* <button className="text-sm font-medium bg-blue-400 text-white px-7 py-3 rounded">
            Switch Account
          </button>
          <button className="text-sm font-medium border border-blue-400 text-bluebg-blue-400 px-7 py-3 rounded">
            View All Tranx.
          </button> */}
          <CustomSelect className={"min-w-[200px] px-4"} options={filter} />
        </div>
      </div>

      {/* main */}
      <div className="bg-white/90 rounded text  p-5 pt-7 mx-5 my-5">
        <p className="text-xl font-semibold mb-3">Balances Overview</p>
        <div className="grid grid-cols-3 gap-5">
          {analysis.map((item, idx) => (
            <div
              key={idx}
              style={{ backgroundColor: item.color }}
              className="flex flex-col justify-between shadow-sm rounded-md min-h-[180px] p-5"
            >
              <div>
                <p className="font-medium">{item.title} </p>
              </div>
              <div className=" mt-auto">
                <p className="text-xs">{item.desc}</p>
                <div className="flex justify-between items-center">
                  <p className="font-semibold text-2xl">
                    {!item.notCurrency ? "₦" : ""}
                    {item.amount}{" "}
                  </p>
                  <MdArrowRightAlt
                    color="rgb(97, 51, 51)"
                    className="cursor-pointer"
                    size={25}
                  />
                </div>
              </div>
            </div>
          ))}
          {/* <div className="flex flex-col justify-between shadow-sm rounded-md min-h-[180px] bg-[#faf8f9] p-5">
            <div>
              <p className="font-medium"> Total Loan Disbursement </p>
            </div>
            <div className=" mt-auto">
              <p className="text-xs">Total loan disbursed.</p>
              <div className="flex justify-between items-center">
                <p className="font-semibold text-2xl"> ₦500,000 </p>
                <MdArrowRightAlt
                  color="rgb(97, 51, 51)"
                  className="cursor-pointer"
                  size={25}
                />
              </div>
            </div>
          </div>{" "}
          <div className="flex flex-col justify-between shadow-sm rounded-md min-h-[180px] bg-[#fcf7fd] p-5">
            <div>
              <p className="font-medium"> Total Expenditure </p>
            </div>
            <div className=" mt-auto">
              <p className="text-xs">Expenses incured this month.</p>
              <div className="flex justify-between items-center">
                <p className="font-semibold text-2xl"> ₦56,000 </p>
                <MdArrowRightAlt
                  color="rgb(97, 51, 51)"
                  className="cursor-pointer"
                  size={25}
                />
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <div className="">
        <div className=" px-5 grid grid-cols-3 gap-5">
          <div className="flex flex-col col-span-2 bg-[#fff]/90 rounded p-4 pt-5">
            <p className="text-xl font-semibold mb-5">Monthly Disbursement</p>
            <AreaCharts />
          </div>
          <div className="bg-white/90 rounded p-5">
            <p className="text-xl font-semibold mb-6">Quick Analytics</p>
            <div className="grid grid-cols-2 gap-10">
              {summary.map((item, idx) => (
                <div key={idx} className="">
                  <p className="text-sm font-medium">{item.title}</p>
                  <p
                    className={`text-lg font-semibold ${
                      idx === 3 && "text-[coral]"
                    }`}
                  >
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white/90 rounded text p-5 m-5">
        <p className="text-xl font-semibold ">Last 5 Activities on Kiosk</p>
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
                  {/* <td className="text-sm py-2">₦{item.indebted}</td> */}
                  <td className="text-sm py-2">
                    <div
                      //   onClick={() => history.push("/loan/details")}
                      className="bg-blue-400/80 text-white flex items-center gap-1.5
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
            <span className="text-xs font-semibold">View all transactions</span>
            <MdArrowRightAlt className="text-current" />
          </button>
        </div>
      </div>
    </AppLayout>
  );
}

export default Home;
