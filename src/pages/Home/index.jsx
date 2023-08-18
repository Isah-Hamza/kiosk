import React, { useState, useEffect } from "react";
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
import { PiArrowRightThin } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { accountBalanceAction } from "../../store/slices/report/accountBalanceSlice";
import { dashboardReportAction } from "../../store/slices/report/dashboardReportSlice";
import { ImSpinner2 } from "react-icons/im";
import { TbRefresh } from "react-icons/tb";
import PageLoading from "../../components/Loaders/PageLoading";

const Loading = () => (
  <div className="flex items-center gap-2 font-medium text-sm mt-2">
    <ImSpinner2 className="animate-spin" />
    <p>Loading...</p>
  </div>
);

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    data: { balance, businessPoint },
    loading: accountLoading,
  } = useSelector((state) => state.get_account_balance);

  const {
    data: { data, summonthly, result, accountNumbers },
    loading,
  } = useSelector((state) => state.get_dashboard_report);
  console.log(data);

  const [showBal, setShowBal] = useState(false);

  const toggleShowBal = () => setShowBal(!showBal);

  // const percentageChange = ((This Month Sales - Previous Month Sales) / Previous Month Sales) * 100

  const percentageChange = (this_month, previous_month) => {
    const result = ((this_month - previous_month) / previous_month) * 100;
    return result;
  };

  const todaySummary = [
    {
      title: "Account Balance",
      value: balance?.toFixed(2),
      accountBalance: true,
      desc: "Copy account number",
    },
    {
      title: "Sales this month",
      value: summonthly?.monthlySales?.toFixed(2),
      desc:
        result?.salesVolume +
        " sales, " +
        percentageChange(
          1,
          5
          // summonthly?.monthlySales,
          // summonthly?.previousMonthSales
        ) +
        " from last month",
    },
    {
      title: "Expenses this month",
      value: summonthly?.monthlyExpense?.toFixed(2),
      desc: result?.expenseVolume + " Expenses, 15% down from last month",
    },
    {
      title: "Inventory Value",
      value: "30,000",
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

  const refreshAccountBalance = () => {
    dispatch(accountBalanceAction());
  };

  useEffect(() => {
    dispatch(accountBalanceAction());
    dispatch(dashboardReportAction());
  }, []);

  return (
    <AppLayoutNew noHeader={loading}>
      {/* main */}
      {loading ? (
        <PageLoading />
      ) : (
        <div className="pb-10">
          <div className="grid grid-cols-3 gap-5 mx-4 sm:mx-7 mt-2">
            <div className=" col-span-3 rounded min-h-[200px] bg-dimmed_white  p-5 !pb-7 ">
              <p className="text-lg font-medium mb-5">
                {" "}
                Today's Business Insight
              </p>
              <div className="grid gap-5 grid-cols-2 md:grid-cols-[1fr,1fr,1.3fr,.7fr] justify-between">
                {todaySummary.map((item, idx) => (
                  <div key={idx} className={`text-left`}>
                    <div className="w-full flex items-center justify-between">
                      <p className="font-medium opacity-70 mb-1.5">
                        {item.title}
                      </p>
                      {idx == 0 ? (
                        <button
                          title="Refresh"
                          onClick={refreshAccountBalance}
                          className="p-3 rounded-full hover:bg-slate-100 mr-3"
                        >
                          <TbRefresh size={16} />
                        </button>
                      ) : null}
                    </div>
                    {item.accountBalance && accountLoading ? (
                      <Loading />
                    ) : (
                      <p className="font-semibold text-xl">₦{item.value}</p>
                    )}
                    <p className="text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="border-y px-2 p-3.5  flex justify-between  sm:flex-row flex-col gap-5 mt-10">
                <CustomButton
                  className={
                    "!bg-transparent border !border-[rgba(0,158,170,.4)] !text-[rgba(0,158,170,1)] font-semibold  !py-2.5 rounded-lg hidden md:block"
                  }
                >
                  Transfer Fund
                </CustomButton>
                <CustomButton
                  clickHandler={() => navigate("/record-sale")}
                  className={
                    " !bg-[rgba(0,158,170,0.3)] font-semibold !text-[rgba(0,158,170,1)] border !border-[rgba(0,158,170,1)]  !py-2.5 rounded-lg"
                  }
                >
                  Record Sales
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
                  <p className="font-medium opacity-70 mb-1.5">
                    Business Points
                  </p>
                  {accountLoading ? (
                    <Loading />
                  ) : (
                    <p className="font-semibold text-xl">
                      {businessPoint} points
                    </p>
                  )}
                  <p className="text-sm">
                    Earn up to 1000 points to qualify <br /> for business
                    points.
                  </p>
                </div>
                <div className="w-32">
                  <CircularProgressbar
                    value={businessPoint}
                    text={`${businessPoint}%`}
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
                  <p className="font-medium opacity-70 mb-1.5">Business Debt</p>
                  <p className="font-semibold text-xl">
                    ₦{summonthly?.businessDebt?.toFixed(2)}
                  </p>
                  <p className="text-sm">
                    This refers to the amount owned <br /> by the business.
                  </p>
                </div>

                <div>
                  <p className="font-medium opacity-70 mb-1.5">Customer Debt</p>
                  <p className="font-semibold text-xl">
                    ₦{summonthly?.customerDebt?.toFixed(2)}
                  </p>
                  <p className="text-sm">Debt own by your customers.</p>
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
          <div className="grid md:grid-cols-2 gap-5 mx-4 sm:mx-7 mt-5">
            <div className="flex flex-col bg-dimmed_white min-h-[300px] rounded-md p-5">
              <p className="font-medium text-lg opacity-80">
                Glowbiz Coperative
              </p>
              <div className="grid grid-cols-2 gap-5 my-5">
                <div className="text-sm flex flex-col">
                  <p>Loans</p>
                  <p className="font-semibold text-xl">₦0.00</p>
                  <p className="text-sm mb-5">With 4% Monthly return</p>
                  <CustomButton
                    clickHandler={() => navigate("/coperative")}
                    className={
                      "!w-fit !px-5 sm:!px-10 !py-2  mt-auto !border-primary !text-white font-bold !rounded-lg"
                    }
                  >
                    Request Loan
                  </CustomButton>
                </div>
                <div className="text-sm">
                  <p>Contributions</p>
                  <p className="font-semibold text-xl">₦0.00</p>
                  <p className="text-sm">Getback 5% Monthly and 13% Anually</p>
                  <CustomButton
                    clickHandler={() => navigate("/coperative")}
                    className={
                      "!w-fit !px-5 sm:!px-10 !py-2 mt-5 !bg-white border !text-black !border-primary  font-bold !rounded-lg"
                    }
                  >
                    Save Money
                  </CustomButton>
                </div>
              </div>
              <div className="w-full border mt-auto rounded-md p-3  opacity-80 text-sm">
                <p>
                  💡 With Glowbiz coperative You have access to lorem ipsum
                  dolor sit amet, consectetur adipisicing elit. Dolores,
                  laborum!
                </p>
              </div>
            </div>
            <div className="bg-dimmed_white min-h-[300px] rounded-md p-5">
              <div className="mb-6 flex justify-between items-center gap-5">
                <p className="font-medium text-lg opacity-80">
                  Recent Deliveries
                </p>
                <button
                  onClick={() => navigate("/delivery")}
                  className="text-sm font-semibold flex items-center gap-2"
                >
                  More <PiArrowRightThin />
                </button>
              </div>
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="bg-[#493847]/5  p-3 mb-3 rounded-md text-xs flex justify-between"
                >
                  <div className="flex gap-2 items-center">
                    <div
                      className={`grid place-content-center w-9 h-9 rounded-full ${
                        item % 2 == 1 ? "bg-[#bafbee]" : "bg-[#fcd0cc]"
                      }`}
                    >
                      {item % 2 == 1 ? <BsArrowDownLeft /> : <BsArrowUpRight />}
                    </div>
                    <div className="flex flex-col gap-1 ">
                      <p className="text-sm font-medium opacity-70">
                        <span>From: JEDO Estate, Abuja</span>
                      </p>
                      <span className="-mt text-xs">
                        To: Victoria Island, Lagos
                      </span>
                      <span
                        className={`text-xs capitalize font-medium text-[#1c5c4f]`}
                      >
                        completed
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 text-right">
                    <span className="font-medium opacity-80 text-sm ">
                      {item * 2}7km
                    </span>
                    <span className="font-medium opacity-80 text-sm ">
                      ₦200.00
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-5">
            <div className="px-4 sm:px-7 grid lg:grid-cols-3 gap-5">
              <div className="flex flex-col col-span-3 lg:col-span-2 bg-[#fff]/90 rounded p-4 pt-5">
                <p className="text-xl font-semibold mb-5">Performance</p>
                <AreaCharts data={data} />
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
                        idx == lastFiveCredits.length - 1 && "border-b-0 "
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
      )}
    </AppLayoutNew>
  );
}

export default Home;
