import React, { useEffect, useState } from "react";
import CustomButton from "../../components/Buttons/CustomButton";
import CustomInput from "../../components/CustomInput";
import { FiPlus } from "react-icons/fi";
import ValidationError from "../../components/Error/ValidationError";
import { FaAddressBook, FaUser } from "react-icons/fa";
import { MdCall, MdEmail } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { udpateStockAction } from "../../store/slices/product/updateStockSlice";
import CustomSelect from "../../components/CustomInput/Select";
import { getSupplierAction } from "../../store/slices/product/getSupplierSlice";

const UpdateStock = ({ setUpdateStock, id, stock }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showSupplierForm, setShowSupplierForm] = useState(false);
  const { data } = useSelector((state) => state.get_supplier);
  const { loading } = useSelector((state) => state.update_stock);

  const [suppliers, setSuppliers] = useState(data);

  const formik = useFormik({
    initialValues: {
      unit: 0,
      note: "",
      supplierId: 0,
      supplier: {
        name: "",
        phone: "",
        email: "",
        address: "",
      },
    },
    validationSchema: Yup.object().shape({
      unit: Yup.number()
        .typeError("Enter a valid number")
        .required("This field is required"),
      note: Yup.string(),
      supplierId: Yup.number(),
    }),
    onSubmit(values) {
      const valid = validateSupplier(values);
      if (valid == false) return;
      values.unit = Number(values.unit);
      dispatch(
        udpateStockAction({
          product_id: id,
          payload: values,
          dispatch,
          setUpdateStock,
        })
      );
    },
  });

  const {
    handleSubmit,
    touched,
    errors,
    getFieldProps,
    values,
    setFieldValue,
  } = formik;

  const handleChangeSupplier = (value) =>
    setFieldValue("supplierId", Number(value));

  const toggleShowSupplierForm = () => {
    setShowSupplierForm(!showSupplierForm);
  };

  function validateSupplier(values) {
    if (values.supplierId == 0) {
      if (
        !values.supplier.email ||
        !values.supplier.name ||
        !values.supplier.address ||
        !values.supplier.phone
      ) {
        customToast(
          "Either select a supplier or register a new one with valid details",
          true
        );
        return false;
      }
    } else {
      values.supplier = {};
      return true;
    }
  }

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
    <div className="fixed inset-0 bg-black/60 overflow-hidden grid place-content-center z-[10001]">
      <form
        onSubmit={handleSubmit}
        className="min-h-[300px] overflow-auto bg-white rounded-xl w-[450px] p-7 py-5"
      >
        <div className="flex justify-between items-center">
          <p className="text-lg font-semibold text-primary capitalize ">
            Update Stock
          </p>
          <button onClick={() => setUpdateStock(false)}>
            <FiPlus className="rotate-45" size={22} />
          </button>
        </div>
        <p className="text-sm mt-3">
          Available Stock: <span className="font-medium">{stock}</span>
        </p>
        <div className="grid grid-cols-2 gap-5 mt-5">
          <CustomInput
            {...getFieldProps("unit")}
            className={"!bg-bg !py-3"}
            label={"Units"}
            id={"unit"}
          />{" "}
          <CustomInput
            className={"!bg-bg !py-3"}
            label={"Total Stock"}
            id={"total"}
            value={Number(stock) + Number(values.unit)}
            readOnly
          />
        </div>
        <div className="flex flex-col gap-5 mt-6">
          <div className="relative ">
            <button
              type="button"
              onClick={toggleShowSupplierForm}
              className="z-10 cursor-pointer absolute right-1 -top-.5 text-sm text-primary font-semibold"
            >
              {showSupplierForm
                ? "Close Supplier Form"
                : "Register New Supplier"}
            </button>
            <CustomSelect
              emptyMsg={"No saved supplier yet. Create one"}
              options={suppliers}
              label={"Select Supplier"}
              className={"!bg-bg"}
              onChange={handleChangeSupplier}
            />
          </div>
          {showSupplierForm ? (
            <>
              <div>
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
                  placeholder={"ABC Street Opposite XYZ Multipurpose Hall"}
                  hasIcon
                  {...getFieldProps("supplier.address")}
                  Icon={FaAddressBook}
                />
                {touched.supplier?.address && errors.supplier?.address && (
                  <ValidationError msg={errors.supplier?.address} />
                )}
              </div>{" "}
            </>
          ) : null}
        </div>

        <div className="col-span-2 mt-5">
          <label htmlFor="" className="text-sm">
            Note
          </label>
          <textarea
            {...getFieldProps("note")}
            className="w-full border rounded h-20 text-sm placeholder:text-sm p-2 outline-none resize-none !bg-bg"
          ></textarea>
        </div>
        <CustomButton
          loading={loading}
          disabled={loading}
          type={"submit"}
          className={"w-full mt-5 border !px-7font-semibold  !py-3 rounded-md"}
        >
          Update Product Stock
        </CustomButton>
      </form>
    </div>
  );
};

export default UpdateStock;
