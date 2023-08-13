import React, { useState } from "react";
import AppLayoutNew from "../../layout/AppLayoutNew";
import { CgCrown, CgSearch } from "react-icons/cg";
import CustomButton from "../../components/Buttons/CustomButton";
import { BiMenu, BiPlus, BiUser } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllAccountAction } from "../../store/slices/partner/getAllAccountSlice";
import { useEffect } from "react";
import { ImSpinner2 } from "react-icons/im";
import moment from "moment";
import PageHeader from "../../shared/PageHeader";

const Coperative = () => {
  const { data, loading } = useSelector((state) => state.get_all_accounts);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const roles = {
    1: "Super Admin",
    2: "Sub Admin",
    3: "Regular User",
  };

  const summary = [
    { title: "Total Loan Request", value: "₦0.00" },
    { title: "Total Contribution Amount", value: "₦0.00" },
    { title: "Total Savings", value: "₦0.00" },
    { title: "Contribution Level", value: "5" },
  ];

  const tabs = ["Loan", "Contribution", "Savings"];
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    dispatch(getAllAccountAction());
  }, []);

  return (
    <AppLayoutNew noHeader={true}>
      <div className="mx-4 sm:mx-7 my-10">
        <PageHeader children={"Glowbiz Coperative"} />
        <div className="grid grid-cols-4 gap-5 mt-5">
          {summary.map((item, idx) => (
            <div
              key={idx}
              className="bg-dimmed_white grid place-content-center text-center min-h-[120px] rounded-md"
            >
              <p className="font-medium opacity-70 mb-1.5">{item.title}</p>
              <p className="font-semibold text-xl">{item.value}</p>
            </div>
          ))}
        </div>
        <div className="text-sm flex items-center gap-3 mt-14 pl-3">
          {tabs.map((tab, idx) => (
            <button
              onClick={() => setActiveTab(idx)}
              key={idx}
              className={`rounded-t-md min-w-[100px] px-5 py-1.5 font-medium opacity-80 ${
                activeTab === idx && "border border-primary border-b-0 bg-slate-400"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="bg-dimmed_white p-5 rounded-xl">
          <div className="w-full flex gap-4 pt-3">
            <CustomButton
              clickHandler={() => navigate("/add-staff")}
              className={
                " !bg-[rgba(0,158,170,0.1)] !px-3 font-semibold !text-[rgba(0,158,170,1)] border !border-[rgba(0,158,170,1)] sm:!px-7 !py-1 rounded-lg"
              }
              children={
                <div className="flex items-center gap-1 !text-sm">
                  <BiPlus size={20} />
                  <span className="md:block hidden">Add Account</span>
                  <span className="block md:hidden">New</span>
                </div>
              }
            />
            <div className="flex-1 relative">
              <div className="span absolute left-3 top-[11px] ">
                <CgSearch size={18} className="text-gray-500" />
              </div>
              <input
                type="text"
                placeholder="Search Account by name, role or status"
                className="w-full rounded-sm border outline-none h-full px-5 pl-10 text-sm placeholder:text-sm"
              />
            </div>
            <CustomButton
              className={
                "!py-2 !rounded-lg !px-7 bg-transparent border !border-[rgba(0,158,170,1)] !text-[rgba(0,158,170,1)]"
              }
              children={
                <div className="flex items-center gap-1 !text-sm">
                  <span className="md:block hidden">Import Contacts</span>
                  <span className="block md:hidden">Import</span>
                </div>
              }
            />
          </div>
          <div className="mt-2 w-full">
            <div className="overflow-x-auto">
              <table className="min-w-[900px] w-full table-auto border-separate border-spacing-y-3 ">
                <thead className="">
                  <tr className="!text-left !opacity-70 !font-semibold">
                    <th className="text-sm py-3 border-y !font-semibold pl-3 w-[32%]s">
                      User Name
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
                      User Role
                    </th>
                    <th className="text-sm py-3 border-y !font-semibold">
                      {" "}
                      Account Status
                    </th>
                    <th className="text-sm py-3 border-y !font-semibold">
                      Date Joined{" "}
                    </th>
                  </tr>
                </thead>

                {!loading && data.data?.length ? (
                  <tbody>
                    <>
                      {data.data &&
                        data?.data?.map((item, idx) => (
                          <tr
                            onClick={() =>
                              navigate("/sub-accounts/details", {
                                state: { staff: item },
                              })
                            }
                            className="cursor-pointer pt-3 transition-all duration-300 shadow-sm hover:shadow-md bg-white mb-2"
                            key={idx}
                          >
                            <td className="text-sm py-2.5 pb-4 pl-3">
                              {item.user?.firstName} {item.user?.lastName}
                            </td>
                            <td className="text-sm py-2.5 pb-4">
                              {item.user?.email}
                            </td>
                            <td className="text-sm py-2.5 pb-4">
                              {item.user?.phone}
                            </td>
                            <td className="text-sm  py-2.5 pb-4 flex items-center gap-2">
                              {item.user?.role == "1" ? (
                                <CgCrown className="text-primary" size={18} />
                              ) : (
                                <BiUser className="text-primary" size={18} />
                              )}
                              {roles[item.user.role]}
                            </td>
                            <td
                              style={{
                                color: item.isActive ? "green" : "orange",
                              }}
                              className="text-sm pl-5 py-2.5 pb-4 font-medium"
                            >
                              {item.isActive ? "Active" : "Inactive"}
                            </td>
                            <td className="text-sm  py-2.5 pb-4">
                              {moment(item.createdDate).format("ll")}
                            </td>
                          </tr>
                        ))}
                    </>
                  </tbody>
                ) : null}
              </table>
              {!loading && !data.data?.length ? (
                <p className="py-10 font-medium  flex justify-center">
                  No data found{" "}
                </p>
              ) : null}
              {loading && (
                <div className="flex items-center gap-1 justify-center text-sm p-2 py-10 font-medium">
                  <ImSpinner2 className="animate-spin" />
                  <p>Loading</p>
                </div>
              )}
            </div>
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

export default Coperative;
