import React, { useContext, useEffect, useState } from "react";
import AppLayoutNew from "../../layout/AppLayoutNew";
import { CgSearch } from "react-icons/cg";
import CustomButton from "../../components/Buttons/CustomButton";
import { BiMenu, BiPlus } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../shared/PageHeader";
import { useDispatch, useSelector } from "react-redux";
import { getCustomerAction } from "../../store/slices/product/getCustomerSlice";
import TableLoading from "../../components/Loaders/TableLoading";
import { getSupplierAction } from "../../store/slices/product/getSupplierSlice";

const Search = ({ placeholder }) => {
  return (
    <div className="flex-1 relative">
      <div className="span absolute left-3 top-[12px] ">
        <CgSearch size={18} className="text-gray-500" />
      </div>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full border outline-none h-full px-5 pl-10 text-sm py-2.5 rounded-lg placeholder:text-sm"
      />
    </div>
  );
};

const RenderButton = ({ title }) => {
  const navigate = useNavigate();
  return (
    <CustomButton
      clickHandler={() => navigate("/add-customer")}
      className={
        " !bg-[rgba(0,158,170,0.1)] !px-3 font-semibold !text-[rgba(0,158,170,1)] border !border-[rgba(0,158,170,1)] !py-1 rounded-lg"
      }
      children={
        <div className="flex items-center gap-1 !text-sm">
          <BiPlus size={20} />
          <span className="md:block hidden ">{title}</span>
          <span className="block md:hidden">New</span>
        </div>
      }
    />
  );
};

const Customers = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, data } = useSelector((state) => state.get_customer);
  const { loading: supplierLoading, data: suppliers } = useSelector(
    (state) => state.get_supplier
  );

  const tabs = ["Customers", "Suppliers"];
  const [activeTab, setTab] = useState(0);

  const tableHeader = ["Name", "Email", "Phone"];

  useEffect(() => {
    dispatch(getCustomerAction());
    dispatch(getSupplierAction());
  }, []);

  return (
    <AppLayoutNew noHeader={true}>
      <div className="mx-4 sm:mx-7 my-10">
        <PageHeader
          children={
            <div className="grid grid-cols-2 lg:gap-5 items-center">
              <p>Customers</p>
              <p className="hidden lg:block">Suppliers</p>
            </div>
          }
        />
        <div className="grid md:grid-cols-2 gap-5">
          <div className="bg-dimmed_white p-5 rounded-xl">
            <div className="w-full flex gap-4 pt-3">
              <RenderButton title={"Add Customer"} />
              <Search placeholder="Search customers by name" />
            </div>
            <div className="mt-2 w-full">
              <div className="overflow-x-auto max-w-[80vw] sm:max-w-[unset]">
                <table className=" min-w-[500px] sm:min-w-[unset] m-auto w-full table-auto border-separate border-spacing-y-3 ">
                  <thead className="">
                    <tr className="!text-left !opacity-70 !font-semibold">
                      {tableHeader.map((item, idx) => (
                        <th
                          className={`text-sm py-3 border-y !font-semibold ${
                            idx == 0 && "pl-3 w-[32%]"
                          }`}
                        >
                          {idx == 0 ? "Customer" : null} {item}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  {!loading && data?.length ? (
                    <tbody>
                      <>
                        {data?.map((item, idx) => (
                          <tr
                            onClick={() => navigate("#")}
                            className="cursor-pointer pt-3 transition-all duration-300 shadow-sm hover:shadow-md bg-white mb-2"
                            key={idx}
                          >
                            <td className="text-sm py-2.5 pb-4 pl-3">
                              {item.name || "Test Customer"}
                            </td>
                            <td className="text-sm py-2.5 pb-4">
                              {item.email || "test@test.com"}
                            </td>
                            <td className="text-sm py-2.5 pb-4">
                              {item.phoneNumber || "09098712345"}
                            </td>
                          </tr>
                        ))}
                      </>
                    </tbody>
                  ) : null}
                </table>
                {!loading && !data.length ? (
                  <p className="py-10 font-medium  flex justify-center">
                    No data found{" "}
                  </p>
                ) : null}
                {loading && <TableLoading />}
              </div>
              <div className="flex justify-center mt-2">
                <div className="w-8 h-8 grid place-content-center rounded-md bg-bg">
                  <span className="font-semibold text-primary">1</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="block lg:hidden text-2xl font-semibold opacity-80 pl-5 my-3">
              Suppliers
            </p>
            <div className="bg-dimmed_white p-5 rounded-xl">
              <div className="w-full flex gap-4 pt-3">
                <RenderButton title={"Add Supplier"} />
                <Search placeholder="Search suppliers by name" />
              </div>
              <div className="mt-2 w-full">
                <div className="overflow-x-auto max-w-[80vw] sm:max-w-[unset]">
                  <table className=" min-w-[500px] sm:min-w-[unset] w-full table-auto border-separate border-spacing-y-3 ">
                    <thead className="">
                      <tr className="!text-left !opacity-70 !font-semibold">
                        {tableHeader.map((item, idx) => (
                          <th
                            className={`text-sm py-3 border-y !font-semibold ${
                              idx == 0 && "pl-3 w-[32%]"
                            }`}
                          >
                            {idx == 0 ? "Supplier" : null} {item}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    {!supplierLoading && suppliers.length ? (
                      <tbody>
                        <>
                          {suppliers?.map((item, idx) => (
                            <tr
                              onClick={() => navigate("#")}
                              className="cursor-pointer pt-3 transition-all duration-300 shadow-sm hover:shadow-md bg-white mb-2"
                              key={idx}
                            >
                              <td className="text-sm py-2.5 pb-4 pl-3">
                                {item.name || "Test Person"}
                              </td>
                              <td className="text-sm py-2.5 pb-4">
                                {item.email || "test@test.com"}
                              </td>
                              <td className="text-sm py-2.5 pb-4">
                                {item.phoneNumber || "09098712345"}
                              </td>
                            </tr>
                          ))}
                        </>
                      </tbody>
                    ) : null}
                  </table>
                  {!supplierLoading && !suppliers.length ? (
                    <p className="py-10 font-medium  flex justify-center">
                      No data found{" "}
                    </p>
                  ) : null}
                  {supplierLoading && <TableLoading />}
                </div>
                <div className="flex justify-center mt-2">
                  <div className="w-8 h-8 grid place-content-center rounded-md bg-bg">
                    <span className="font-semibold text-primary">1</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayoutNew>
  );
};

export default Customers;
