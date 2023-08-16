import React from "react";
import AppLayoutNew from "../../layout/AppLayoutNew";
import CustomInput from "../../components/CustomInput";
import { FaAddressBook, FaUser } from "react-icons/fa";
import { PiCurrencyNgnLight } from "react-icons/pi";
import CustomButton from "../../components/Buttons/CustomButton";
import CustomSelect from "../../components/CustomInput/Select";
import PageHeader from "../../shared/PageHeader";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import moment from "moment";
import { MdCall, MdEmail } from "react-icons/md";
import { getBookByIdAction } from "../../store/slices/book-keeping/getBookByIdSlice";
import PageLoading from "../../components/Loaders/PageLoading";
import ActivityTrail from "../../components/ActivityTrail";

const SaleDetiails = () => {
  let total_sum = 0;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useLocation().state;

  const { loading, data } = useSelector((state) => state.get_book_byid);

  const status = [
    { label: "Select One", value: "0" },
    { label: "Submitted", value: "1" },
    { label: "Processing", value: "2" },
    { label: "Completed", value: "3" },
    { label: "Deliverd", value: "4" },
  ];

  useEffect(() => {
    dispatch(getBookByIdAction(id));
  }, []);

  return (
    <AppLayoutNew noHeader={true}>
      {loading ? (
        <PageLoading />
      ) : (
        <div className="mx-4 sm:mx-7 my-10 ">
          <PageHeader children={"Sale Details"} />
          <div className="grid lg:grid-cols-[3.5fr,2fr] gap-8">
            <div className="px-4 py-6 !sm:p-6 bg-dimmed_white rounded-xl">
              <div className="border-b pb-5">
                <p className="text-sm font-medium opacity-70">Total Sum</p>
                <p className="font-bold text-2xl text-primary">
                  ₦{data.amountExpected?.toFixed(2)}
                </p>
              </div>
              <form className="grid grid-cols-1 gap-5">
                <div className="mt-3 grid gap-5">
                  <div className=" pt-3 bg-dimmed_white rounded-xl min-h-[150px]">
                    <div className="">
                      <p className="font-medium opacity-80 pl-2">
                        Purchased Items
                      </p>
                    </div>
                    <div className="">
                      <table className="text-sm w-full table-auto border-separate border-spacing-y-3 ">
                        <thead className="bg-[#f3f4f5] shadow">
                          <tr className="!text-left !opacity-70 !font-semibold bg-[#f3f4f5]">
                            <th className="text-xs pl-3 w-[25%] py-2 !font-semibold">
                              Name
                            </th>
                            <th className="text-xs pl-3 w-[25%] py-2 !font-semibold">
                              Quantity
                            </th>
                            <th className="text-xs pl-3 w-[25%] py-2 !font-semibold">
                              Amount{" "}
                              <span className=" sm:inline hidden">/ Item</span>
                            </th>
                            <th className="text-xs pl-3 w-[25%] py-2 !font-semibold">
                              Total{" "}
                              <span className=" sm:inline hidden "> Cost</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {data.bookItems?.map((item, idx) => (
                            <tr
                              className="pt-1 transition-all duration-300 shadow-sm hover:shadow-md bg-white mb-1"
                              key={idx}
                            >
                              <td className="py-2 text-xs pl-3 ">
                                {item.name}
                              </td>
                              <td className="py-2 text-xs pl-7">
                                {item.count}
                              </td>
                              <td className="py-2 text-xs pl-3">
                                ₦{Number(item.amount).toFixed(2)}
                              </td>
                              <td className="py-2 text-xs pl-3">
                                ₦
                                {(
                                  Number(item.count) * Number(item.amount)
                                ).toFixed(2)}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className=" border-b pb-7">
                    <div className="grid grid-cols-2 gap-5 mt-6 items-end">
                      <div className="pb-3 -mt-1">
                        <label htmlFor="" className="text-sm">
                          Actual Amount Paid to Supplier
                        </label>
                        <div className="flex-1 relative">
                          <div className="span absolute left-3 top-4 text-lg">
                            <PiCurrencyNgnLight />{" "}
                          </div>
                          <input
                            disabled
                            value={data.amountPaid}
                            type="text"
                            className="!bg-bg w-full rounded border outline-none h-full px-5 pl-8 py-[14px] text-sm placeholder:text-sm"
                          />
                        </div>
                      </div>
                      <div className="pb-3 -mt-1">
                        <label htmlFor="" className="text-sm">
                          Debt
                        </label>
                        <div className="flex-1 relative">
                          <div className="span absolute left-3 top-4 text-lg">
                            <PiCurrencyNgnLight />{" "}
                          </div>
                          <input
                            disabled
                            value={data.debt}
                            readOnly
                            type="text"
                            className="!bg-bg w-full rounded border outline-none h-full px-5 pl-8 py-[14px] text-sm placeholder:text-sm"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {data.customer ? (
                    <div className="flex flex-col gap-5 border-b pb-10 mt-3">
                      <div className="-mt-5">
                        <CustomInput
                          disabled
                          className={"!bg-bg"}
                          label={"Supplier Name *"}
                          placeholder={"John Doe"}
                          hasIcon
                          value={data.customer?.name}
                          Icon={FaUser}
                        />
                      </div>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <CustomInput
                            disabled
                            className={"!bg-bg"}
                            label={"Supplier Email *"}
                            placeholder={"itshamzy@gmail.com"}
                            hasIcon
                            Icon={MdEmail}
                            value={data.customer?.email}
                          />
                        </div>
                        <div>
                          <CustomInput
                            disabled
                            className={"!bg-bg"}
                            label={"Supplier Phone *"}
                            placeholder={"08123456789"}
                            hasIcon
                            Icon={MdCall}
                            value={data.customer?.phone}
                          />
                        </div>
                      </div>
                    </div>
                  ) : null}
                  <div className="grid sm:grid-cols-2 gap-5 border-b pb-7">
                    <CustomSelect
                      className={"!bg-bg"}
                      options={status}
                      label={"Transaction Status"}
                    />
                    <CustomInput
                      disabled
                      className={"!bg-bg"}
                      label={"Sales Date"}
                      id={"sales_date"}
                      type="date"
                      value={moment(data.invoiceDate).format("YYYY-MM-DD")}
                    />
                  </div>
                  <div className="">
                    <label htmlFor="" className="text-sm">
                      What was the payment for (optional)
                    </label>
                    <textarea
                      className="w-full border rounded h-28 text-sm placeholder:text-sm p-2 outline-none resize-none !bg-bg"
                      placeholder="e.g purchase of new items..."
                      value={data.description}
                    ></textarea>
                  </div>
                </div>
              </form>
            </div>
            <ActivityTrail data={[]} loading={loading} />
          </div>
        </div>
      )}
    </AppLayoutNew>
  );
};

export default SaleDetiails;
