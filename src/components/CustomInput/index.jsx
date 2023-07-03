// import React from "react";
// import { Input, InputLabel, TextField } from "@material-ui/core";

// const CustomInput = ({
//   onChange,
//   value,
//   label,
//   type,
//   Icon,
//   className,
//   name,
//   onBlur,
// }) => {
//   return (
//     <div className="!text-sm relative">
//       <TextField
//         label={label}
//         variant="outlined"
//         style={{ width: 350 }}
//         name={name}
//         onChange={onChange}
//         value={value}
//         onBlur={onBlur}
//       >
//         <InputLabel>{label}</InputLabel>
//         <Input />
//       </TextField>
//       {Icon ?? (
//         <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
//           {Icon}
//         </span>
//       )}
//     </div>
//   );
// };

// export default CustomInput;

import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { SlCalender } from "react-icons/sl";

export default function CustomInput({
  placeholder,
  label,
  type = "text",
  id,
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
        <label htmlFor={id} className="block text-sm font-medium text-primary">
          {label}
        </label>
      ) : null}
      <div className="relative">
        <input
          autoComplete="off"
          placeholder={placeholder ?? ""}
          type={type == "password" ? inputType : type}
          className="bg-white mt-1 block w-full rounded p-3 py-[14px] text-sm border outline-none focus:border-primary"
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
      </div>
    </div>
  );
}
