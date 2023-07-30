import React, { useState } from "react";
import { BiCaretDown } from "react-icons/bi";
import { BsPlus } from "react-icons/bs";
import { FaRedo } from "react-icons/fa";
import { RiServiceFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const CustomDropdown = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isBusinessesOpen, setBusinessesOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleItemClick = () => {
    setDropdownOpen(false);
  };

  const toggleShowBusinesses = () => {
    setBusinessesOpen(!isBusinessesOpen);
  };

  return (
    <div className="relative">
      <div
        onClick={() => {
          handleDropdownToggle();
          setBusinessesOpen(false);
        }}
      >
        <Title />
      </div>
      {isDropdownOpen && (
        <div className="text-sm absolute dropdown-list bg-white rounded-md top-14 w-full p-2 py-4 z-10 shadow">
          <div
            className="hover:bg-bg/50 hover:!text-primary cursor-pointer rounded px-2"
            onClick={() => {
              navigate("/create-business");
              handleItemClick();
            }}
          >
            <div className="flex items-center gap-2 py-1">
              <BsPlus size={30} />
              <p> Add Business</p>
            </div>
          </div>
          <div
            className={`hover:bg-bg/50 hover:!text-primary cursor-pointer rounded px-2 ${
              isBusinessesOpen && "bg-bg/50"
            }  `}
            onClick={toggleShowBusinesses}
          >
            <div className="flex items-center gap-3 py-2">
              <FaRedo className="ml-2" size={16} /> Switch Business
            </div>
          </div>
        </div>
      )}
      {isBusinessesOpen && (
        <div className="text-sm absolute dropdown-list bg-white rounded-md left-[calc(100%+10px)] top-32 w-fit p-2 py-4 z-10 shadow">
          <div
            className="border-b hover:bg-bg/50 hover:!text-primary cursor-pointer hover:rounded px-2"
            onClick={() => {
              handleDropdownToggle();
              toggleShowBusinesses();
            }}
          >
            <div className="whitespace-nowrap flex items-center gap-3 py-2.5 pr-3">
              <RiServiceFill className="ml-2" size={16} />
              <p>Radiant Clothing</p>
            </div>
          </div>
          <div
            className="hover:bg-bg/50 hover:!text-primary cursor-pointer rounded px-2"
            onClick={() => {
              handleDropdownToggle();
              toggleShowBusinesses();
            }}
          >
            <div className="whitespace-nowrap flex items-center gap-3 py-2.5 pr-3">
              <RiServiceFill className="ml-2" size={16} /> Visual Studio Code
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Title = () => (
  <button className="border border-primary/30 rounded px-3 py-3 flex items-center gap-2 text-primary">
    <RiServiceFill size={18} className="text-current" />
    <span className="font-medium">Pelemo Stores</span>
    <BiCaretDown className="text-current ml-5" />
  </button>
);

export default CustomDropdown;
