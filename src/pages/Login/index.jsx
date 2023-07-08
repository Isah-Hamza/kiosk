import React, { useState } from "react";
import "../../index.css";
import "../../styles/login.css";

import { ImGoogle } from "react-icons/im";
import CustomInput from "../../components/CustomInput";
import SimpleSlider from "../../components/Slider";
import { SlLock } from "react-icons/sl";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import CustomButton from "../../components/Buttons/CustomButton";
import { Link, useNavigate } from "react-router-dom";
import AuthPagesLayout from "../../layout/AuthPagesLayout";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  return (
    <AuthPagesLayout>
      <div className="form-container max-w-[400px]">
        <p className="text-center font-bold text-xl text-[#41010b] mb-5">
          KIOSK
        </p>
        <h2 className="text-center">Hello, Again!</h2>
        <p className="text-center text-[13px] opacity-80">
          Welcome to ShopHub. Please provide your login credentials here to start
          using the app.
        </p>
        <form>
          <div className="email">
            <CustomInput
              className={"!bg-[#e9e9eb] !h-[50px]"}
              placeholder={"Enter Email"}
              Icon={
                <MdOutlineMarkEmailUnread
                  size={17}
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
                />
              }
            />
          </div>
          <div className="email mt-1">
            <CustomInput
              placeholder={"Enter Password"}
              className={"!bg-[#e9e9eb] !h-[50px]"}
              type={"password"}
              Icon={
                <SlLock
                  size={17}
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
                />
              }
            />
          </div>
          <div className="flex items-center justify-between flex-row-reverse">
            <p className="forgot-password">Forgot Password?</p>
            <div className="flex items-center gap-1">
              <input name="remember" id="remember" type={"checkbox"} />
              <label htmlFor="remember">Remember Me</label>
            </div>
          </div>
          <div className="form-footer">
            <CustomButton
              type={"submit"}
              className={"bg-[#41010b] !w-full !py-4"}
              disabled={loading}
              clickHandler={() => navigate("/home")}
            >
              {loading ? "Please wait..." : " Login"}
            </CustomButton>

            <button
              type="button"
              className="shadow flex gap-2 w-full bg-white py-4 mt-3 justify-center items-center rounded"
            >
              <ImGoogle />
              Sign in With Google
            </button>
          </div>
        </form>
        <p className="no-account whitespace-nowrap">
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

export default Login;
