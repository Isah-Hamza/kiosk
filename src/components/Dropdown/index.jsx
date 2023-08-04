import React, { useContext, useEffect, useState } from "react";
import { BiCaretDown } from "react-icons/bi";
import { BsPlus } from "react-icons/bs";
import { FaRedo } from "react-icons/fa";
import { ImSpinner2 } from "react-icons/im";
import { RiServiceFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserAccountAction } from "../../store/slices/partner/getUserAccountSlice";
import { switchAccountAction } from "../../store/slices/partner/switchAccountSlice";
import { PartnerContext } from "../../App";
import { GET_STORAGE_ITEM } from "../../config/storage";

const CustomDropdown = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let partner = GET_STORAGE_ITEM("account");

  const { setPartner } = useContext(PartnerContext);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isBusinessesOpen, setBusinessesOpen] = useState(false);

  const { loading: switching } = useSelector((state) => state.switch_account);
  const { data: businesses, loading } = useSelector(
    (state) => state.get_user_accounts
  );

  const handleDropdownToggle = () => {
    setDropdownOpen((prev) => !prev);
  };

  const switchAccount = (id) => {
    dispatch(switchAccountAction({ id, setPartner }));
  };

  useEffect(() => {
    dispatch(getUserAccountAction());
  }, []);

  return (
    <div className="relative">
      <div
        onClick={() => {
          handleDropdownToggle();
          setBusinessesOpen(false);
        }}
      >
        <Title partner={partner} />
      </div>
      {isDropdownOpen && (
        <div className="text-sm absolute px-4 dropdown-list bg-white rounded-md top-14 min-w-full p-2 py-4 z-10 shadow">
          <div
            className="hover:bg-bg/50 hover:!text-primary cursor-pointer rounded px-2"
            onClick={() => {
              navigate("/create-business");
            }}
          >
            <div className="flex items-center gap-2 py-1">
              <BsPlus size={30} />
              <p> Add Business</p>
            </div>
          </div>
          <div className="text-sm ">
            {!loading ? (
              <>
                {businesses.map((biz, idx) => (
                  <div
                    key={idx}
                    className={`${
                      partner?.id === biz.id && "!hidden"
                    } border-t hover:bg-bg/50 hover:!text-primary cursor-pointer hover:rounded`}
                    onClick={() => {
                      switchAccount(biz.id);
                      handleDropdownToggle();
                    }}
                  >
                    {console.log(partner?.partner?.id, biz.id)}
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
              </>
            ) : (
              <p className="mt-2 text-sm flex items-center text-gray-500 gap-2 whitespace-nowrap m-auto ml-4 mx-5 ">
                <ImSpinner2 className="animate-spin" />
                Loading businesses
              </p>
            )}
          </div>
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

const Title = ({ partner }) => {
  return (
    <button className="border border-primary/30 rounded px-3 py-3 flex items-center gap-2 text-primary">
      {partner?.partner?.name ? (
        <img className="w-6 rounded-full" src={partner?.partner?.logo} alt="" />
      ) : (
        <RiServiceFill size={18} className="text-current" />
      )}
      <span className="font-medium">
        {partner?.partner?.name ?? "Loading..."}
      </span>
      <BiCaretDown className="text-current ml-5" />
    </button>
  );
};

export default CustomDropdown;
