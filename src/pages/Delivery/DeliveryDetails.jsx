import React from "react";
import { RiCarFill } from "react-icons/ri";

import hamza from "../../assets/images/hamza.jpeg";
import { GrLocation } from "react-icons/gr";
import { BsEye, BsEyeFill, BsFlagFill, BsPersonCircle } from "react-icons/bs";
import { BiMobile, BiPhoneCall } from "react-icons/bi";
import AppLayoutNew from "../../layout/AppLayoutNew";
import PageHeader from "../../shared/PageHeader";
import { useNavigate } from "react-router-dom";

const DeliveryDetails = () => {
  const navigate = useNavigate();

  const orderDetails = [
    {
      title: "Pickup Address",
      value: "Lugbe, Abuja",
    },
    {
      title: "Delivery Address",
      value: "Mainland, Lagos",
    },
    {
      title: "Recepient Name",
      value: "Umokoro Felix Daniel",
    },
    {
      title: "Recepient Email",
      value: "itsumokoro@gmail.com",
    },
    {
      title: "Recepient Phone",
      value: "09099887766",
    },
    {
      title: "Item Weight",
      value: "100kg",
    },
    {
      title: "(Description) Note",
      value: "Lorem ipsum dolor sit amet, consectetur adespecising elit",
      fullColumn: true,
    },
  ];

  const trackingDetails = [
    {
      title: "Agent Assigned",
      value: "Isah Hamza Onipe",
    },
    {
      title: "Specialization",
      value: "Dispatch Rider",
    },
    {
      title: "Agent Phone",
      value: "09099887766",
    },
    {
      title: "Agent Email ",
      value: "itsdispatch@rider.com",
    },
    {
      title: "Vehicle Type",
      value: "Car",
    },
    {
      title: "Car Name",
      value: "Lexus 2023 Model",
    },
    {
      title: "Speed",
      value: "45km/hr",
    },
    {
      title: "Cost",
      value: "$400.00",
    },
    {
      title: "Expected Delivery Time",
      value: "Aug 23, 2025",
    },
  ];

  return (
    <AppLayoutNew noHeader={true}>
      <div className="mx-4 sm:mx-7 mt-10 mb-7">
        <PageHeader children={"Delivery Details"} />
        <div className="bg-dimmed_white rounded-md w-full min-h-[250px] mb-5 p-5">
          <p className="font-medium text-lg opacity-80 pb-4 border-b">
            Order #3452
          </p>
          <div className="mt-7 grid grid-cols-3 gap-10 max-w-[700px]">
            {orderDetails.map((item, idx) => (
              <div key={idx} className={`${item.fullColumn && "col-span-3"} `}>
                <p className="font-medium opacity-90">{item.title}</p>
                <p className="text-[#353434]">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-dimmed_white rounded-md w-full min-h-[250px] p-5">
          <div className="flex items-center pb-4 border-b justify-between">
            <p className="font-medium text-lg opacity-80 ">Tracking ID #052</p>
            <button
              onClick={() => navigate("/delivery/tracking")}
              className="flex items-center gap-1 text-primary font-semibold text-sm"
            >
              <BsEyeFill />
              View on Fullscreen
            </button>
          </div>
          <div className="mt-7 grid grid-cols-4 gap-10 max-w-[850px]">
            {trackingDetails.map((item, idx) => (
              <div key={idx} className={`${item.fullColumn && "col-span-3"} `}>
                <p className="font-medium opacity-90">{item.title}</p>
                <p className="text-[#353434]">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppLayoutNew>
  );
};

export default DeliveryDetails;
