import React, { useState } from "react";
import AuthPagesLayout from "../../layout/AuthPagesLayout";

import { MyInput as CustomInput } from "../../components/CustomInput/MyInput";
import CustomButton from "../../components/Buttons/CustomButton";
import OTPInput from "../../components/CustomInput/OTPInput";
import CustomSelect from "../../components/CustomInput/Select";
import { Link, useNavigate } from "react-router-dom";
import ValidationError from "../../components/Error/ValidationError";
import { useSelector, useDispatch } from "react-redux";
import { IoMdCheckmark } from "react-icons/io";
import { useFormik } from "formik";
import * as Yup from "yup";
import { signupAction } from "../../store/slices/user/signupSlice";

const Register = () => {
  const { loading, data } = useSelector((state) => state.signup);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const steps = [
    {
      name: "Personal Information",
      id: 0,
    },
    {
      name: "Enter OTP",
      id: 1,
    },
    {
      name: "Business Information",
      id: 2,
    },
  ];
  const [currStep, setCurrStep] = useState(1);

  const countries = [
    { label: "Nigeria", value: 1 },
    { label: "Ghana", value: 2 },
  ];
  const region = [
    { label: "Lagos", value: 1 },
    { label: "Abuja", value: 2 },
  ];

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      firstName: Yup.string().required("First Name is required"),
      lastName: Yup.string().required("Last Name is required"),
      phone: Yup.string().required("Phone Number is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit(values) {
      values.deviceToken = "test_token";
      dispatch(signupAction({ data: values, navigate }));
    },
  });

  const { errors, touched, handleSubmit, getFieldProps } = formik;

  return (
    <div>
      <AuthPagesLayout>
        <div className="max-w-[500px] w-full mt-16 my-16 sm:my-10  flex flex-col self-start px-5">
          <div className="text-center">
            <p className="font-semibold text-3xl">Sign up</p>
            <p className="text-sm text-secondary-brown">
              Already have an account?{" "}
              <Link to={"/login"} className="text-primary font-medium">
                Login
              </Link>
            </p>
          </div>

          <div className="mt-12 grid grid-cols-3 justify-between border-primary rounded-md overflow-hidden">
            {steps.map((step, idx) => (
              <button
                key={idx}
                onClick={() => setCurrStep(idx + 1)}
                className={`relative py-3 text-sm flex flex-col items-center gap-2 text-gray-500
              ${idx != 0 && "border-lt border-primary"}
              ${currStep - 1 >= step.id && "font-bold  !text-primary"}`}
              >
                {idx == 2 ? null : (
                  <div
                    className={`left-1/2 absolute top-[26px] w-full h-0.5 ${
                      currStep - 1 > step.id ? "bg-primary" : "bg-[gainsboro]"
                    }`}
                  ></div>
                )}
                <p
                  className={`relative z-10 bg-white w-8 h-8 rounded-full grid place-content-center border ${
                    currStep === idx + 1 && "border-2 border-primary"
                  } ${currStep - 1 > step.id && "!bg-primary"}`}
                >
                  {currStep - 1 > step.id ? (
                    <IoMdCheckmark size={19} color="white" />
                  ) : (
                    idx + 1
                  )}
                </p>
                <p className="text-sm">{step.name}</p>
              </button>
            ))}
          </div>

          {currStep === 1 ? (
            <div className="w-full mt-14">
              <form onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-5 gap-y-6 !text-black">
                  <div>
                    <CustomInput
                      className="!h-[50px]"
                      type={"text"}
                      placeholder={"First Name"}
                      id={"first_name"}
                      {...getFieldProps("firstName")}
                    />
                    {touched.firstName && errors.firstName && (
                      <ValidationError msg={errors.firstName} />
                    )}
                  </div>
                  <div>
                    <CustomInput
                      className="!h-[50px]"
                      type={"text"}
                      placeholder="Last Name"
                      id={"last_name"}
                      {...getFieldProps("lastName")}
                    />{" "}
                    {touched.lastName && errors.lastName && (
                      <ValidationError msg={errors.lastName} />
                    )}
                  </div>
                  <div className="sm:col-span-2">
                    <CustomInput
                      className="!h-[50px]"
                      type={"text"}
                      placeholder={"Email"}
                      id={"email"}
                      {...getFieldProps("email")}
                    />{" "}
                    {touched.email && errors.email && (
                      <ValidationError msg={errors.email} />
                    )}
                  </div>
                  <div>
                    <CustomInput
                      placeholder={"Phone Number"}
                      id={"phone"}
                      type={"text"}
                      className="transparent-bg !h-[50px]"
                      {...getFieldProps("phone")}
                    />{" "}
                    {touched.phone && errors.phone && (
                      <ValidationError msg={errors.phone} />
                    )}
                  </div>
                  <div>
                    <CustomInput
                      placeholder={"Password"}
                      id={"password"}
                      type={"password"}
                      className="transparent-bg !h-[50px]"
                      {...getFieldProps("password")}
                    />{" "}
                    {touched.password && errors.password && (
                      <ValidationError msg={errors.password} />
                    )}
                  </div>
                </div>
                <div className="ml-auto w-full sm:w-fit mt-10">
                  <CustomButton
                    // clickHandler={() => setCurrStep(2)}
                    className={"w-full"}
                    children={"Save and Next"}
                    type={"submit"}
                    loading={loading}
                    disabled={loading}
                  />
                </div>
              </form>
            </div>
          ) : null}

          {currStep === 2 ? (
            <div className="flex flex-col items-center w-full mt-16 otp">
              <p className="mb-8 mx-auto max-w-sm text-center">
                Please enter The OTP sent to your registered email or phone
                number to move to the next step.
              </p>
              <OTPInput />{" "}
              <div className=" mt-12 flex">
                <CustomButton
                  clickHandler={() => setCurrStep(3)}
                  className={"w-fit"}
                  children={"Confirm and Next"}
                />
              </div>
            </div>
          ) : null}

          {currStep === 3 ? (
            <div className="w-full mt-14">
              <div className="grid sm:grid-cols-2 gap-4">
                <CustomInput
                  type={"text"}
                  placeholder={"Company Name"}
                  id={"company_name"}
                />
                <CustomInput type={"text"} placeholder="CAC" id={"cac"} />{" "}
                <div className="sm:col-span-2">
                  <CustomInput
                    type={"text"}
                    placeholder={"Company Address"}
                    id={"company_address"}
                  />{" "}
                </div>
                <CustomSelect options={countries} allowFirstOption />
                <CustomSelect options={region} allowFirstOption />
              </div>
              <div className=" mt-10 flex justify-end">
                <CustomButton
                  className={"w-full sm:w-fit "}
                  clickHandler={() => navigate("/login")}
                  children={"Create Account"}
                />
              </div>
            </div>
          ) : null}
        </div>
      </AuthPagesLayout>
    </div>
  );
};

export default Register;
