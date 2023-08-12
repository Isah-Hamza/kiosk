import React, { useEffect, useRef, useState } from "react";
import AppLayoutNew from "../../layout/AppLayoutNew";
import { BsTrash2Fill } from "react-icons/bs";
import CustomInput from "../../components/CustomInput";
import { PiCurrencyNgnLight } from "react-icons/pi";
import CustomButton from "../../components/Buttons/CustomButton";
import CustomSelect from "../../components/CustomInput/Select";
import shoppingBag from "../../assets/images/image-shopping-bag-dd0f7627.svg";
import { FiPlus } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import { BiCheck } from "react-icons/bi";
import PageHeader from "../../shared/PageHeader";
import { getInventoryAction } from "../../store/slices/product/getInventorySlice";
import { useDispatch, useSelector } from "react-redux";
import { ImSpinner2 } from "react-icons/im";
import ValidationError from "../../components/Error/ValidationError";
import { FaAddressBook, FaUser } from "react-icons/fa";
import { MdCall, MdEmail } from "react-icons/md";
import { useFormik } from "formik";
import * as Yup from "yup";
import { getCustomerAction } from "../../store/slices/product/getCustomerSlice";
import moment from "moment";

import card from "../../assets/images/icons8-card-96.png";
import cash from "../../assets/images/icons8-cash-100.png";
import transfer from "../../assets/images/icons8-transfer-64.png";
import { createBookAction } from "../../store/slices/book-keeping/createBookSlice";
import { useNavigate } from "react-router-dom";
import customToast from "../../components/Toast/toastify";

const Row = ({ item, id, handleAdd }) => {
  const [qtyToBuy, setQtyToBuy] = useState(1);

  return (
    <tr
      className="pt-1 transition-all duration-300 shadow-sm hover:shadow-md bg-white mb-1"
      // key={idx}
    >
      <td className="py-1 text-xs">
        <div className="flex flex-col sm:flex-row items-center gap-1">
          <img className="w-10" src={shoppingBag} alt="" />
          {item.name}
        </div>
      </td>
      <td className="py-1 text-xs pl-7">{item.stock_available}</td>
      <td className="py-1 text-xs pl-3">₦{Number(item.price).toFixed(2)}</td>
      <td className="py-1 text-xs pl-3">
        <input
          value={item.stock_available ? qtyToBuy : ""}
          onChange={(e) => setQtyToBuy(e.target.value)}
          type="text"
          className="w-11 sm:w-12 rounded-sm p-1 border outline-none"
        />
      </td>

      <td className="py-1 text-xs sm:pl-3">
        <button
          disabled={
            item.stock_available <= 0 || qtyToBuy > item.stock_available
          }
          onClick={() => handleAdd(item, id, qtyToBuy)}
          className="bg-primary text-white flex items-center gap-1.5
 rounded cursor-pointer px-4 py-1 w-fit disabled:bg-opacity-60 disabled:cursor-not-allowed"
        >
          {" "}
          <span className="block">Add</span>
        </button>
      </td>
    </tr>
  );
};

