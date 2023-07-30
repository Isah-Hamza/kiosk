import React, { useState } from "react";
import { BiCaretDown } from "react-icons/bi";
import { BsPlus } from "react-icons/bs";
import { FaRedo } from "react-icons/fa";
import { ImSpinner2 } from "react-icons/im";
import { RiServiceFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserAccountAction } from "../../store/slices/partner/getUserAccountSlice";
import { switchAccountAction } from "../../store/slices/partner/switchAccountSlice";
import { GET_STORAGE_ITEM } from "../../config/storage";

const CustomDropdown = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isBusinessesOpen, setBusinessesOpen] = useState(false);

  const { loading: switching } = useSelector((state) => state.switch_account);
  const { data: businesses, loading } = useSelector(
    (state) => state.get_user_accounts
  );

  const handleDropdownToggle = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleItemClick = () => {
    setDropdownOpen(false);
  };

  const toggleShowBusinesses = () => {
    setBusinessesOpen(!isBusinessesOpen);
  };

  const switchBusiness = () => {
    dispatch(getUserAccountAction());
    toggleShowBusinesses();
  };

  const switchAccount = (id) => {
    dispatch(switchAccountAction(id));
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
        <div className="text-sm absolute dropdown-list bg-white rounded-md top-14 w-[180px] p-2 py-4 z-10 shadow">
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
            onClick={switchBusiness}
          >
            <div className="flex items-center gap-3 py-2">
              <FaRedo className="ml-2" size={16} /> Switch Business
            </div>
          </div>
        </div>
      )}
      {isBusinessesOpen && (
        <div className="min-h-[50px] text-sm absolute dropdown-list bg-white rounded-md left-[185px] top-32 w-fit p-2 py-4 z-10 shadow">
          {!loading ? (
            <>
              {businesses.map((biz, idx) => (
                <div
                  key={idx}
                  className={`${
                    idx == businesses.length - 1 ? "" : " border-b"
                  } hover:bg-bg/50 hover:!text-primary cursor-pointer hover:rounded px-2`}
                  onClick={() => {
                    // console.log(biz.id)
                    switchAccount(biz.id);
                    handleDropdownToggle();
                    toggleShowBusinesses();
                  }}
                >
                  <div className="w-max min-w-[170px] whitespace-nowrap flex items-center gap-2 py-2.5 px-3">
                    <img
                      className="w-6 rounded-full"
                      src={biz.logo}
                      alt="business logo"
                    />
                    <p>{biz.name}</p>
                  </div>
                </div>
              ))}
              {/* <div
                className="hover:bg-bg/50 hover:!text-primary cursor-pointer rounded px-2"
                onClick={() => {
                  handleDropdownToggle();
                  toggleShowBusinesses();
                }}
              >
                <div className="whitespace-nowrap flex items-center gap-3 py-2.5 pr-3">
                  <RiServiceFill className="ml-2" size={16} /> Visual Studio
                  Code
                </div>
              </div> */}
            </>
          ) : (
            <p className="text-sm flex items-center text-gray-500 gap-2 whitespace-nowrap m-auto mx-5 ">
              <ImSpinner2 className="animate-spin" />
              Loading businesses
            </p>
          )}
        </div>
      )}
      {switching ? (
        <div className="z-10 w-full text-lg fixed inset-0 bg-black/60 grid place-content-center text-white/80">
          <p className="font-medium flex items-center gap-2 whitespace-nowrap m-auto mx-5 ">
            <ImSpinner2 size={20} className="animate-spin" />
            Switching.
          </p>
          <p className="font-medium text-sm text-center">Please Wait ...</p>
        </div>
      ) : null}
    </div>
  );
};

const Title = () => {
  const { partner } = GET_STORAGE_ITEM("account");

  return (
    <button className="border border-primary/30 rounded px-3 py-3 flex items-center gap-2 text-primary">
      <RiServiceFill size={18} className="text-current" />
      <span className="font-medium">{partner.name}</span>
      <BiCaretDown className="text-current ml-5" />
    </button>
  );
};

export default CustomDropdown;
