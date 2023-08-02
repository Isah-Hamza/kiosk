import React from "react";
import "../../index.css";
import "../../styles/login.css";

import CustomInput from "../../components/CustomInput";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import CustomButton from "../../components/Buttons/CustomButton";
import { Link, useNavigate } from "react-router-dom";
import AuthPagesLayout from "../../layout/AuthPagesLayout";
import { useFormik } from "formik";
import * as Yup from "yup";
import ValidationError from "../../components/Error/ValidationError";
import { useDispatch, useSelector } from "react-redux";
import { getOTPAction } from "../../store/slices/user/getOTPSlice";

const RequestOTP = () => {
  const { loading } = useSelector((state) => state.get_otp);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      phone: "",
    },
    validationSchema: Yup.object().shape({
      phone: Yup.string().required("Phone Number is required"),
    }),
    onSubmit(values) {
      dispatch(getOTPAction({ data: values, navigate }));
    },
  });

  const { handleSubmit, getFieldProps, errors, touched } = formik;

  return (
    <AuthPagesLayout>
      <div className="form-container max-w-[90%] sm:max-w-[360px]">
        <p className="text-center font-bold text-xl text-[#41010b] mb-3">
          Request Password Reset Code
        </p>
        <p className="text-center text-[13px] opacity-80">
          Please enter the phone number you supplied while creating this
          account. We will send you an OTP to continue this process. The code
          expires <b>5mins</b> after receipt.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="phone">
            <CustomInput
              label={"Phone Number"}
              className={"!bg-[#e9e9eb] !h-[50px]"}
              placeholder={"07012345678"}
              Icon={
                <MdOutlineMarkEmailUnread
                  size={17}
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
                />
              }
              {...getFieldProps("phone")}
            />
            {touched.phone && touched.phone && (
              <ValidationError msg={errors.phone} />
            )}
          </div>
          <div className="mt-5">
            <CustomButton
              type={"submit"}
              className={"bg-[#41010b] !w-full !py-4"}
              disabled={loading}
              loading={loading}
            >
              {loading ? "Please wait..." : "Send Me Code"}
            </CustomButton>
          </div>
        </form>
        <p className="no-account whitespace-nowrap mb-1">
          Don't have an account ?{" "}
          <span>
            {" "}
            <Link to={"/register"} className="font-medium">
              Sign Up
            </Link>{" "}
          </span>
        </p>
      </div>
    </AuthPagesLayout>
  );
};

export default RequestOTP;
