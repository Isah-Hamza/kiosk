import React from "react";
import { RiCarFill } from "react-icons/ri";

import hamza from "../../assets/images/hamza.jpeg";
import { GrLocation } from "react-icons/gr";
import { BsFlagFill, BsPersonCircle } from "react-icons/bs";
import { BiMobile, BiPhoneCall } from "react-icons/bi";
import AppLayoutNew from "../../layout/AppLayoutNew";
import PageHeader from "../../shared/PageHeader";

const Tracker = () => {
  const locations = [
    {
      place:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, veritatis.",
      time: "04:00PM",
      date: "Today",
      icon: <GrLocation />,
    },
    {
      place:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, veritatis.",
      time: "06:00PM",
      date: "Today",
      icon: <BsFlagFill color="#fff" size={11} />,
    },
  ];

  return (
    <AppLayoutNew noHeader={true}>
      <div className="mx-4 sm:mx-7 mt-10">
        <PageHeader children={"Delivery Tracking"} />
        <div className=" flex items-center justify-end">
          {/* <p className="text-lg font-semibold text-primary ">Live Location</p> */}
          <div className="flex items-center gap-1 -mt-20">
            <RiCarFill className="text-primary" size={16} />
            <p className="text-sm">
              Current Location{" - "}
              <span className="font-semibold text-primary">
                Airport Road, Abuja
              </span>
            </p>
          </div>
        </div>
        <div className="flex-1 mt-5">
          <div className="w-full h-full flex">
            <div className="bg-white/90 h-full w-80 p-5 py-7">
              <div className="flex items-center gap-2">
                <img
                  src={hamza}
                  alt="hamza"
                  className="w-14 h-14 rounded-full border-2 border-primary"
                />
                <div className="text-sm">
                  <p>Isah Hamza</p>
                  <p className="text-xs font-medium">Dispatch Rider</p>
                </div>
              </div>
              <div className="mt-12">
                {locations.map((loc, idx) => (
                  <div
                    key={idx}
                    className={`relative text-sm pb-10 pl-4 border-l min-h-[50px] w-full ${
                      idx == 1 && "border-none"
                    }`}
                  >
                    <div
                      className={`grid place-content-center absolute w-5 h-5 rounded-full bg-slate-200 top-.5 -left-[10px] ${
                        idx == 1 && "!bg-primary"
                      }`}
                    >
                      {loc.icon}
                    </div>
                    <p className={`${idx == 0 && "opacity-60"}`}>{loc.place}</p>
                    <div className="flex items-center justify-between mt-3">
                      <p className={`${idx == 0 && "opacity-60"}`}>
                        {loc.date}
                      </p>
                      <p className="font-medium">{loc.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-20 font-medium">
                <div className="px-3 flex gap-2 items-center text-sm">
                  <BsPersonCircle className="text-primary" />
                  <p>Ridiculous Person</p>
                </div>
                <div className=" relative px-3 bg-blue-100 rounded py-2 mt-2 flex gap-2 items-center text-sm">
                  <BiMobile className="text-primary" />
                  <p>(+234) 706 5786 031</p>
                  <button className="absolute right-3 top-4 grid place-content-center w-6 h-6 rounded-full bg-primary">
                    <BiPhoneCall color="white" className="text-white" />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.2937300827725!2d7.282629369452614!3d8.945057870682772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e7afd2ee518f7%3A0x9b05cd28c86a9ba3!2sAirport%20Rd%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1687218189731!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </AppLayoutNew>
  );
};

export default Tracker;
