import React, { useContext } from "react";
import "../../index.css";
import "../../styles/login.css";

import CustomInput from "../../components/CustomInput";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import CustomButton from "../../components/Buttons/CustomButton";
import { Link, useNavigate } from "react-router-dom";
import AuthPagesLayout from "../../layout/AuthPagesLayout";

import logo from "../../assets/images/logo.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import ValidationError from "../../components/Error/ValidationError";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../store/slices/user/loginSlice";
import { PartnerContext } from "../../App";
import { FaCodepen } from "react-icons/fa";

const ResetPassword = () => {
  const { loading } = useSelector((state) => state.authenticate);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      code: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      code: Yup.string().required("Enter the OTP sent to you"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit(values) {
      dispatch(loginAction({ data: values, navigate }));
    },
  });

  const { handleSubmit, getFieldProps, errors, touched } = formik;

  return (
    <AuthPagesLayout>
      <div className="form-container max-w-[90%] sm:max-w-[360px]">

        <p className="text-center font-bold text-xl text-[#41010b] mb-3">
          Reset Password
        </p>
        <p className="text-center text-[13px] opacity-80">
          Please enter the OTP sent to you and a super-secured but easy to
          remember password.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="otp">
            <CustomInput
              className={"!bg-[#e9e9eb] !h-[50px]"}
              placeholder={"Enter OTP Code"}
              hasIcon
              Icon={FaCodepen}
              {...getFieldProps("code")}
            />
            {touched.code && touched.code && (
              <ValidationError msg={errors.code} />
            )}
          </div>
          <div className="password">
            <CustomInput
              className={"!bg-[#e9e9eb] !h-[50px]"}
              placeholder={"Enter New Password"}
              type="password"
              Icon={
                <MdOutlineMarkEmailUnread
                  size={17}
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
                />
              }
              {...getFieldProps("password")}
            />
            {touched.password && touched.password && (
              <ValidationError msg={errors.password} />
            )}
          </div>
          <div className="flex items-center justify-between flex-row-reverse">
            <p className="forgot-password">Forgot Password?</p>
            <div className="flex items-center gap-1">
              <input
                name="remember"
                id="remember"
                type={"checkbox"}
                className="accent-primary"
              />
              <label htmlFor="remember">Remember Me</label>
            </div>
          </div>
          <div className="form-footer">
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
          Don't have an account ?
          <span>
            <Link to={"/register"} className="font-medium">
              Sign Up
            </Link>
          </span>
        </p>
      </div>
    </AuthPagesLayout>
  );
};

export default ResetPassword;
