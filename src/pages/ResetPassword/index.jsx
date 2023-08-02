import React from "react";
import CustomInput from "../../components/CustomInput";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import CustomButton from "../../components/Buttons/CustomButton";
import { Link, useNavigate } from "react-router-dom";
import AuthPagesLayout from "../../layout/AuthPagesLayout";

import { useFormik } from "formik";
import * as Yup from "yup";
import ValidationError from "../../components/Error/ValidationError";
import { useDispatch, useSelector } from "react-redux";
import { resetPasswordAction } from "../../store/slices/user/resetPasswordSlice";
import { FaCodepen } from "react-icons/fa";
import { GET_STORAGE_ITEM } from "../../config/storage";

import "../../index.css";
import "../../styles/login.css";

const ResetPassword = () => {
  const { loading } = useSelector((state) => state.reset_password);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      code: "",
      newPassword: "",
    },
    validationSchema: Yup.object().shape({
      code: Yup.string().required("Enter the OTP sent to you"),
      newPassword: Yup.string().required("Password is required"),
    }),
    onSubmit(values) {
      values.username = GET_STORAGE_ITEM("phone");
      dispatch(resetPasswordAction({ data: values, navigate }));
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
              {...getFieldProps("newPassword")}
            />
            {touched.newPassword && touched.newPassword && (
              <ValidationError msg={errors.newPassword} />
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
