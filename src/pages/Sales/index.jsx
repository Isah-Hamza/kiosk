import React from "react";
import AppLayoutNew from "../../layout/AppLayoutNew";
import { CgCrown, CgSearch } from "react-icons/cg";
import CustomButton from "../../components/Buttons/CustomButton";
import { BiPlus, BiUser } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ImSpinner2 } from "react-icons/im";
import moment from "moment";
import PageHeader from "../../shared/PageHeader";
import { getAllBookAction } from "../../store/slices/book-keeping/getAllBookSlice";

const Sales = () => {
  const { data, loading } = useSelector((state) => state.get_all_books);
  console.log(data.data?.customer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllBookAction(1));
  }, []);

  return (
    <AppLayoutNew noHeader={true}>
      <div className="mx-4 sm:mx-7 my-10">
        <PageHeader children={"Sales"} />
        <div className="bg-dimmed_white p-5 rounded-xl mt-5">
          <div className="w-full flex gap-4 pt-3">
            <CustomButton
              clickHandler={() => navigate("/record-sale")}
              className={
                " !bg-[rgba(0,158,170,0.1)] !px-3 font-semibold !text-[rgba(0,158,170,1)] border !border-[rgba(0,158,170,1)] sm:!px-7 !py-1 rounded-lg"
              }
              children={
                <div className="flex items-center gap-1 !text-sm">
                  <BiPlus size={20} />
                  <span className="md:block hidden">Record Sales</span>
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
                      Trnx. Reference
                    </th>
                    <th className="text-sm py-3 border-y !font-semibold pl-3 w-[32%]s">
                      Customer Name
                    </th>
                    <th className="text-sm py-3 border-y !font-semibold">
                      Total Amount{" "}
                    </th>
                    <th className="text-sm py-3 border-y !font-semibold">
                      {" "}
                      Amount Paid
                    </th>
                    <th className="text-sm py-3 border-y !font-semibold">
                      {" "}
                      Debt
                    </th>
                    <th className="text-sm py-3 border-y !font-semibold">
                      {" "}
                      No. of Items
                    </th>
                    {/* <th className="text-sm py-3 border-y !font-semibold">
                      {" "}
                      Account Status
                    </th> */}
                    <th className="text-sm py-3 border-y !font-semibold">
                      Trnx Date{" "}
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
                              navigate("#", {
                                state: { data: item },
                              })
                            }
                            className="cursor-pointer pt-3 transition-all duration-300 shadow-sm hover:shadow-md bg-white mb-2"
                            key={idx}
                          >
                            <td className="text-sm py-2.5 pb-4 pl-3">
                              {item.reference}
                            </td>
                            <td className="text-sm py-2.5 pb-4 pl-3">
                              {item.customer?.name}
                            </td>
                            <td className="text-sm py-2.5 pb-4">
                              ₦{item.amountExpected}
                            </td>
                            <td className="text-sm py-2.5 pb-4">
                              ₦{item.amountPaid}
                            </td>
                            <td className="text-sm text-red-600 py-2.5 pb-4 flex items-center gap-2">
                              ₦{item.debt}
                            </td>
                            <td className="text-sm pl-5 py-2.5 pb-4 font-medium">
                              {item.bookItems?.length}
                            </td>
                            <td className="text-sm  py-2.5 pb-4">
                              {moment(item.invoiceDate).format("ll")}
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

export default Sales;
