// ProfilePage.js

import React, { useState } from "react";
import Layout from "../../layout/AppLayoutNew";
import { FaEdit } from "react-icons/fa";
import { AiTwotoneDelete } from "react-icons/ai";
import { RiDeleteBin3Line } from "react-icons/ri";
import CustomInput from "../../components/CustomInput";
import { SlLock } from "react-icons/sl";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import CustomSelect from "../../components/CustomInput/Select";
import CustomButton from "../../components/Buttons/CustomButton";

const Profile = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [tabs, setTabs] = useState([
    "Personal Information",
    "Business Information",
    "Bank Information",
    "Security",
  ]);

  const userProfile = {
    // Placeholder data, replace with actual user data from API or state
    avatar: "https://via.placeholder.com/150", // URL to user's profile picture

    personal: [
      {
        title: "Name",
        value: "Johnson Doe",
      },
      {
        title: "Email",
        value: "john.doe@example.com",
      },
      {
        title: "Account Type",
        value: "Business Account",
      },
      {
        title: "Country",
        value: "Australia",
      },
      {
        title: "Region",
        value: "Western Madagascar",
      },
      {
        title: "phone 1",
        value: "+1 123-456-7890",
      },
      {
        title: "phone 2",
        value: "Not Applicable",
      },
      {
        title: "Address",
        value: "123 Main Street, City",
      },
    ],
    business: [
      {
        title: "Business Name",
        value: "Fortune 500 Establishment",
      },
      {
        title: "Business Email",
        value: "fortune.500@company.com",
      },
      {
        title: "Business Type",
        value: "IT services",
      },
      {
        title: "Company Size",
        value: "200 - 500",
      },
      {
        title: "Country of Operation",
        value: "United State of America",
      },
      {
        title: "Region",
        value: "Silicon Valley",
      },
      {
        title: "Business phone",
        value: "+1 123-456-7890",
      },

      {
        title: "About",
        value: "This company was started in blah blah blah ",
      },
    ],
    businesses: {
      companyName: "Example Corp",
      position: "Software Engineer",
      bio: "Passionate about creating awesome web applications!",
    },
    bank: [
      {
        title: "Account Bearer",
        value: "Ridiculous Bearer",
      },
      {
        title: "Bank Name",
        value: "Wema Bank",
      },
      {
        title: "Account Number",
        value: "0815898941",
      },
      {
        title: "Account Mode",
        value: "Current Account",
      },
      {
        title: "Account Type",
        value: "Business Account",
      },
    ],
  };

  return (
    <Layout>
      <div className="mt-12 mx-7 flex gap-7">
        <div className="w-80 flex flex-col">
          <p className="text-xl font-semibold opacity-80 mb-5 pl-7">
            Information
          </p>
          <div className="">
            {tabs.map((tab, idx) => (
              <button
                onClick={() => setActiveTab(idx)}
                className={`font-medium text-gray-500 w-full rounded-md text-left py-3 mb-1 font px-7  hover:bg-primary/10  ${
                  idx === activeTab &&
                  "text-gray-700 bg-primary/20  hover:!bg-primary/20"
                }`}
                key={idx}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="w-full">
          {/* Profile Picture and Personal Information */}
          {activeTab === 0 ? (
            <div className="w-full mb-6 bg-dimmed_white/80 ro rounded-md p-7">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-5">
                  <img
                    src={userProfile.avatar}
                    alt="Profile"
                    className="w-32 h-32 rounded-2xl "
                  />
                  <div>
                    <button className="flex items-center gap-2 text-blue-900 font-semibold">
                      <span>
                        <FaEdit />
                      </span>
                      <span>Change</span>
                    </button>
                    <button className="flex items-center gap-2 text-red-600 font-semibold">
                      <span>
                        <RiDeleteBin3Line size={16} />
                      </span>
                      <span>Remove</span>
                    </button>
                  </div>
                </div>
                <button className="flex items-center gap-2 text-blue-900 font-semibold ml-auto mr-5">
                  <span>
                    <FaEdit />
                  </span>
                  <span>Click to Edit</span>
                </button>
              </div>
              <div className="grid grid-cols-3 gap-7 mt-12">
                {userProfile.personal.map((item, idx) => (
                  <div key={idx}>
                    <p className="opacity-80">{item.title}</p>
                    <p className="text-lg font-medium opacity-70">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          {/* Business Information */}
          {activeTab === 1 ? (
            <div className="mb-6 bg-dimmed_white/80 rounded-md p-7">
              <div className="flex justify-between items-center">
                <p className="text-xl font-semibold opacity-80 mb-5">
                  Business Information
                </p>
                <button className="flex items-center gap-2 text-blue-900 font-semibold mr-5">
                  <span>
                    <FaEdit />
                  </span>
                  <span>Click to Edit</span>
                </button>
              </div>

              <div className="grid grid-cols-3 gap-7 mt-7">
                {userProfile.business.map((item, idx) => (
                  <div key={idx}>
                    <p className="opacity-80">{item.title}</p>
                    <p className="text-lg font-medium opacity-70">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          {/* Bank Information */}
          {activeTab === 2 ? (
            <div className="mb-10 bg-dimmed_white/80 rounded-md p-7">
              <div className="flex justify-between items-center">
                <p className="text-xl font-semibold opacity-80 mb-5">
                  Bank Information
                </p>
                <button className="flex items-center gap-2 text-blue-900 font-semibold mr-5">
                  <span>
                    <FaEdit />
                  </span>
                  <span>Click to Edit</span>
                </button>
              </div>

              <div className="grid grid-cols-3 gap-7 mt-7">
                {userProfile.bank.map((item, idx) => (
                  <div key={idx}>
                    <p className="opacity-80">{item.title}</p>
                    <p className="text-lg font-medium opacity-70">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          {/* Security */}
          {activeTab === 3 ? (
            <div className="mb-10 bg-dimmed_white/80 rounded-md p-7">
              <div className="flex justify-between items-center">
                <p className="text-xl font-semibold opacity-80 mb-">
                  Security Information
                </p>
              </div>
              <div className=" grid grid-cols-3 gap-5 mt-7">
                <div className="password mt-1">
                  <CustomInput
                    label={"Old Password"}
                    placeholder={"Enter Password"}
                    className={
                      "!h-[50px] w-full px-5 outline-none border rounded"
                    }
                    type={"password"}
                    Icon={
                      <SlLock
                        size={17}
                        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
                      />
                    }
                  />
                </div>
                <div className="password mt-1">
                  <CustomInput
                    label={"New Password"}
                    placeholder={"Enter Password"}
                    className={
                      " !h-[50px] w-full px-5 outline-none border  rounded"
                    }
                    type={"password"}
                    Icon={
                      <SlLock
                        size={17}
                        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
                      />
                    }
                  />
                </div>
                <div className="password mt-1">
                  <CustomInput
                    label={"Confirm Password"}
                    placeholder={"Enter Password"}
                    className={
                      " !h-[50px] w-full px-5 outline-none border  rounded"
                    }
                    type={"password"}
                    Icon={
                      <SlLock
                        size={17}
                        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
                      />
                    }
                  />
                </div>
                <div className="col-span-3 mt-1">
                  <CustomButton className={'rounded-md !py-3 !bg-primary/90'}>Reset Password</CustomButton>
                </div>
              </div>
              <div className="mt-10">
                <p className="text-xl font-semibold opacity-80 mb-5">
                  Account Settings
                </p>
                <div className="grid grid-cols-3 gap-5">
                  <CustomSelect
                    allowFirstOption
                    className={"country"}
                    label={"Change Status"}
                    options={[
                      { label: "Active", value: 1 },
                      { label: "Inactive", value: 2 },
                    ]}
                  />{" "}
                  <CustomSelect
                    allowFirstOption
                    label={"Enable 2 Factor Auth"}
                    options={[
                      { label: "No", value: 1 },
                      { label: "Yes", value: 2 },
                    ]}
                  />{" "}
                  <div className="col-span-3 mt-1">
                    <CustomButton className={'rounded-md !py-3 !bg-primary/90'}>Save Changes</CustomButton>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
