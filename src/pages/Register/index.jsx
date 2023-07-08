import React, { useState } from "react";
import AuthPagesLayout from "../../layout/AuthPagesLayout";

import { MyInput as CustomInput } from "../../components/CustomInput/MyInput";
import CustomButton from "../../components/Buttons/CustomButton";
import OTPInput from "../../components/CustomInput/OTPInput";
import CustomSelect from "../../components/CustomInput/Select";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const steps = ["Personal Information", "Enter OTP", "Business Information"];
  const [currStep, setCurrStep] = useState(1);

  return (
    <div>
      <AuthPagesLayout>
        <div className="mt-16 flex flex-col self-start">
          <div>
            <p className="font-semibold text-3xl">Sign up</p>
            <p className="text-sm text-secondary-brown">
              Already have an account?{" "}
              <Link to={"/login"} className="text-primary font-medium">
                Login
              </Link>
            </p>
          </div>

          <div className="mt-12 grid grid-cols-3 border border-primary rounded-md overflow-hidden">
            {steps.map((step, idx) => (
              <button
                key={idx}
                onClick={() => setCurrStep(idx + 1)}
                className={`p-3 text-sm flex items-center gap-2
              ${idx != 0 && "border-l border-primary"}
              ${currStep === idx + 1 && "font-semibold  text-primary"}`}
              >
                <p
                  className={`w-6 h-6 rounded-full grid place-content-center border text-sm ${
                    currStep === idx + 1 && "border-2 border-primary"
                  }`}
                >
                  {idx + 1}
                </p>
                <p>{step}</p>
              </button>
            ))}
          </div>

          {currStep === 1 ? (
            <div className="mt-14">
              <div className="grid grid-cols-2 gap-5 gap-y-7">
                <CustomInput placeholder={"First Name"} id={"first_name"} />
                <CustomInput placeholder="Last Name" id={"last_name"} />{" "}
                <div className="col-span-2">
                  <CustomInput placeholder={"Email"} id={"email"} />{" "}
                </div>
                <CustomInput
                  placeholder={"Password"}
                  id={"password"}
                  type={"password"}
                  className='transparent-bg'
                />{" "}
                <CustomInput
                  placeholder={"Confirm Password"}
                  id={"confirm_password"}
                  type={"password"}
                  className='transparent-bg'
                />{" "}
              </div>
              <div className=" mt-10 flex justify-end">
                <CustomButton
                  clickHandler={() => setCurrStep(2)}
                  className={"w-fit"}
                  children={"Save and Next"}
                />
              </div>
            </div>
          ) : null}

          {currStep === 2 ? (
            <div className="mt-14 otp">
              <p className="mb-4">
                Enter The OTP sent to your registered email/phone number <br />{" "}
                to move to the next step.
              </p>
              <OTPInput />{" "}
              <div className=" mt-10 flex">
                <CustomButton
                  clickHandler={() => setCurrStep(3)}
                  className={"w-fit"}
                  children={"Confirm and Next"}
                />
              </div>
            </div>
          ) : null}

          {currStep === 3 ? (
            <div className=" mt-14">
              <div className="grid grid-cols-2 gap-5 gap-y-7">
                <CustomInput
                  // label={"Company Name"}
                  placeholder={"Company Name"}
                  id={"company_name"}
                />
                <CustomInput
                  // label={"CAC"}
                  placeholder="CAC"
                  id={"cac"}
                />{" "}
                <div className="col-span-2">
                  <CustomInput
                    // label={"Company Address"}
                    placeholder={"Company Address"}
                    id={"company_address"}
                  />{" "}
                </div>
                <CustomSelect
                  className={"country"}
                  // label={"Select Country"}
                  options={[
                    { label: "Select Country", value: "" },
                    { label: "Nigeria", value: "nigeria" },
                    { label: "USA", value: "USA" },
                    { label: "Canada", value: "Canada" },
                    { label: "Ukraine", value: "Ukraine" },
                    { label: "Germany", value: "Germany" },
                  ]}
                />{" "}
                <CustomSelect
                  // label={"Select State"}
                  options={[
                    { label: "Select State", value: "" },
                    { label: "Abuja", value: "Abuja" },
                    { label: "Lagos", value: "Lagos" },
                    { label: "Ibadan", value: "Ibadan" },
                    { label: "Akwa-Ibon", value: "Akwa-Ibon" },
                    { label: "kaduna", value: "kaduna" },
                  ]}
                />{" "}
              </div>
              <div className=" mt-7 flex justify-end">
                <CustomButton
                  className={"w-fit"}
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
