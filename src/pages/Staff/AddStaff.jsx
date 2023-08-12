import React, { useEffect, useState } from "react";
import AppLayoutNew from "../../layout/AppLayoutNew";
import CustomInput from "../../components/CustomInput";
import { FaUser } from "react-icons/fa";
import CustomButton from "../../components/Buttons/CustomButton";
import CustomSelect from "../../components/CustomInput/Select";
import { MdCall, MdEmail } from "react-icons/md";
import PageHeader from "../../shared/PageHeader";
import * as Yup from "yup";
import { useFormik } from "formik";
import ValidationError from "../../components/Error/ValidationError";
import { useDispatch, useSelector } from "react-redux";
import { createAccountAction } from "../../store/slices/partner/createAccountSlice";
import { useNavigate } from "react-router-dom";

const AddStaff = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.create_account);
  const [allPermissions, setAllPermissions] = useState([]);
  const navigate = useNavigate();
  const role = [
    { label: "Select One", value: "0" },
    { label: "Regular Staff", value: "1" },
    { label: "Adhoc Staff", value: "2" },
    { label: "Admin", value: "3" },
    { label: "Super Admin", value: "4" },
  ];

  const permissions = [
    { title: "Staff Management", value: true, prefix: "StaffMgt" },
    { title: "Product Management", value: true, prefix: "ProductMgt" },
    { title: "Customer Management", value: true, prefix: "CustomerMgt" },
    { title: "Book Management", value: true, prefix: "BookMgt" },
    { title: "Order Management", value: true, prefix: "OrderMgt" },
  ];

  const options = [
    { label: "Choose One", value: null },
    { label: "Yes", value: 1 },
    { label: "No", value: 0 },
  ];

  const formik = useFormik({
    initialValues: {
      user: {
        firstName: "",
        lastName: "",
        email: "",
        deviceToken: "test_token",
        phone: "",
        password: "",
      },
      accountPermmisions: [],
      canLogin: null,
      canViewTranx: null,
    },
    validationSchema: Yup.object().shape({
      user: Yup.object().shape({
        firstName: Yup.string().required("First name is required"),
        lastName: Yup.string().required("Last name is required"),
        email: Yup.string().required("Email is required"),
        password: Yup.string().required("Password is required"),
        phone: Yup.string().required("Phone Number is required"),
      }),
      canLogin: Yup.boolean().required("This field is required"),
      canViewTranx: Yup.boolean().required("This field is required"),
    }),
    onSubmit(values) {
      const transformedPermissions = allPermissions.map((item) => ({
        permission: item,
      }));
      values.canViewTranx = values.canViewTranx == 1 ? true : false;
      values.canLogin = values.canLogin == 1 ? true : false;
      values.accountPermmisions = transformedPermissions;
      console.log(values);
      dispatch(createAccountAction({ data: values, navigate }));
    },
  });

  const { handleSubmit, errors, touched, getFieldProps, setFieldValue } =
    formik;

  const handleChange = (target) => {
    if (target.checked) {
      setAllPermissions((prev) => [...prev, target.name]);
    } else {
      setAllPermissions((prev) => prev.filter((item) => item !== target.name));
    }
  };

  const handleChangeViewTranx = (value) => setFieldValue("canViewTranx", value);
  const handleChangeLogin = (value) => setFieldValue("canLogin", value);

  return (
    <AppLayoutNew noHeader={true}>
      <div className="mx-4 sm:mx-7 my-10 min-w-[300px]">
        <PageHeader children={"Add Staff"} />
        <div className="grid grid-cols-[1fr,1.4fr] sm:grid-cols-2 lg:hidden max-w-md mb-5  gap-4 mt-8">
          <CustomButton
            className={
              " !bg-[rgba(0,158,170,0.3)] !px-3 font-semibold !text-[rgba(0,158,170,1)] border !border-[rgba(0,158,170,1)]  !py-2.5 rounded-lg"
            }
          >
            Import Staff
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
          <div className="p-6 bg-dimmed_white rounded-xl">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5">
              <div className=" grid gap-6">
                <div>
                  <CustomInput
                    className={"!bg-bg"}
                    label={"Staff First Name *"}
                    placeholder={"Johnson Doe"}
                    {...getFieldProps("user.firstName")}
                  />
                  {touched.user?.firstName && errors.user?.firstName && (
                    <ValidationError msg={errors.user?.firstName} />
                  )}
                </div>
                <div>
                  <CustomInput
                    className={"!bg-bg"}
                    label={"Staff Last Name *"}
                    placeholder={"Johnson Doe 2345"}
                    hasIcon
                    {...getFieldProps("user.lastName")}
                    Icon={FaUser}
                  />
                  {touched.user?.lastName && errors.user?.lastName && (
                    <ValidationError msg={errors.user?.lastName} />
                  )}
                </div>

                <div className="grid sm:grid-cols-2 gap-5 border-b pb-8">
                  <div>
                    <CustomInput
                      className={"!bg-bg"}
                      label={"Staff Email *"}
                      placeholder={"itshamzy@gmail.com"}
                      hasIcon
                      Icon={MdEmail}
                      {...getFieldProps("user.email")}
                    />
                    {touched.user?.email && errors.user?.email && (
                      <ValidationError msg={errors.user?.email} />
                    )}
                  </div>
                  <div>
                    <CustomInput
                      className={"!bg-bg"}
                      label={"Staff Phone *"}
                      placeholder={"08123456789"}
                      hasIcon
                      Icon={MdCall}
                      {...getFieldProps("user.phone")}
                    />
                    {touched.user?.phone && errors.user?.phone && (
                      <ValidationError msg={errors.user?.phone} />
                    )}
                  </div>
                </div>

                <div className="border-b pb-9">
                  <div>
                    <CustomSelect
                      className={"!bg-bg"}
                      options={options}
                      label={"Able To View Transaction"}
                      onChange={handleChangeViewTranx}
                    />
                    {touched.canViewTranx && errors.canViewTranx && (
                      <ValidationError msg={errors.canViewTranx} />
                    )}
                  </div>
                  <div className="mt-5">
                    <CustomSelect
                      className={"!bg-bg "}
                      options={options}
                      label={"Able To Login"}
                      onChange={handleChangeLogin}
                    />
                    {touched.canLogin && errors.canLogin && (
                      <ValidationError msg={errors.canLogin} />
                    )}
                  </div>
                  <div className="mt-5">
                    <CustomInput
                      className={"!bg-bg"}
                      label={"Enter Password*"}
                      placeholder={"****"}
                      type="password"
                      {...getFieldProps("user.password")}
                    />
                    {touched.user?.password && errors.user?.password && (
                      <ValidationError msg={errors.user?.password} />
                    )}
                  </div>
                </div>

                <div className="grid gap-5">
                  <p className="opacity-80 font-semibold mb-2">
                    Assign Permissions
                  </p>
                  <div className="flex flex-col mt-3">
                    <div className="border-y py-2 grid grid-cols-[6fr,1fr,1fr] text-sm">
                      <div className="flex-1"></div>
                      <span>Read</span>
                      <span>Write</span>
                    </div>
                    {permissions.map((perm, idx) => (
                      <div
                        key={idx}
                        className="grid grid-cols-[6fr,1fr,1fr] items-center"
                      >
                        <label className="text-sm py-2" htmlFor={perm.title}>
                          {perm.title}
                        </label>
                        <div className="ml-2">
                          <input
                            type="checkbox"
                            className="accent-primary"
                            id={perm.title}
                            name={perm.prefix + "Read"}
                            onChange={(e) => handleChange(e.target)}
                          />
                        </div>
                        <div className="ml-2">
                          <input
                            type="checkbox"
                            className="accent-primary "
                            id={perm.title}
                            name={perm.prefix + "Write"}
                            onChange={(e) => handleChange(e.target)}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="">
                  <CustomButton
                    loading={loading}
                    disabled={loading}
                    type={"submit"}
                    className=" ml-auto mt-5 text-white text-sm flex items-center justify-end gap-3 !px-10 !py-3 rounded-md"
                  >
                    Create Staff{" "}
                  </CustomButton>
                </div>
              </div>
            </form>
          </div>
          <div className="hidden lg:block w-full ">
            <p className="font-medium opacity-75">
              Got lots of staff to add? You can simply upload a .csv or .xlsx
              file that follows a specific format described on our sample.
            </p>
            <p className="text-sm opacity-70 mt-7">
              Streamline data integration by effortlessly importing your CSV
              file and unlocking a world of possibilities for seamless content
              management and organization. You may click on the button below to
              download a sample csv file on how to prepare your own .csv file
              for your staff for upload.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <CustomButton
                className={
                  " !bg-[rgba(0,158,170,0.3)] !px-3 font-semibold !text-[rgba(0,158,170,1)] border !border-[rgba(0,158,170,1)]  !py-2.5 rounded-lg"
                }
              >
                Import Contact
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

export default AddStaff;
