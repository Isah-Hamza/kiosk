import React from "react";
import { BiCaretDown } from "react-icons/bi";

const CustomSelect = ({ options, allowFirstOption, className }) => {
  return (
    <div className="relative w-full">
      {/* <label htmlFor={id} className="block text-sm">
        {label}
      </label> */}
      <select
        required
        className={` text-gray-600 w-full h-[50px] appearance-none px-2 py-3 rounded border focus-within:border-primary hover:border-primary outline-none mt-1 text-sm ${className}`}
      >
        {options.map((option, idx) => (
          <option
            selected={idx === 0}
            disabled={!allowFirstOption && idx === 0}
            // className={idx === 0 && ""}
            key={idx}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
      <BiCaretDown className="absolute top-1/2 -translate-y-1/2 right-3 pointer-events-none" />
    </div>
  );
};


export default CustomSelect;
