import React, { useContext } from "react";
import "../../index.css";
import "../../styles/login.css";

import { ImGoogle } from "react-icons/im";
import CustomInput from "../../components/CustomInput";
import { SlLock } from "react-icons/sl";
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

const ResetPassword = () => {
  const { setPartner } = useContext(PartnerContext);
  const { loading, token } = useSelector((state) => state.authenticate);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      username: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit(values) {
      values.deviceId = "test_id";
      dispatch(loginAction({ data: values, navigate, setPartner }));
    },
  });

  const { handleSubmit, getFieldProps, errors, touched } = formik;

  return (
    <AuthPagesLayout>
      <div className="form-container max-w-[330px]">
        {/* <div className="flex justify-center items-center mb-7">
          <span className="text-lg font-bold text-primary">
            <img src={logo} alt="logo" className="w-40" />
          </span>
        </div> */}
        <p className="text-center font-bold text-xl text-[#41010b] mb-3">
          Reset Password
        </p>
        <p className="text-center text-[13px] opacity-80">
          Please supply the phone number you supplied while registering this
          account. We will send you an OTP to continue this process.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="email">
            <CustomInput
              className={"!bg-[#e9e9eb] !h-[50px]"}
              placeholder={"Enter Phone Number"}
              Icon={
                <MdOutlineMarkEmailUnread
                  size={17}
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
                />
              }
              {...getFieldProps("username")}
            />
            {touched.username && touched.username && (
              <ValidationError msg={errors.username} />
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
              // clickHandler={() => navigate("/home")}
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

export default ResetPassword;