const NewSales = () => {
  let total_sum = 0;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data, loading } = useSelector((state) => state.get_inventory);
  const { loading: creating } = useSelector((state) => state.create_book);
  const [showSupplierForm, setShowSupplierForm] = useState(false);
  const { data: customers } = useSelector((state) => state.get_customer);

  const [suppliers, setSuppliers] = useState(customers);
  const [addMore, setAddMore] = useState(false);
  const [setselectFromStore, setSetselectFromStore] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeChannel, setActiveChannel] = useState(0);

  const validateCustomer = ({ customer, customerId }) => {
    if (!customerId && (!customer.name || !customer.email || !customer.phone))
      return false;
    else return true;
  };

  const formik = useFormik({
    initialValues: {
      amountExpected: 0,
      paymentChannelType: 0,
      amountPaid: 0,
      bookType: 1,
      description: "",
      invoiceDate: moment().format("YYYY-MM-DD"),
      debt: 0,
      tax: 0,
      discount: 0,
      customerId: undefined,
      customer: {
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
      tax: Yup.number().typeError("Enter a valid number"),
      discount: Yup.number().typeError("Enter a valid number"),
    }),
    onSubmit(values) {
      console.log(values);
      if (records.length == 0) {
        customToast("Please add some products to proceed", true);
        return;
      }
      console.log("first");

      values.bookItems = records;
      values.amountExpected = total_sum;
      values.amountPaid = Number(values.amountPaid);
      values.debt = Number(values.amountExpected - values.amountPaid);
      if (values.debt <= 0) values.debt = 0;
      console.log(values.debt);
      if (values.debt > 0) {
        const valid = validateCustomer(values);
        if (!valid) {
          customToast(
            "Incase of debt, you are required to provide a valid customer details",
            true
          );
          return;
        }
      }
      values.discount = Number(values.discount);
      values.tax = Number(values.tax);

      values.bookItems.forEach((book) => {
        book.count = Number(book.qty);
        delete book.qty;
        delete book.total_amount;
      });

      console.log(values);
      dispatch(createBookAction({ data: values, navigate }));
    },
  });

  const { errors, setFieldValue, getFieldProps, touched, handleSubmit } =
    formik;

  const toggleShowSupplierForm = () => {
    setShowSupplierForm(!showSupplierForm);
  };

  const handleChangeSupplier = (value) =>
    setFieldValue("customerId", Number(value));

  const [searchedProducts, setSearchedProducts] = useState([]);

  const status = [
    { label: "Select One", value: "0" },
    { label: "Pending", value: "1" },
    { label: "Ongoing", value: "2" },
    { label: "Completed", value: "3" },
    { label: "Aborted", value: "4" },
  ];

  const channels = [
    {
      img: cash,
      title: " Paid by Cash",
    },
    {
      img: card,
      title: " Paid by Card",
    },
    {
      img: transfer,
      title: " Paid by Transfer",
    },
  ];

  const [records, setRecords] = useState([
    { name: "Tomatoes", qty: 2, amount: "200.00", total_amount: "400.00" },
  ]);

  const [newRecord, setNewRecord] = useState({});

  records.map((item) => {
    total_sum += Number(item.total_amount);
  });

  const handleDelete = (id, deletedItem) => {
    setRecords(records.filter((_, idx) => idx !== id));
  };

  const handleSelectProduct = (item) => {
    const newItem = {
      amount: item.sellingPrice,
      qty: 1,
      total_amount: Number(item.sellingPrice) * 1,
      name: item.name,
      productId: item.id,
      description: item.description,
    };
    setSearchTerm("");
    setNewRecord(newItem);
  };

  useEffect(() => {
    records.map((item) => {
      total_sum += Number(item.total_amount);
    });
  }, [records]);

  useEffect(() => {
    if (searchTerm == "") setSearchedProducts(data.data);
    else {
      const searchRes = data.data?.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchedProducts(searchRes);
    }
  }, [searchTerm, data]);

  useEffect(() => {
    const formatted = customers.map((item, idx) => ({
      value: idx + 1,
      label: item.name,
    }));
    formatted.unshift({ value: null, label: "Choose One" });
    setSuppliers(formatted);
  }, [customers]);

  useEffect(() => {
    dispatch(getInventoryAction());
    dispatch(getCustomerAction());
  }, []);

  return (
    <AppLayoutNew noHeader={true}>
      {loading ? (
        <div className="flex h-screen items-center gap-1 justify-center text-sm p-2 py-10 font-medium">
          <ImSpinner2 className="animate-spin" />
          <p>Loading...</p>
        </div>
      ) : (
        <>
          <div className="mx-4 lg:mx-7 my-10 min-w-[300px]">
            <PageHeader children={"Record New Sales"} />
            <div className="grid grid-cols-[1fr,1.4fr] sm:grid-cols-2 lg:hidden max-w-md mb-5  gap-4 mt-8">
              <CustomButton
                className={
                  " !bg-[rgba(0,158,170,0.3)] !px-3 font-semibold !text-[rgba(0,158,170,1)] border !border-[rgba(0,158,170,1)]!py-2.5 rounded-lg"
                }
              >
                Import Sales
              </CustomButton>
              <CustomButton
                className={
                  "!bg-transparent border !px-3 !border-[rgba(0,158,170,.4)] !text-[rgba(0,158,170,1)] font-semibold  !py-2.5 rounded-lg"
                }
              >
                Download Sample
              </CustomButton>
            </div>
            <div className="grid lg:grid-cols-[3.5fr,2fr] gap-8">
              <form
                onSubmit={handleSubmit}
                className=" px-4 py-6 !sm:p-6 bg-dimmed_white rounded-xl"
              >
                <div className="border-b pb-5">
                  <p className="text-sm font-medium opacity-70">Total Sum</p>
                  <p className="font-bold text-2xl text-primary">
                    ₦{total_sum.toFixed(2)}
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-5">
                  <div className=" pt-3 bg-dimmed_white rounded-xl min-h-[200px]">
                    <div className="flex justify-between items-center">
                      <p className="font-medium opacity-80 pl-2">
                        Sold Products
                      </p>
                      <div className="flex justify-end">
                        <CustomButton
                          clickHandler={() => setAddMore(!addMore)}
                          className={
                            " !bg-[rgba(0,158,170,0.3)] !px-7 font-semibold !text-[rgba(0,158,170,1)] border !border-[rgba(0,158,170,1)]  !py-1.5 rounded-lg"
                          }
                        >
                          Add Products
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
                              <td className="py-2 text-xs pl-3 ">
                                {item.name}
                              </td>
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
                                  <span className="hidden sm:block">
                                    Remove
                                  </span>
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
                                        setSearchTerm(e.target.value);
                                        setNewRecord((prev) => ({
                                          ...prev,
                                          name: e.target.value,
                                        }));
                                      }}
                                      className="name w-[90%] border outline-none text-xs px-2 py-1"
                                    />
                                    {searchedProducts.length ? (
                                      <div
                                        className={`z-10 absolute top-10 min-w-full bg-white shadow text-sm text-black rounded-md py-3 `}
                                      >
                                        {searchedProducts?.map((item, idx) => (
                                          <button
                                            type="button"
                                            onClick={() =>
                                              handleSelectProduct(item)
                                            }
                                            className="text-left w-full py-2 px-3 hover:bg-slate-100 whitespace-nowrap"
                                            key={idx}
                                          >
                                            <p>{item.name}</p>
                                          </button>
                                        ))}
                                      </div>
                                    ) : null}
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
                                      onClick={() => {
                                        setRecords((prev) => [
                                          ...prev,
                                          newRecord,
                                        ]);
                                        setNewRecord({ total_amount: "" });
                                        setAddMore(false);
                                      }}
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
                        <div className="pl-3 opacity-80 text-sm font-medium">
                          {" "}
                          No product(s) selected yet.
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="mb-2">
                    <label htmlFor="" className="text-sm">
                      Total Amount Received From Customer
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
                  <div className="grid sm:grid-cols-2 gap-5 border-b pb-7">
                    <div className="-mt-1">
                      <label htmlFor="" className="text-sm">
                        Discounted Price (if applicable)
                      </label>
                      <div className="flex-1 relative">
                        <div className="span absolute left-3 top-4 text-lg">
                          <PiCurrencyNgnLight />{" "}
                        </div>
                        <input
                          {...getFieldProps("discount")}
                          type="text"
                          className="!bg-bg w-full rounded border outline-none h-full px-5 pl-8 py-[14px] text-sm placeholder:text-sm"
                        />
                      </div>
                      {touched.discount && errors.discount && (
                        <ValidationError msg={errors.discount} />
                      )}
                    </div>
                    <div className="-mt-1">
                      <label htmlFor="" className="text-sm">
                        Tax (if applicable)
                      </label>
                      <div className="flex-1 relative">
                        <div className="span absolute left-3 top-4 text-lg">
                          <PiCurrencyNgnLight />{" "}
                        </div>
                        <input
                          {...getFieldProps("tax")}
                          type="text"
                          className="!bg-bg w-full rounded border outline-none h-full px-5 pl-8 py-[14px] text-sm placeholder:text-sm"
                        />
                      </div>
                      {touched.tax && errors.tax && (
                        <ValidationError msg={errors.tax} />
                      )}
                    </div>
                  </div>
                  <div className="mb-2">
                    <p className="mb-3 font-medium opacity-80">
                      Payment Channel
                    </p>
                    <div className="grid grid-cols-3 gap-3">
                      {channels.map((item, idx) => (
                        <button
                          type="button"
                          onClick={() => {
                            setFieldValue("paymentChannelType", idx + 1);
                            setActiveChannel(idx + 1);
                          }}
                          key={idx}
                          className={`p-5 py-3 gap-2 border rounded-lg text-sm flex items-center ${
                            idx + 1 === activeChannel &&
                            "!border-2 !border-primary"
                          }`}
                        >
                          <img
                            className={`w-8 ${idx == 2 && "w-14"}`}
                            src={item.img}
                            alt="icon"
                          />
                          <p>{item.title}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className=" grid gap-5">
                    <div className="flex flex-col gap-5 border-b pb-10 mt-3">
                      <div className="relative ">
                        <button
                          type="button"
                          onClick={toggleShowSupplierForm}
                          className="z-10 cursor-pointer absolute right-1 -top-.5 text-sm text-green-900 font-semibold"
                        >
                          {showSupplierForm
                            ? "Choose from saved customers"
                            : "Register New Customer"}
                        </button>
                        {!showSupplierForm ? (
                          <CustomSelect
                            emptyMsg={"No saved customers yet. Create one"}
                            options={suppliers}
                            label={"Select Customer"}
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
                              label={"Customer Name *"}
                              placeholder={"John Doe"}
                              hasIcon
                              {...getFieldProps("customer.name")}
                              Icon={FaUser}
                            />
                          </div>
                          <div className="grid sm:grid-cols-2 gap-5">
                            <div>
                              <CustomInput
                                className={"!bg-bg"}
                                label={"Customer Email *"}
                                placeholder={"itshamzy@gmail.com"}
                                hasIcon
                                Icon={MdEmail}
                                {...getFieldProps("customer.email")}
                              />
                            </div>
                            <div>
                              <CustomInput
                                className={"!bg-bg"}
                                label={"Customer Phone *"}
                                placeholder={"08123456789"}
                                hasIcon
                                Icon={MdCall}
                                {...getFieldProps("customer.phone")}
                              />
                            </div>
                          </div>
                          <div>
                            <CustomInput
                              className={"!bg-bg"}
                              label={"Customer Address *"}
                              placeholder={
                                "ABC Street Opposite XYZ Multipurpose Hall"
                              }
                              hasIcon
                              {...getFieldProps("customer.address")}
                              Icon={FaAddressBook}
                            />
                          </div>{" "}
                        </>
                      ) : null}
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5 border-b pb-7">
                      <div className="">
                        <CustomSelect
                          className={"!bg-bg"}
                          options={status}
                          label={"Transaction Status"}
                        />
                      </div>
                      <CustomInput
                        className={"!bg-bg"}
                        label={"Invoice Date"}
                        id={"product_name"}
                        type="date"
                        {...getFieldProps("invoiceDate")}
                      />
                    </div>
                    <div className="mt-2 border-b pb-6">
                      <label htmlFor="" className="text-sm">
                        Description (optional)
                      </label>
                      <textarea
                        className="w-full border rounded h-28 text-sm placeholder:text-sm p-2 outline-none resize-none !bg-bg"
                        placeholder="Short Description"
                        {...getFieldProps("description")}
                      ></textarea>
                    </div>
                    <div>
                      <CustomButton
                        loading={creating}
                        disableds={creating}
                        type={"submit"}
                        className=" ml-auto mt-2 text-white text-sm flex items-center justify-end gap-2 !px-10 !py-3 rounded-md"
                      >
                        Record Sale
                      </CustomButton>
                    </div>
                  </div>
                </div>
              </form>
              <div className="hidden lg:block w-full ">
                <p className="font-medium opacity-75">
                  Did you made bulk sales? You can save stress by uploading a
                  .xlxs or .csv file in a specific format.
                </p>
                <p className="text-sm opacity-70 mt-7">
                  Streamline data integration by effortlessly importing your CSV
                  file and unlocking a world of possibilities for seamless
                  content management and organization. You may click on the
                  button below to download a sample csv file on how to prepare
                  your own .csv file for your sales for upload.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <CustomButton
                    className={
                      " !bg-[rgba(0,158,170,0.3)] !px-3 font-semibold !text-[rgba(0,158,170,1)] border !border-[rgba(0,158,170,1)]  !py-2.5 rounded-lg"
                    }
                  >
                    Import Sales
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
        </>
      )}
    </AppLayoutNew>
  );
};

export default NewSales;
