import React, { useEffect, useState } from "react";
import AppLayoutNew from "../../layout/AppLayoutNew";
import { BsCloudArrowUp, BsPatchCheckFill } from "react-icons/bs";
import CustomInput from "../../components/CustomInput";
import { FaAddressBook, FaLuggageCart, FaUser } from "react-icons/fa";
import { PiCurrencyNgnLight } from "react-icons/pi";
import { GrCloudComputer } from "react-icons/gr";
import CustomButton from "../../components/Buttons/CustomButton";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { createProductAction } from "../../store/slices/product/createProductSlice";
import { useNavigate } from "react-router-dom";
import ValidationError from "../../components/Error/ValidationError";
import PageHeader from "../../shared/PageHeader";
import CustomSelect from "../../components/CustomInput/Select";
import { MdCall, MdEmail } from "react-icons/md";
import customToast from "../../components/Toast/toastify";
import { getSupplierAction } from "../../store/slices/product/getSupplierSlice";

const CreateProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showSupplierForm, setShowSupplierForm] = useState(false);
  const { loading } = useSelector((state) => state.create_product);
  const { data } = useSelector((state) => state.get_supplier);

  const [type, setType] = useState(-1);
  const [suppliers, setSuppliers] = useState(data);
  const formik = useFormik({
    initialValues: {
      barCode: "test_code",
      name: "",
      brand: "",
      description: "",
      sellingPrice: "",
      costPrice: "",
      tax: "",
      discount: "",
      unit: "",
      image: "",
      inventoryType: 1,
      stock: "",
      supplierId: 0,
      supplier: {
        name: "",
        phone: "",
        email: "",
        address: "",
      },
    },
    validationSchema: Yup.object().shape({
      inventoryType: Yup.number().required("Please select product or service"),
      barCode: Yup.string().required("Barcode is required"),
      name: Yup.string().required("Name is required"),
      brand: Yup.string().required("Brand is required"),
      image: Yup.string(),
      description: Yup.string(),
      supplierId: Yup.number(),
      sellingPrice: Yup.number()
        .typeError("Enter a valid number")
        .required("This field is required"),
      costPrice: Yup.number()
        .typeError("Enter a valid number")
        .required("Cost Price is required"),
      tax: Yup.number().typeError("Enter a valid number"),
      discount: Yup.number().typeError("Enter a valid number"),
      unit: Yup.number().typeError("Enter a valid number"),
      stock: Yup.number().typeError("Enter a valid number"),
    }),
    onSubmit(values) {
      values.costPrice = Number(values.costPrice);
      values.discount = Number(values.discount);
      values.tax = Number(values.tax);
      values.sellingPrice = Number(values.sellingPrice);
      values.stock = Number(values.stock);
      values.unit = Number(values.unit);
      dispatch(createProductAction({ data: [values], navigate }));
    },
  });

  const toggleShowSupplierForm = () => {
    setShowSupplierForm(!showSupplierForm);
  };

  const { errors, setFieldValue, getFieldProps, touched, handleSubmit } =
    formik;

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

  return (
    <AppLayoutNew noHeader={true}>
      <div className="mx-4 lg:mx-7 my-10 min-w-[300px]">
        {/* <p className="text-2xl font-semibold opacity-80 mb-7">Create Product</p> */}
        <PageHeader children={"Create Inventory"} />
        <div className="grid grid-cols-[1fr,1.4fr] sm:grid-cols-2 lg:hidden max-w-md mb-5  gap-4 mt-8">
          <CustomButton
            className={
              "!whitespace-nowrap !bg-[rgba(0,158,170,0.3)] !px-3 font-semibold !text-[rgba(0,158,170,1)] border !border-[rgba(0,158,170,1)]  !py-2.5 rounded-lg"
            }
          >
            Import Products
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
          <div className="p-4 sm:p-6 !py-6 bg-dimmed_white rounded-xl">
            <div className="border-b pb-7">
              <p className="font-semibold">Inventory Information</p>
              <p className="text-sm opacity-70">
                All you need is a name and a price to create an inventory
              </p>
            </div>
            <form onSubmit={handleSubmit} className="mt-7 grid gap-5">
              <div className="">
                <label className="text-sm mb-2" htmlFor="">
                  Select Inventory Type
                </label>
                <div className="grid grid-cols-2 gap-5 overflow-hidden text-center ">
                  <div
                    onClick={() => {
                      setFieldValue("inventoryType", 1);
                      setType(0);
                    }}
                    className={`${
                      type === 0 && " !border-primary"
                    } cursor-pointer flex flex-col items-center gap-4 py-5 pt-7 !bg-bg rounded border relative`}
                  >
                    {type === 0 ? (
                      <BsPatchCheckFill className="absolute top-3 left-3 text-primary" />
                    ) : null}
                    <FaLuggageCart size={30} className="-mt-1" />
                    <p className="max-w-[150px] text-sm -mt-2">Product</p>
                  </div>
                  <div
                    onClick={() => {
                      setFieldValue("inventoryType", 2);
                      setType(1);
                    }}
                    className={`${
                      type === 1 && " !border-primary"
                    } cursor-pointer flex flex-col items-center py-5 gap-3 border !bg-bg rounded relative`}
                  >
                    {type === 1 ? (
                      <BsPatchCheckFill className="absolute top-3 left-3 text-primary" />
                    ) : null}
                    <GrCloudComputer size={30} />
                    <p className="max-w-[150px] text-sm">Service</p>
                  </div>
                </div>
                {touched.inventoryType && errors.inventoryType && (
                  <ValidationError msg={errors.inventoryType} />
                )}
              </div>
              <div>
                <CustomInput
                  className={"!bg-bg"}
                  label={"Inventory Name"}
                  id={"product_name"}
                  {...getFieldProps("name")}
                />
                {touched.name && errors.name && (
                  <ValidationError msg={errors.name} />
                )}
              </div>
              <div>
                <CustomInput
                  className={"!bg-bg"}
                  label={"Brand Name"}
                  id={"brand_name"}
                  {...getFieldProps("brand")}
                />
                {touched.brand && errors.brand && (
                  <ValidationError msg={errors.brand} />
                )}
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label htmlFor="" className="text-sm">
                    Cost Price
                  </label>
                  <div className="flex-1 relative">
                    <div className="span absolute left-3 top-4 text-lg">
                      <PiCurrencyNgnLight />{" "}
                    </div>
                    <input
                      type="text"
                      className="!bg-bg w-full rounded border outline-none h-full px-5 pl-9 py-[14px] text-sm placeholder:text-sm"
                      {...getFieldProps("costPrice")}
                    />
                  </div>
                  {touched.costPrice && errors.costPrice && (
                    <ValidationError msg={errors.costPrice} />
                  )}
                </div>
                <div>
                  <label htmlFor="" className="text-sm">
                    Selling Price
                  </label>
                  <div className="flex-1 relative">
                    <div className="span absolute left-3 top-4 text-lg">
                      <PiCurrencyNgnLight />{" "}
                    </div>
                    <input
                      type="text"
                      className="!bg-bg w-full rounded border outline-none h-full px-5 pl-9 py-[14px] text-sm placeholder:text-sm"
                      {...getFieldProps("sellingPrice")}
                    />
                  </div>
                  {touched.sellingPrice && errors.sellingPrice && (
                    <ValidationError msg={errors.sellingPrice} />
                  )}
                </div>
              </div>
              <div className="">
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
                    {...getFieldProps("discount")}
                  />
                </div>
                {touched.discount && errors.discount && (
                  <ValidationError msg={errors.discount} />
                )}
              </div>
              <div className="">
                <label htmlFor="" className="text-sm">
                  Tax (if applicable)
                </label>
                <div className="flex-1 relative">
                  <div className="span absolute left-3 top-4 text-lg">
                    <PiCurrencyNgnLight />{" "}
                  </div>
                  <input
                    type="text"
                    className="!bg-bg w-full rounded border outline-none h-full px-5 pl-8 py-[14px] text-sm placeholder:text-sm"
                    {...getFieldProps("tax")}
                  />
                </div>
                {touched.tax && errors.tax && (
                  <ValidationError msg={errors.tax} />
                )}
              </div>
              {formik.values.inventoryType == 1 ? (
                <div className="grid grid-cols-2 gap-5 ">
                  <div>
                    <CustomInput
                      className={"!bg-bg"}
                      label={"Units"}
                      id={"units"}
                      {...getFieldProps("unit")}
                    />
                    {touched.unit && errors.unit && (
                      <ValidationError msg={errors.unit} />
                    )}
                  </div>
                  <div>
                    <CustomInput
                      className={"!bg-bg"}
                      label={"Stock Available"}
                      id={"stock"}
                      {...getFieldProps("stock")}
                    />
                    {touched.stock && errors.stock && (
                      <ValidationError msg={errors.stock} />
                    )}
                  </div>
                </div>
              ) : null}
              <div className=" border-b pb-10 ">
                <CustomInput
                  className={"!bg-bg"}
                  label={"Image URL"}
                  id={"img_url"}
                  {...getFieldProps("image")}
                />
                {touched.image && errors.image && (
                  <ValidationError msg={errors.image} />
                )}
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
                        {touched.supplier?.email && errors.supplier?.email && (
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
                        {touched.supplier?.phone && errors.supplier?.phone && (
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
              <div className="mt-2">
                <label htmlFor="" className="text-sm">
                  Description (optional)
                </label>
                <textarea
                  className="w-full border rounded h-28 text-sm placeholder:text-sm p-2 outline-none resize-none !bg-bg"
                  placeholder="Short Description"
                  {...getFieldProps("description")}
                ></textarea>
                {touched.description && errors.description && (
                  <ValidationError msg={errors.description} />
                )}
              </div>
              <div>
                <CustomButton
                  loading={loading}
                  disabled={loading}
                  type={"submit"}
                  className="mt-3 w-full justify-center sm:w-[unset] ml-auto text-white text-sm flex items-center sm:justify-end gap-2 !px-10 !py-3 rounded-md"
                >
                  <BsCloudArrowUp size={20} /> Save Item
                </CustomButton>
              </div>
            </form>
          </div>
          <div className="hidden lg:block w-full ">
            <p className="font-medium opacity-75">
              You may also import your inventory in bulk by uploading a .xlxs
              file in a specific format
            </p>
            <p className="text-sm opacity-70 mt-6">
              Streamline data integration by effortlessly importing your CSV
              file and unlocking a world of possibilities for seamless content
              management and organization. You may click on the button below to
              download a sample csv file on how to prepare your own .csv file
              for your inventory for upload.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <CustomButton
                className={
                  " !bg-[rgba(0,158,170,0.3)] !px-3 font-semibold !text-[rgba(0,158,170,1)] border !border-[rgba(0,158,170,1)]  !py-2.5 rounded-lg"
                }
              >
                Import Inventory
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

export default CreateProduct;
