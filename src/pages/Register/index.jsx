import React, { useState } from "react";
import AuthPagesLayout from "../../layout/AuthPagesLayout";

import { MyInput as CustomInput } from "../../components/CustomInput/MyInput";
import CustomButton from "../../components/Buttons/CustomButton";
import OTPInput from "../../components/CustomInput/OTPInput";
import CustomSelect from "../../components/CustomInput/Select";
import { Link, useNavigate } from "react-router-dom";

import { IoMdCheckmark } from "react-icons/io";

const Register = () => {
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

  return (
    <div>
      <AuthPagesLayout>
        <div className="w-full mt-16 my-10 flex flex-col self-start ">
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
                  <div className={`left-1/2 absolute top-[26px] w-full h-0.5 ${currStep - 1 > step.id ?'bg-primary' : 'bg-[gainsboro]'}`}></div>
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
              <div className="grid grid-cols-2 gap-4">
                <CustomInput
                  type={"text"}
                  placeholder={"First Name"}
                  id={"first_name"}
                />
                <CustomInput
                  type={"text"}
                  placeholder="Last Name"
                  id={"last_name"}
                />{" "}
                <div className="col-span-2">
                  <CustomInput
                    type={"text"}
                    placeholder={"Email"}
                    id={"email"}
                  />{" "}
                </div>
                <CustomInput
                  placeholder={"Password"}
                  id={"password"}
                  type={"password"}
                  className="transparent-bg"
                />{" "}
                <CustomInput
                  placeholder={"Confirm Password"}
                  id={"confirm_password"}
                  type={"password"}
                  className="transparent-bg"
                />{" "}
              </div>
              <div className="ml-auto w-fit mt-10">
                <CustomButton
                  clickHandler={() => setCurrStep(2)}
                  className={"w-full"}
                  children={"Save and Next"}
                />
              </div>
            </div>
          ) : null}

          {currStep === 2 ? (
            <div className="flex flex-col items-center w-full mt-16 otp">
              <p className="mb-8 text-center">
                Please enter The OTP sent to your registered email or phone number 
                to move to the next step.
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
              <div className="grid grid-cols-2 gap-4">
                <CustomInput
                  type={"text"}
                  placeholder={"Company Name"}
                  id={"company_name"}
                />
                <CustomInput type={"text"} placeholder="CAC" id={"cac"} />{" "}
                <div className="col-span-2">
                  <CustomInput
                    type={"text"}
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
              <div className=" mt-10 flex justify-end">
                <CustomButton
                  className={"w-fit "}
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
