import React, { useState } from "react";
import "../../index.css";
import "../../styles/login.css";

import loginImg from "../../assets/images/undraw_transfer_money_re_6o1h (1).svg";
// import logo from "../../img/Ripples-Finance-Logo.png";
import { ImGoogle } from "react-icons/im";
import CustomInput from "../../components/CustomInput";
import SimpleSlider from "../../components/Slider";
import { SlLock } from "react-icons/sl";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import CustomButton from "../../components/Buttons/CustomButton";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const dummyArr = [1, 2, 3];

  // const formik = useFormik({
  //   initialValues: {
  //     email: "",
  //     password: "",
  //     deviceId: "ridiculous_token",
  //     token: "",
  //   },
  //   onSubmit: (values) => {
  //     values.username = values.email;
  //     console.log(values);
  //   },
  // });

  return (
    <main className="login">
      <section className=" bg-[#41010b]">
      <SimpleSlider>
        {dummyArr.map((item, idx) => (
          <section key={idx} className="right h-full !flex">
            <div className="login-img">
              <img src={loginImg} alt="img" />
            </div>
            <div className="flex justify-center gap-1 items-center mb-3">
              <div className="bg-black w-1.5 h-1.5 rounded-full"></div>
              <div className="bg-white w-1.5 h-1.5 rounded-full"></div>
              <div className="bg-black w-1.5 h-1.5 rounded-full"></div>
            </div>
            <div className="login-footer mt-auto">
              <h3 className="font-semibold !leading-5">
                Ripples Finance <br /> and Loan
              </h3>
              <p className="max-w-[350px]">
                Don't let financial hurdles hold you back. Ripples Finance and
                Loan provides a hassle-free way to get the funds you need.
              </p>
            </div>
          </section>
        ))}
      </SimpleSlider>

      </section>
      <section className="relative left !bg-white/90 h-full flex justify-center items-center">
        <div className="form-container max-w-[350px]">
          <span>KIOSK</span>
          <h2 className="text-center">Hello, Again!</h2>
          <p className="text-center text-[13px] opacity-80">
            Welcome to Ripples. Please put your login credentials here to start
            using the app.
          </p>
          <form>
            <div className="email">
              <CustomInput
                className={"!bg-[#e9e9eb]"}
                placeholder={"Enter Email"}
                Icon={
                  <MdOutlineMarkEmailUnread
                    size={17}
                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
                  />
                }
                // {...formik.getFieldProps("email")}
              />
            </div>
            <div className="email mt-1">
              <CustomInput
                placeholder={"Enter Password"}
                className={"!bg-[#e9e9eb]"}
                type={"password"}
                Icon={
                  <SlLock
                    size={17}
                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
                  />
                }
                // {...formik.getFieldProps("password")}
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
                className={"!w-full"}
                disabled={loading}
              >
                {loading ? "Please wait..." : " Login"}
              </CustomButton>

              <button
                type="button"
                className="shadow flex gap-2 w-full bg-white text-primaryColor-900 py-3 mt-3 justify-center items-center rounded"
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
              <a href="#" className="font-medium">
                Sign Up
              </a>{" "}
            </span>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Login;
