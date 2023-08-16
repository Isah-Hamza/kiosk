import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { SlCalender } from "react-icons/sl";

export default function CustomInput({
  value,
  defaultValue,
  className,
  placeholder,
  label,
  type = "text",
  id,
  hasIcon,
  Icon,
  ...rest
}) {
  const [inputType, setInputType] = useState("password");

  const handleChangeType = () => {
    if (inputType == "password") setInputType("text");
    else setInputType("password");
  };

  return (
    <div className="">
      {label ? (
        <label htmlFor={id} className="block text-sm mb-0.5 text-primary">
          {label}
        </label>
      ) : null}
      <div className="relative w-full">
        <input
          value={value}
          defaultValue={defaultValue ?? null}
          autoComplete="off"
          placeholder={placeholder ?? ""}
          type={type == "password" ? inputType : type}
          className={` bg-white mt-1 block !w-full rounded p-3 py-[14px] text-sm border outline-none focus:border-primary ${className}`}
          id={id}
          {...rest}
        />
        {type == "password" && (
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2"
          >
            {inputType == "password" ? (
              <FiEye size={17} onClick={handleChangeType} />
            ) : (
              <FiEyeOff size={17} onClick={handleChangeType} />
            )}
          </button>
        )}

        {type == "data" && (
          <SlCalender className="absolute right-3 top-1/2 -translate-y-1/2" />
        )}

        {hasIcon && (
          <Icon
            size={18}
            className="opacity-50 absolute right-3 top-1/2 -translate-y-1/2"
          />
        )}
      </div>
    </div>
  );
}
