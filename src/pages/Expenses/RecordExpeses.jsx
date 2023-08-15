import React from "react";
import AppLayoutNew from "../../layout/AppLayoutNew";
import CustomInput from "../../components/CustomInput";
import { FaAddressBook, FaUser } from "react-icons/fa";
import { PiCurrencyNgnLight } from "react-icons/pi";
import CustomButton from "../../components/Buttons/CustomButton";
import CustomSelect from "../../components/CustomInput/Select";
import PageHeader from "../../shared/PageHeader";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { getSupplierAction } from "../../store/slices/product/getSupplierSlice";
import { useFormik } from "formik";
import * as Yup from "yup";
import moment from "moment";
import { MdCall, MdEmail } from "react-icons/md";
import ValidationError from "../../components/Error/ValidationError";
import customToast from "../../components/Toast/toastify";
import { createBookAction } from "../../store/slices/book-keeping/createBookSlice";
import { BsTrash2Fill } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import { BiCheck } from "react-icons/bi";

const RecordExpenses = () => {
  let total_sum = 0;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showSupplierForm, setShowSupplierForm] = useState(false);
  const { data } = useSelector((state) => state.get_supplier);
  const { loading } = useSelector((state) => state.create_book);

  const [suppliers, setSuppliers] = useState(data);

  const toggleShowSupplierForm = () => {
    setShowSupplierForm(!showSupplierForm);
  };

  const validateSupplier = ({ supplier, supplierId }) => {
    if (!supplierId && (!supplier.name || !supplier.email || !supplier.phone))
      return false;
    else return true;
  };

  const formik = useFormik({
    initialValues: {
      amountExpected: total_sum,
      paymentChannelType: 0,
      amountPaid: 0,
      bookType: 2,
      description: "",
      invoiceDate: moment().format("YYYY-MM-DD"),
      debt: 0,
      tax: 0,
      discount: 0,
      supplierId: undefined,
      supplier: {
        name: "",
        phone: "",
        email: "",
        address: "",
      },
    },
    validationSchema: Yup.object().shape({
      amountPaid: Yup.number()
        .typeError("Enter a valid number")
        .required("This field is required"),
      amountExpected: Yup.number()
        .typeError("Enter a valid number")
        .required("This field is required"),
    }),
    onSubmit(values) {
      if (records.length == 0) {
        customToast("Please add some Items to proceed", true);
        return;
      }
      values.bookItems = records;
      values.amountExpected = total_sum;
      values.amountExpected = Number(values.amountExpected);
      values.amountPaid = Number(values.amountPaid);
      values.debt = Number(values.amountExpected - values.amountPaid);
      if (values.debt <= 0) values.debt = 0;
      if (values.debt > 0) {
        const valid = validateSupplier(values);
        if (!valid) {
          customToast(
            "Incase of debt, you are required to provide a valid supplier details",
            true
          );
          return;
        }
      }
      values.discount = Number(values.discount);
      values.tax = Number(values.tax);
      dispatch(createBookAction({ data: values, navigate }));
    },
  });

  const {
    errors,
    setFieldValue,
    getFieldProps,
    touched,
    values,
    handleSubmit,
  } = formik;

  const handleChangeSupplier = (value) =>
    setFieldValue("supplierId", Number(value));

  useEffect(() => {
    dispatch(getSupplierAction());
  }, []);

  useEffect(() => {
    const formatted = data.map((item, idx) => ({
      value: idx + 1,
      label: item.name,
    }));
    formatted.unshift({ value: null, label: "Choose One" });
    setSuppliers(formatted);
  }, [data]);

  const status = [
    { label: "Select One", value: "0" },
    { label: "Pending", value: "1" },
    { label: "Ongoing", value: "2" },
    { label: "Completed", value: "3" },
    { label: "Aborted", value: "4" },
  ];

  const [addMore, setAddMore] = useState(false);
  const [records, setRecords] = useState([]);
  const [newRecord, setNewRecord] = useState({});

  records.map((item) => {
    total_sum += Number(item.total_amount);
  });

  const handleAddNewRecord = () => {
    if (newRecord.name && newRecord.amount && newRecord.qty) {
      setRecords((prev) => [...prev, newRecord]);
      setNewRecord({ total_amount: "" });
      setAddMore(false);
    }
  };

  const handleDelete = (id) => {
    setRecords(records.filter((_, idx) => idx !== id));
  };

  useEffect(() => {
    records.map((item) => {
      total_sum += Number(item.total_amount);
    });
  }, [records]);

  return (
    <AppLayoutNew noHeader={true}>
      <div className="mx-4 sm:mx-7 my-10 ">
        <PageHeader children={"Record Expenses"} />
        <div className="grid grid-cols-2 lg:hidden max-w-md mb-5  gap-4 mt-8">
          <CustomButton
            className={
              "  whitespace-nowrap !bg-[rgba(0,158,170,0.3)] !px-3 font-semibold !text-[rgba(0,158,170,1)] border !border-[rgba(0,158,170,1)]  !py-2.5 rounded-lg"
            }
          >
            Import Expenses
          </CustomButton>
          <CustomButton
            className={
              " whitespace-nowrap !bg-transparent border !px-3 !border-[rgba(0,158,170,.4)] !text-[rgba(0,158,170,1)] font-semibold  !py-2.5 rounded-lg"
            }
          >
            Download Sample
          </CustomButton>
        </div>
        <div className="grid lg:grid-cols-[3.5fr,2fr] gap-8">
          <div className="px-4 py-6 !sm:p-6 bg-dimmed_white rounded-xl">
            <div className="border-b pb-5">
              <p className="text-sm font-medium opacity-70">Total Sum</p>
              <p className="font-bold text-2xl text-primary">
                ₦{total_sum.toFixed(2)}
              </p>
            </div>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5">
              <div className="mt-3 grid gap-5">
                <div className=" pt-3 bg-dimmed_white rounded-xl min-h-[200px]">
                  <div className="flex justify-between items-center">
                    <p className="font-medium opacity-80 pl-2">
                      Purchased Items
                    </p>
                    <div className="flex justify-end">
                      <CustomButton
                        clickHandler={() => setAddMore(!addMore)}
                        className={
                          " !bg-[rgba(0,158,170,0.3)] !px-7 font-semibold !text-[rgba(0,158,170,1)] border !border-[rgba(0,158,170,1)]  !py-1.5 rounded-lg"
                        }
                      >
                        Add Items
                      </CustomButton>
                    </div>
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
                          <th className="text-xs pl-3 w-[25%] py-2 !font-semibold"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {records.map((item, idx) => (
                          <tr
                            className="pt-1 transition-all duration-300 shadow-sm hover:shadow-md bg-white mb-1"
                            key={idx}
                          >
                            <td className="py-2 text-xs pl-3 ">{item.name}</td>
                            <td className="py-2 text-xs pl-7">{item.qty}</td>
                            <td className="py-2 text-xs pl-3">
                              ₦{Number(item.amount).toFixed(2)}
                            </td>
                            <td className="py-2 text-xs pl-3">
                              ₦{Number(item.total_amount).toFixed(2)}
                            </td>

                            <td className="py-2 text-xs">
                              <div
                                onClick={() => handleDelete(idx, item)}
                                className="bg-primaryColor-900/80 text-red-500 flex items-center gap-1.5
                     rounded cursor-pointer px-4 py-1 w-fit"
                              >
                                {" "}
                                <BsTrash2Fill color="" />
                                <span className="hidden sm:block">Remove</span>
                              </div>
                            </td>
                          </tr>
                        ))}
                        {
                          <>
                            {addMore ? (
                              <tr>
                                <td className="relative">
                                  <input
                                    value={newRecord.name}
                                    onChange={(e) => {
                                      setNewRecord((prev) => ({
                                        ...prev,
                                        name: e.target.value,
                                      }));
                                    }}
                                    className="name w-[90%] border outline-none text-xs px-2 py-1"
                                  />
                                </td>
                                <td>
                                  <input
                                    value={newRecord.qty}
                                    onChange={(e) =>
                                      setNewRecord((prev) => ({
                                        ...prev,
                                        qty: e.target.value,
                                        total_amount: prev.amount
                                          ? Number(e.target.value) *
                                            Number(prev.amount)
                                          : prev.total_amount,
                                      }))
                                    }
                                    className="w-[90%] border outline-none text-xs px-2 py-1 "
                                  />
                                </td>
                                <td>
                                  <input
                                    value={newRecord.amount}
                                    disabled={!newRecord.qty}
                                    onChange={(e) =>
                                      setNewRecord((prev) => ({
                                        ...prev,
                                        amount: e.target.value,
                                        total_amount:
                                          Number(e.target.value) *
                                          Number(prev.qty),
                                      }))
                                    }
                                    className="w-[90%] border outline-none text-xs px-2 py-1 "
                                  />
                                </td>
                                <td>
                                  <input
                                    value={newRecord.total_amount}
                                    disabled
                                    className="w-[90%] border outline-none text-xs px-2 py-1 "
                                  />
                                </td>
                                <td className="flex justify-center items-center gap-2 sm:gap-3">
                                  <CgClose
                                    className="cursor-pointer"
                                    onClick={() => {
                                      setNewRecord({ total_amount: "" });
                                      setAddMore(false);
                                    }}
                                    color="red"
                                    size={20}
                                  />
                                  <BiCheck
                                    className="cursor-pointer"
                                    onClick={handleAddNewRecord}
                                    color="green"
                                    size={30}
                                  />
                                </td>
                              </tr>
                            ) : null}
                          </>
                        }
                      </tbody>
                    </table>
                    {records.length <= 0 && !addMore ? (
                      <div className="text-center pl-3 opacity-80 text-sm font-medium mt-5">
                        {" "}
                        No Items(s) added yet.
                        <p>
                          Use the "Add Item" button at the top right of this
                          table
                        </p>
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className=" border-b pb-7">
                  <div className="grid grid-cols-2 gap-5 mt-6">
                    <div className="pb-3 -mt-1">
                      <label htmlFor="" className="text-sm">
                        Actual Amount Paid to Supplier
                      </label>
                      <div className="flex-1 relative">
                        <div className="span absolute left-3 top-4 text-lg">
                          <PiCurrencyNgnLight />{" "}
                        </div>
                        <input
                          {...getFieldProps("amountPaid")}
                          type="text"
                          className="!bg-bg w-full rounded border outline-none h-full px-5 pl-8 py-[14px] text-sm placeholder:text-sm"
                        />
                      </div>
                      {touched.amountPaid && errors.amountPaid && (
                        <ValidationError msg={errors.amountPaid} />
                      )}
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
                          value={Math.max(total_sum - values.amountPaid, 0)}
                          readOnly
                          type="text"
                          className="!bg-bg w-full rounded border outline-none h-full px-5 pl-8 py-[14px] text-sm placeholder:text-sm"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-5 border-b pb-10 mt-3">
                  <div className="relative ">
                    <button
                      type="button"
                      onClick={toggleShowSupplierForm}
                      className="z-10 cursor-pointer absolute right-1 -top-.5 text-sm text-primary font-semibold"
                    >
                      {showSupplierForm
                        ? "Choose from saved suppliers"
                        : "Register New Supplier"}
                    </button>
                    {!showSupplierForm ? (
                      <CustomSelect
                        emptyMsg={"No saved supplier yet. Create one"}
                        options={suppliers}
                        label={"Select Supplier"}
                        className={"!bg-bg"}
                        onChange={handleChangeSupplier}
                      />
                    ) : null}
                  </div>
                  {showSupplierForm ? (
                    <>
                      <div className="-mt-5">
                        <CustomInput
                          className={"!bg-bg"}
                          label={"Supplier Name *"}
                          placeholder={"John Doe"}
                          hasIcon
                          {...getFieldProps("supplier.name")}
                          Icon={FaUser}
                        />
                        {touched.supplier?.name && errors.supplier?.name && (
                          <ValidationError msg={errors.supplier?.name} />
                        )}
                      </div>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <CustomInput
                            className={"!bg-bg"}
                            label={"Supplier Email *"}
                            placeholder={"itshamzy@gmail.com"}
                            hasIcon
                            Icon={MdEmail}
                            {...getFieldProps("supplier.email")}
                          />
                          {touched.supplier?.email &&
                            errors.supplier?.email && (
                              <ValidationError msg={errors.supplier?.email} />
                            )}
                        </div>
                        <div>
                          <CustomInput
                            className={"!bg-bg"}
                            label={"Supplier Phone *"}
                            placeholder={"08123456789"}
                            hasIcon
                            Icon={MdCall}
                            {...getFieldProps("supplier.phone")}
                          />
                          {touched.supplier?.phone &&
                            errors.supplier?.phone && (
                              <ValidationError msg={errors.supplier?.phone} />
                            )}
                        </div>
                      </div>
                      <div>
                        <CustomInput
                          className={"!bg-bg"}
                          label={"Supplier Address *"}
                          placeholder={
                            "ABC Street Opposite XYZ Multipurpose Hall"
                          }
                          hasIcon
                          {...getFieldProps("supplier.address")}
                          Icon={FaAddressBook}
                        />
                        {touched.supplier?.address &&
                          errors.supplier?.address && (
                            <ValidationError msg={errors.supplier?.address} />
                          )}
                      </div>{" "}
                    </>
                  ) : null}
                </div>
                <div className="grid sm:grid-cols-2 gap-5 border-b pb-7">
                  <CustomSelect
                    className={"!bg-bg"}
                    options={status}
                    label={"Transaction Status"}
                  />
                  <CustomInput
                    className={"!bg-bg"}
                    label={"Sales Date"}
                    id={"sales_date"}
                    type="date"
                    {...getFieldProps("invoiceDate")}
                  />
                </div>
                <div className="">
                  <label htmlFor="" className="text-sm">
                    What was the payment for (optional)
                  </label>
                  <textarea
                    className="w-full border rounded h-28 text-sm placeholder:text-sm p-2 outline-none resize-none !bg-bg"
                    placeholder="e.g purchase of new items..."
                    {...getFieldProps("description")}
                  ></textarea>
                </div>
                <div>
                  <CustomButton
                    type={"submit"}
                    loading={loading}
                    disabled={loading}
                    className=" ml-auto mt-2 text-white text-sm flex items-center justify-end gap-2 !px-10 !py-3 rounded-md"
                  >
                    Submit Expense{" "}
                  </CustomButton>
                </div>
              </div>
            </form>
          </div>
          <div className="hidden lg:block w-full ">
            <p className="font-medium opacity-75">
              Did you know that if you had performed a bulk expenses, you can
              save stress by uploading a .xlxs or .csv file in a specific
              format.
            </p>
            <p className="text-sm opacity-70 mt-7">
              Streamline data integration by effortlessly importing your CSV
              file and unlocking a world of possibilities for seamless content
              management and organization. You may click on the button below to
              download a sample csv file on how to prepare your own .csv file
              for your expenses for upload.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <CustomButton
                className={
                  " !bg-[rgba(0,158,170,0.3)] !px-3 font-semibold !text-[rgba(0,158,170,1)] border !border-[rgba(0,158,170,1)]  !py-2.5 rounded-lg"
                }
              >
                Import Expenses
              </CustomButton>
              <CustomButton
                className={
                  "!bg-transparent border !px-3 !border-[rgba(0,158,170,.4)] !text-[rgba(0,158,170,1)] font-semibold  !py-2.5 rounded-lg"
                }
              >
                Download Sample
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
    </AppLayoutNew>
  );
};

export default RecordExpenses;
