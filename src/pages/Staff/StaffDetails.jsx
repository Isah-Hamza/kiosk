import React, { useContext, useState } from "react";
import AppLayoutNew from "../../layout/AppLayoutNew";
import CustomButton from "../../components/Buttons/CustomButton";
import { BiMenu, BiPlus, BiUser } from "react-icons/bi";
import { useLocation, useNavigate } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import { ToggleSidebarContext } from "../../App";
import moment from "moment/moment";

const StaffDetails = () => {
  const [isActive, setIsActive] = useState(true);
  const [editFields, setEditFields] = useState(false);
  const [changeStatus, setChangeStatus] = useState(false);

  const { sidebarOpen, setSidebarOpen } = useContext(ToggleSidebarContext);
  const navigate = useNavigate();

  const { staff } = useLocation().state;
  console.log(staff);

  const permissions = [
    { title: "Staff Management", value: true, prefix: "StaffMgt" },
    { title: "Product Management", value: true, prefix: "ProductMgt" },
    { title: "Customer Management", value: true, prefix: "CustomerMgt" },
    { title: "Book Management", value: true, prefix: "BookMgt" },
    { title: "Order Management", value: true, prefix: "OrderMgt" },
  ];

  const user = {
    firstName: staff.user.firstName,
    lastName: staff.user.lastName,
    roleDefination: staff.accountRoleType.label,
    isViewTransaction: staff.canViewTranx,
    imgUrl: staff.user.photo,
    accountPermissions: staff.accountPermmisions,
  };

  const staffDetails = [
    {
      title: "Email",
      value: staff.user.email,
      name: "email",
      editable: false,
      full_width: true,
    },
    {
      title: "Date Created",
      value: moment(staff.createdDate).format("ll"),
      name: "dateCreated",
      editable: false,
      smallFont: true,
    },
    {
      title: "Status",
      value: staff.isActive ? "Active" : "Inactive",
      name: "status",
      editable: false,
    },
    {
      title: "Phone",
      value: staff.user.phone,
      name: "phone",
      editable: false,
    },
    {
      title: "Account Verified",
      value: staff.user.isPhoneConfirmed ? "Yes" : "No",
      name: "accountLevel",
      editable: false,
    },
    {
      title: "Able to Login",
      value: staff.canLogin ? "Yes" : "No",
      name: "isLoginPermit",
      type: "select",
      editable: false,
      options: [
        { name: "Yes", value: true },
        { name: "No", value: false },
      ],
    },
    {
      title: "Able to View Tranx.",
      value: `${user.isViewTransaction ? "Yes" : "No"}`,
      name: "isViewTransaction",
      type: "select",
      editable: false,
      options: [
        { name: "Yes", value: true },
        { name: "No", value: false },
      ],
    },
    {
      title: "Role",
      value: staff.accountRoleType.label,
      name: "role",
      editable: false,
    },

    {
      title: "Address",
      value: `ABC Simple street.`,
      name: "address",
      editable: false,
      address: true,
    },
  ];

  return (
    <AppLayoutNew noHeader={true}>
      <div className="mx-4 sm:mx-7 my-10">
        <div className="flex items-center gap-5 mb-7">
          <span className="block lg:hidden">
            {!sidebarOpen ? (
              <BiMenu onClick={() => setSidebarOpen(true)} size={30} />
            ) : (
              <GrClose
                className="mt-1 ml-1"
                onClick={() => setSidebarOpen(false)}
                size={25}
              />
            )}
          </span>
          <p className="text-2xl font-semibold opacity-80 ">Staff Details</p>
        </div>
        <div className="bg-dimmed_white rounded-md mt-5">
          <div className="p-5 border-b gap-10 md:gap-2 flex flex-col md:flex-row justify-between">
            <div className="flex gap-2 items-center">
              <div className="overflow-hidden font-bold w-14 h-14 bg-blue-50 rounded-md text-primaryColor-900 grid place-content-center">
                <img
                  className="w-full h-full"
                  src={user.imgUrl}
                  alt="user image"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="font-bold text-xl">
                    {user?.firstName} {user?.lastName}
                  </p>
                  <p
                    // onClick={toggleChangeStatus}
                    role="button"
                    className={`${
                      isActive
                        ? "bg-blue-100 text-blue-800"
                        : "bg-[coral] text-white"
                    } relative text-xs -mt-3 font-semibold px-3 py-1 rounded-sm tracking-wide`}
                  >
                    {isActive ? "Active" : "Inactive"}
                    {changeStatus && (
                      <button
                        // onClick={handleChangeStatus}
                        className={`${
                          isActive
                            ? "bg-coral text-white"
                            : "bg-blue-100 text-blue-800"
                        } px-3 py-1 bg-[coral] rounded w-[90px] z-10 absolute top-8 left-0`}
                      >
                        {isActive ? "Deactivate" : "Activate"}
                      </button>
                    )}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <p className="text-sm capitalize">{user.roleDefination}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <CustomButton
                //   onClick={handleEdit}
                className="text-white rounded px-7 !py-1 !h-[45px] text-sm"
              >
                {editFields ? "Discard Changes" : "Edit Fields"}
              </CustomButton>
              <CustomButton
                type="button"
                //   onClick={() => setModalOpen(true)}
                className="text-white hover:bg-red-700 transition-all duration-500 ease-in bg-red-500 rounded px-7 !h-[45px] text-sm !py-0"
              >
                Delete this user
              </CustomButton>
            </div>
          </div>
          <form className="flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8  gap-x-10 sm:gap-x-5 items-center p-5">
            <>
              {staffDetails.map((prop, idx) => (
                <div
                  className={`${
                    prop.full_width && "col-span-2 sm:col-span-1"
                  } ${prop.address && "col-span-3"}`}
                  key={idx}
                >
                  <p className="opacity-80 text-sm">{prop.title}</p>
                  <>
                    {editFields ? (
                      <>
                        {prop.type === "select" ? (
                          <select
                            //   onChange={formik.handleChange}
                            name={prop.name}
                            className="w-full h-[38px]"
                          >
                            {prop.options.map((obj) => (
                              <option
                                selected={prop.value == obj.name}
                                value={obj.value}
                                key={obj.value}
                              >
                                {obj.name}
                              </option>
                            ))}
                          </select>
                        ) : (
                          <input
                            readOnly={prop.editable ? false : true}
                            name={prop.name}
                            className="w-full text-sm border outline-none px-3 py-2 "
                            type={"text"}
                            defaultValue={prop.value}
                          />
                        )}
                      </>
                    ) : (
                      <p
                        className={`mt-0 text-base font-semibold opacity-90 ${
                          prop.smallFont && "!text-sm"
                        } `}
                      >
                        {prop.value}
                      </p>
                    )}
                  </>
                </div>
              ))}
              <div className="col-span-2 sm:col-span-1">
                <CustomButton
                  type="button"
                  //   disabled={!editFields}
                  //   onClick={handleUpdateMember}
                  className="!bg-[rgba(0,158,170,0.1)] !text-[rgba(0,158,170,1)] border !border-[rgba(0,158,170,1)]  col-start-2 sm:col-start-3 md:col-start-4 w-full sm:w-fit mt-4 md:mt-auto ml-auto disabled:bg-opacity-70 !px-10 !py-3 text-sm"
                >
                  Save Changes
                </CustomButton>
              </div>
            </>
          </form>
        </div>
        <div className="bg-dimmed_white p-5 mt-5 rounded-md">
          <div className="grid gap-5 max-w-xl ">
            <p className="opacity-80 font-semibold mb-2">
              Permissions Assigned
            </p>
            <div className="flex flex-col mt-3">
              <div className="border-y py-2 grid grid-cols-[6fr,1fr,1fr] text-sm">
                <div className="flex-1"></div>
                <span>Read</span>
                <span>Write</span>
              </div>
              {permissions.map((perm, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-[6fr,1fr,1fr] items-center"
                >
                  <label className="text-sm py-2" htmlFor={perm.title}>
                    {perm.title}
                  </label>
                  <div className="ml-2">
                    <input
                      type="checkbox"
                      className="accent-primary"
                      id={perm.title}
                      name={perm.prefix + "Read"}
                      // onChange={(e) => handleChange(e.target)}
                      defaultChecked={
                        user.accountPermissions.indexOf(perm.prefix + "Read") >=
                        0
                      }
                    />
                  </div>
                  <div className="ml-2">
                    <input
                      type="checkbox"
                      className="accent-primary"
                      id={perm.title}
                      name={perm.prefix + "Write"}
                      // onChange={(e) => handleChange(e.target)}
                      defaultChecked={
                        user.accountPermissions.indexOf(perm.prefix + "Read") >=
                        0
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="">
              <CustomButton
                // loading={loading}
                // disabled={loading}
                type={"submit"}
                className="!bg-[rgba(0,158,170,0.1)] !text-[rgba(0,158,170,1)] border !border-[rgba(0,158,170,1)] ml-auto mt-5 mb-2 text-white text-sm flex items-center justify-end gap-3 !px-10 !py-3 rounded-md"
              >
                Update Permissions{" "}
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
    </AppLayoutNew>
  );
};

export default StaffDetails;
