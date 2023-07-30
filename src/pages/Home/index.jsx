import React, { useState } from "react";
import { MdArrowRightAlt } from "react-icons/md";
import AreaCharts from "../../components/Chart/AreaCharts";
import AppLayoutNew from "../../layout/AppLayoutNew";
import {
  BsArrowDownLeft,
  BsArrowUpRight,
  BsEyeFill,
  BsEyeSlashFill,
  BsFillShieldLockFill,
} from "react-icons/bs";
import CustomButton from "../../components/Buttons/CustomButton";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { useNavigate } from "react-router-dom";

function Home() {
  const [showBal, setShowBal] = useState(false);
  const navigate = useNavigate();
  const percentage = 66;

  const toggleShowBal = () => setShowBal(!showBal);

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
        <div className="rounded text px-4 sm:px-7 pt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-10">
            {analysis.map((item, idx) => (
              <div key={idx}>
                {idx == 0 ? (
                  <div className="min-h-[180px] bg-dimmed_white rounded h-full flex flex-col p-5">
                    <div className="flex items-center justify-between">
                      <p className="font-medium mb-0.5">Account Balance</p>
                      <button>
                        {showBal ? (
                          <BsEyeFill
                            onClick={toggleShowBal}
                            color="rgb(97, 51, 51)"
                            size={20}
                          />
                        ) : (
                          <BsEyeSlashFill
                            onClick={toggleShowBal}
                            color="rgb(97, 51, 51)"
                            size={20}
                          />
                        )}
                      </button>
                    </div>
                    <p className="text-2xl font-medium opacity-70">
                      {
                        showBal ? ' ₦12,000' : '****'
                      }
                     
                      
                      </p>
                    <div className="mt-auto flex justify-between items-center">
                      <div>
                        <p className="font-medium opacity-80">Wema Bank</p>
                        <p className="text-lg">0814348473</p>
                      </div>
                      <BsFillShieldLockFill
                        className="text-primary"
                        size={35}
                      />
                    </div>
                  </div>
                ) : (
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
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-5 mx-4 sm:mx-7 mt-5">
          <div className=" col-span-3 rounded min-h-[200px] bg-dimmed_white  p-5 !pb-7 ">
            <p className="text-lg font-medium mb-5">
              {" "}
              Today's Business Insight
            </p>
            <div className="grid gap-5 grid-cols-2 md:flex justify-between">
              {todaySummary.map((item, idx) => (
                <div
                  key={idx}
                  className={` md:text-center
                ${idx == 0 && "!text-left"}
                ${idx == todaySummary.length - 1 && "md:text-right"}
                
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
            <div className="border-y px-2 p-3.5  flex justify-between  sm:flex-row flex-col gap-5 mt-10">
              <CustomButton
                clickHandler={() => navigate("/record-sale")}
                className={
                  " !bg-[rgba(0,158,170,0.3)] font-semibold !text-[rgba(0,158,170,1)] border !border-[rgba(0,158,170,1)]  !py-2.5 rounded-lg"
                }
              >
                Record Sales
              </CustomButton>
              <CustomButton
                clickHandler={() => navigate("/add-customer")}
                className={
                  "!bg-transparent border !border-[rgba(0,158,170,.4)] !text-[rgba(0,158,170,1)] font-semibold  !py-2.5 rounded-lg hidden md:block"
                }
              >
                Add Customers
              </CustomButton>
              <CustomButton
                clickHandler={() => navigate("/record-expense")}
                className={
                  "!bg-[#eb57571a] !text-[#eb5757] border !border-[#eb5757] font-bold !py-2.5 rounded-lg"
                }
              >
                Record Expenses
              </CustomButton>
            </div>
            <div className="md:flex grid grid-cols-2 gap-5 justify-between pt-10">
              <div>
                <p className="font-medium opacity-70 mb-1.5">Business Points</p>
                <p className="font-semibold text-xl">66 points</p>
                <p className="text-sm">
                  Earn up to 1000 points to qualify <br /> for business points.
                </p>
              </div>
              <div className="w-32">
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}%`}
                  styles={buildStyles({
                    rotation: 0.25,
                    strokeLinecap: "round",
                    textSize: "16px",
                    fontWeight: "600",
                    pathTransitionDuration: 0.5,
                    pathColor: `#43010c`,
                    textColor: "#43010c",
                    trailColor: "#d6d6d6",
                    backgroundColor: "#3e98c7",
                  })}
                />
              </div>
              <div>
                <p className="font-medium opacity-70 mb-1.5">Loans</p>
                <p className="font-semibold text-xl">₦0.00</p>
                <p className="text-sm">of ₦5,000 available credit</p>
              </div>

              <div>
                <p className="font-medium opacity-70 mb-1.5">Savings</p>
                <p className="font-semibold text-xl">₦0.00</p>
                <p className="text-sm">
                  Click the button below to start saving.
                </p>
                <CustomButton
                  className={
                    "!py-2 mt-3 !border-primary !text-white font-bold !rounded-lg"
                  }
                >
                  Save
                </CustomButton>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div className="px-4 sm:px-7 grid lg:grid-cols-3 gap-5">
            <div className="flex flex-col col-span-3 lg:col-span-2 bg-[#fff]/90 rounded p-4 pt-5">
              <p className="text-xl font-semibold mb-5">Performance</p>
              <AreaCharts />
            </div>
            <div className="bg-white/90 rounded p-5 col-span-3 lg:col-span-1">
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
    </AppLayoutNew>
  );
}

export default Home;
