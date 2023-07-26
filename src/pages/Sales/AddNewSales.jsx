import React, { useEffect, useState } from "react";
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
  const [addMore, setAddMore] = useState(false);
  const [setselectFromStore, setSetselectFromStore] = useState(false);

  const [shop, setShop] = useState([
    {
      name: "Tomatoes",
      stock_available: 2,
      price: "200",
    },
    {
      name: "Candle",
      stock_available: 0,
      price: "500",
    },
    {
      name: "Onions",
      stock_available: 12,
      price: "100",
    },
  ]);

  let total_sum = 0;

  const customers = [
    { label: "John Smith 2345", value: "1" },
    { label: "Ridiculous Customer", value: "1" },
    { label: "Testing Customer", value: "2" },
    { label: "Digital Customer", value: "3" },
  ];

  const payment_type = [
    { label: "Select One", value: "0" },
    { label: "Cash", value: "1" },
    { label: "Transfer", value: "2" },
    { label: "Debit Card", value: "3" },
  ];

  const payment_status = [
    { label: "Select One", value: "0" },
    { label: "Fully Paid", value: "1" },
    { label: "Partially Paid", value: "2" },
    { label: "Unpaid", value: "3" },
  ];

  const sales_medium = [
    { label: "Select One", value: "0" },
    { label: "Social Media", value: "1" },
    { label: "Physical Store", value: "2" },
    { label: "Affiliate Marketing", value: "3" },
    { label: "Partnership", value: "4" },
    { label: "Others", value: "5" },
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

    setShop(
      shop.map((item) => {
        if (item.name === deletedItem.name) {
          return {
            ...item,
            stock_available: item.stock_available + deletedItem.qty,
          };
        } else return item;
      })
    );
  };

  const handleAdd = (item, idx, qtyToBuy) => {
    const newItem = {
      name: item.name,
      amount: item.price,
      qty: qtyToBuy,
      total_amount: Number(item.price) * Number(qtyToBuy),
    };

    setRecords((prev) => [...prev, newItem]);

    setShop(
      shop.map((item) => {
        if (item.name === newItem.name) {
          return {
            ...item,
            stock_available: item.stock_available - newItem.qty,
          };
        } else return item;
      })
    );
  };

  useEffect(() => {
    records.map((item) => {
      total_sum += Number(item.total_amount);
    });
  }, [records]);

  return (
    <AppLayoutNew noHeader={true}>
      <div className="mx-4 lg:mx-7 my-10 min-w-[300px]">
        <PageHeader title={"Record New Sales"} />
        <div className="grid grid-cols-[1fr,1.4fr] sm:grid-cols-2 lg:hidden max-w-md mb-5  gap-4 mt-8">
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
        <div className="grid lg:grid-cols-[3.5fr,2fr] gap-8">
          <div className=" px-4 py-6 !sm:p-6 bg-dimmed_white rounded-xl">
            <div className="border-b pb-5">
              <p className="text-sm font-medium opacity-70">Total Sum</p>
              <p className="font-bold text-2xl text-primary">
                ₦{total_sum.toFixed(2)}
              </p>
            </div>
            <div className="grid grid-cols-1 gap-5">
              <div className=" pt-3 bg-dimmed_white rounded-xl min-h-[200px]">
                <p className="">Sold Products</p>
                <div className="overflow-x-hidden">
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
                          <td className="py-2 text-xs pl-3">{item.name}</td>
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
                              <td>
                                <input
                                  onChange={(e) =>
                                    setNewRecord((prev) => ({
                                      ...prev,
                                      name: e.target.value,
                                    }))
                                  }
                                  className="w-[90%] border outline-none text-xs px-2 py-1"
                                />
                              </td>
                              <td>
                                <input
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
                                    setRecords((prev) => [...prev, newRecord]);
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
                <div className="grid grid-cols-[1fr,1.4fr] sm:grid-cols-2 gap-4 mt-8">
                  <CustomButton
                    clickHandler={() => setAddMore(!addMore)}
                    className={
                      " !bg-[rgba(0,158,170,0.3)] !px-3 font-semibold !text-[rgba(0,158,170,1)] border !border-[rgba(0,158,170,1)]  !py-1.5 rounded-lg"
                    }
                  >
                    Add More
                  </CustomButton>
                  <CustomButton
                    clickHandler={() => setSetselectFromStore(true)}
                    className={
                      "whitespace-nowrap !bg-transparent border !px-3 !border-[rgba(0,158,170,.4)] !text-[rgba(0,158,170,1)] font-semibold  !py-1.5 rounded-lg"
                    }
                  >
                    Select From Stock
                  </CustomButton>
                </div>
              </div>
              <div className="mt-7 grid gap-5">
                <CustomSelect
                  className={"!bg-bg"}
                  options={customers}
                  label={"Find / Select Customer"}
                />
                <div className="grid sm:grid-cols-2 gap-5 border-b pb-7">
                  <CustomSelect
                    className={"!bg-bg"}
                    options={payment_type}
                    label={"Select Payment Type"}
                  />
                  <CustomInput
                    className={"!bg-bg"}
                    label={"Sales Date"}
                    id={"product_name"}
                    type="date"
                  />
                </div>
                <div className=" border-b pb-6">
                  <CustomSelect
                    className={"!bg-bg"}
                    options={payment_status}
                    label={"Payment Status"}
                  />
                </div>
                <div className=" border-b pb-6 -mt-1">
                  <label htmlFor="" className="text-sm">
                    Discounted Price (if applicable)
                  </label>
                  <div className="flex-1 relative">
                    <div className="span absolute left-3 top-4 text-lg">
                      <PiCurrencyNgnLight />{" "}
                    </div>
                    <input
                      type="text"
                      className="!bg-bg w-full rounded border outline-none h-full px-5 pl-8 py-[14px] text-sm placeholder:text-sm"
                    />
                  </div>
                </div>
                <div className=" border-b pb-6">
                  <CustomSelect
                    className={"!bg-bg"}
                    options={sales_medium}
                    label={"Sales Medium / Channel"}
                  />
                </div>

                <div>
                  <CustomButton className=" ml-auto mt-2 text-white text-sm flex items-center justify-end gap-2 !px-10 !py-3 rounded-md">
                    Record Sale
                  </CustomButton>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block w-full ">
            <p className="font-medium opacity-75">
              Did you made bulk sales? You can save stress by uploading a .xlxs
              or .csv file in a specific format.
            </p>
            <p className="text-sm opacity-70 mt-7">
              Streamline data integration by effortlessly importing your CSV
              file and unlocking a world of possibilities for seamless content
              management and organization. You may click on the button below to
              download a sample csv file on how to prepare your own .csv file
              for your sales for upload.
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
      {setselectFromStore ? (
        <div className=" fixed inset-0 bg-black/60 overflow-hidden grid place-content-center z-[10001]">
          <div className="p-5 min-h-[200px] bg-white rounded-xl max-w-[90vw] w-[500px]">
            <div className="flex justify-between items-center mb-2">
              <p className="font-semibold text-primary capitalize ">
                From Your Shop
              </p>
              <button onClick={() => setSetselectFromStore(false)}>
                <FiPlus className="rotate-45" size={22} />
              </button>
            </div>
            {shop.length ? (
              <input
                type="text"
                name="search"
                id="search"
                className="w-full rounded-md border outline-none px-3 py-2 text-sm mt-3"
                placeholder="Search product by name"
              />
            ) : null}
            <div className="overflow-x-hidden">
              <table className="text-sm w-full table-auto border-separate border-spacing-y-3 ">
                <thead className="bg-[#f3f4f5] shadow">
                  <tr className="!text-left !opacity-70 !font-semibold bg-[#f3f4f5]">
                    <th className="text-xs pl-3 w-[35%] py-2 !font-semibold">
                      Name
                    </th>
                    <th className="text-xs pl-3 w-[25%] py-2 !font-semibold whitespace-nowrap">
                      Stock Rem.
                    </th>
                    <th className="text-xs pl-3 w-[25%] py-2 !font-semibold">
                      Price <span className=" sm:inline hidden"></span>
                    </th>
                    <th className="text-xs pl-3 w-[25%] py-2 !font-semibold whitespace-nowrap">
                      Qty Sold
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {shop.map((item, idx) => (
                    <Row key={idx} id={idx} item={item} handleAdd={handleAdd} />
                  ))}
                </tbody>
              </table>
              {shop.length <= 0 && !addMore ? (
                <div className="pl-3 opacity-80 text-sm font-medium">
                  {" "}
                  Sorry. You don't have product in your shop.
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </AppLayoutNew>
  );
};

export default NewSales;
