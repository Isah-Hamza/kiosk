import React from "react";
import AppLayoutNew from "../../layout/AppLayoutNew";
import { BsCloudArrowUp } from "react-icons/bs";
import CustomInput from "../../components/CustomInput";
import { FaUser } from "react-icons/fa";
import { PiCurrencyNgnLight } from "react-icons/pi";
import CustomButton from "../../components/Buttons/CustomButton";
import CustomSelect from "../../components/CustomInput/Select";
import { MdCall, MdEmail } from "react-icons/md";
import PageHeader from "../../shared/PageHeader";
import { useFormik } from "formik";
import * as Yup from "yup";
import { createSupplierAction } from "../../store/slices/partner/createSupplierSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const AddSupplier = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.create_supplier);

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const formik = useFormik({
    initialValues: {
      name: "",
      phoneNumber: "",
      address: "",
    },

    validationSchema: Yup.object({
      name: Yup.string().required("Name required"),
      phoneNumber: Yup.string()
        .required("Phone number is required")
        .matches(phoneRegExp, "Phone number is not valid"),
      address: Yup.string().required("Address is required"),
    }),

    onSubmit: (values) => {
      dispatch(createSupplierAction({ data: values, navigate }));
    },
  });

  const { handleSubmit, getFieldProps, errors, touched, isSubmitting } = formik;

  const gender = [
    { label: "Select One", value: "0" },
    { label: "Male", value: "1" },
    { label: "Female", value: "2" },
  ];

  return (
    <AppLayoutNew noHeader={true}>
      <div className="mx-4 sm:mx-7 my-10 min-w-[300px]">
        <PageHeader children={"Add Supplier"} />
        {/* hidden on large screen */}
        <div className="grid grid-cols-[1fr,1.4fr] sm:grid-cols-2 lg:hidden max-w-md mb-5  gap-4 mt-8">
          <CustomButton
            className={
              " !bg-[rgba(0,158,170,0.3)] !px-3 font-semibold !text-[rgba(0,158,170,1)] border !border-[rgba(0,158,170,1)]  !py-2.5 rounded-lg"
            }
          >
            Import Custs.
          </CustomButton>
          <CustomButton
            className={
              "!bg-transparent border !px-3 !border-[rgba(0,158,170,.4)] !text-[rgba(0,158,170,1)] font-semibold  !py-2.5 rounded-lg"
            }
          >
            Download Sample
          </CustomButton>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-[3.5fr,2fr] gap-8">
            <div className="p-6 bg-dimmed_white rounded-xl">
              <div className="grid grid-cols-1 gap-5">
                <div className=" grid gap-6">
                  <CustomInput
                    className={"!bg-bg"}
                    label={"Enter Full Name *"}
                    placeholder={"Johnson Doe"}
                    {...getFieldProps("name")}
                  />
                  {touched.name && errors.name && (
                    <span className="text-xs text-red-700">{errors.name}</span>
                  )}

                  <CustomInput
                    className={"!bg-bg"}
                    label={"Phone Number *"}
                    placeholder={"08166935765"}
                    {...getFieldProps("phoneNumber")}
                  />
                  {touched.phoneNumber && errors.phoneNumber && (
                    <span className="text-xs text-red-700">
                      {errors.phoneNumber}
                    </span>
                  )}
                  <CustomInput
                    className={"!bg-bg"}
                    label={"Address*"}
                    placeholder={"Enter Address"}
                    {...getFieldProps("address")}
                  />
                  {touched.address && errors.address && (
                    <span className="text-xs text-red-700">
                      {errors.address}
                    </span>
                  )}
                  <div>
                    <CustomButton
                      type="submit"
                      className=" ml-auto mt-2 text-white text-sm flex items-center justify-end gap-3 !px-10 !py-3 rounded-md"
                    >
                      {loading ? "Creating supplier...." : "Create Supplier"}
                    </CustomButton>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block w-full ">
              <p className="font-medium opacity-75">
                Got lots of customers to add? You can simply upload a .csv or
                .xlsx file that follows a specific format described on our
                sample.
              </p>
              <p className="text-sm opacity-70 mt-7">
                Streamline data integration by effortlessly importing your CSV
                file and unlocking a world of possibilities for seamless content
                management and organization. You may click on the button below
                to download a sample csv file on how to prepare your own .csv
                file for your customers for upload.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <CustomButton
                  className={
                    " !bg-[rgba(0,158,170,0.3)] !px-3 font-semibold !text-[rgba(0,158,170,1)] border !border-[rgba(0,158,170,1)]  !py-2.5 rounded-lg"
                  }
                >
                  Import Customers
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
        </form>
      </div>
    </AppLayoutNew>
  );
};

export default AddSupplier;
