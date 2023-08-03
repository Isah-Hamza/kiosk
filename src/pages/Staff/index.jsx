import React, { useContext, useState } from "react";
import AppLayoutNew from "../../layout/AppLayoutNew";
import { CgCrown, CgSearch } from "react-icons/cg";
import CustomButton from "../../components/Buttons/CustomButton";
import { BiMenu, BiPlus, BiUser } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import { ToggleSidebarContext } from "../../App";
import { useDispatch, useSelector } from "react-redux";
import { getAllAccountAction } from "../../store/slices/partner/getAllAccountSlice";
import { useEffect } from "react";
import { ImSpinner2 } from "react-icons/im";

const Staff = () => {
  const { sidebarOpen, setSidebarOpen } = useContext(ToggleSidebarContext);
  const { data, loading } = useSelector((state) => state.get_all_accounts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const records = [
    {
      name: "Fist Staff",
      email: "first@staff.com",
      phone: "09123456789",
      role: "Adhoc Staff",
      status: "Active",
      date_added: "23 Aug, 2023",
    },
    {
      name: "Testing Person",
      email: "test@person.com",
      phone: "08028835099",
      role: "Super Admin",
      status: "Inactive",
      date_added: "09 Dec, 2021",
    },
    {
      name: "Trusted Staff",
      email: "tested@trusted.com",
      phone: "0802844000",
      role: "Super Admin",
      status: "Active",
      date_added: "32 Juc, 2021",
    },
  ];

  const roles = {
    1: "Super Admin",
    2: "Sub Admin",
    3: "Regular User",
  };

  useEffect(() => {
    dispatch(getAllAccountAction());
  }, []);

  useEffect(() => {
    console.log(data);
    console.log(typeof data);
  }, [data]);

  return (
    <AppLayoutNew noHeader={true}>
      <div className="mx-4 sm:mx-7 my-10">
        <div className="flex items-center gap-5 mb-7">
          <span className="block lg:hidden">
            {!sidebarOpen ? (
              <BiMenu onClick={() => setSidebarOpen(true)} size={30} />
            ) : (
              <GrClose
                className="mt-1 ml-1"
                onClick={() => setSidebarOpen(false)}
                size={25}
              />
            )}
          </span>
          <p className="text-2xl font-semibold opacity-80 ">My Staff</p>
        </div>
        <div className="bg-dimmed_white p-5 rounded-xl mt-5">
          <div className="w-full flex gap-4 pt-3">
            <CustomButton
              clickHandler={() => navigate("/add-staff")}
              className={
                " !bg-[rgba(0,158,170,0.1)] !px-3 font-semibold !text-[rgba(0,158,170,1)] border !border-[rgba(0,158,170,1)] sm:!px-7 !py-1 rounded-lg"
              }
              children={
                <div className="flex items-center gap-1 !text-sm">
                  <BiPlus size={20} />
                  <span className="md:block hidden">Add Staff</span>
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
                placeholder="Search staff by name, role or status"
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
                      Staff Name
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
                            onClick={() => navigate("#")}
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
                              {item.createdDate.substr(0, 10)}
                            </td>
                          </tr>
                        ))}
                    </>
                  </tbody>
                ) : null}
              </table>
              {!loading && !data.data?.length ? (
                <p className="py-10 font-medium  flex justify-center">No data found </p>
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

export default Staff;
