import React from "react";

const CustomButton = ({
  type,
  className,
  children,
  clickHandler,
  disabled,
}) => {
  return (
    <button
      disabled={disabled }
      type={type ?? "button"}
      onClick={clickHandler}
      className={`py-4 text-sm px-12 rounded bg-primary disabled:bg-primary/80 text-white font-medium ${className}`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
