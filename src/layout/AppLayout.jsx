import React from "react";
import person from "../assets/images/hamza.jpeg";
import { FaBell } from "react-icons/fa";
import { FiHome, FiUsers } from "react-icons/fi";
import { BsCreditCard } from "react-icons/bs";
import { RiDashboardLine } from "react-icons/ri";
import { RiCarFill } from "react-icons/ri";

const AppLayout = ({ children }) => {
  const sidebarElements = [
    {
      name: "Dashboard",
      path: "/home",
      icon: <FiHome />,
    },
    {
      name: "Loan Application",
      path: "/loan",
      icon: <BsCreditCard />,
    },
    {
      name: "Logistics",
      path: "/customer",
      icon: <RiCarFill />,
    },
    {
      name: "Customers",
      path: "/staff",
      icon: <FiUsers />,
    },
    {
      name: "Investories",
      path: "/customer",
      icon: <RiDashboardLine />,
    },
  ];

  const secondarySideBarItems = ["Terms and Conditions", "Help Center"];

  return (
    <div className="flex bg-[#f4f5f9] h-screen">
      <aside className="flex flex-col w-[280px] h-full bg-white/90 py-5">
        <div className="flex items-center gap-2 px-7">
          <div className="rounded-full w-10 h-10 bg-slate-400"></div>
          <p className="text-2xl font-semibold">KIOSK</p>
        </div>
        <div className="mt-10 px-2">
          <ul>
            {sidebarElements.map((item, idx) => (
              <li
                key={idx}
                className="flex gap-3 items-center font-medium opacity-70 pl-10 py-2.5 hover:bg-[#f3f4f5] hover:opacity-100 cursor-pointer transition-all duration-300 ease-in-out"
              >
                <span>{item.icon}</span>
                <span className="">{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-auto">
          <ul className="px-5">
            {secondarySideBarItems.map((item, idx) => (
              <li
                to={"#"}
                key={idx}
                className={`text-black/80 text-sm mb-1 px-7 py-1.5 flex gap-2.5 items-center hover:font-semibold hover:bg-slate-200 ${"hover:text-primary"} cursor-pointer`}
              >
                {item}
              </li>
            ))}
            <button
              onClick={() => dispatch(logout())}
              className="w-full"
              to={"/login"}
            >
              <span
                className={`text-black/80 text-sm mb-1 px-7 py-1.5 flex gap-2.5 items-center hover:font-semibold hover:bg-slate-200 ${"hover:text-primary"}`}
              >
                Logout
              </span>
            </button>
          </ul>
        </div>
      </aside>
      <main className="h-full  flex-1">
        <header className="w-full h-[70px] bg-white/90 flex justify-end px-7">
          <div className="flex gap-3 items-center">
            <button className="p-2 rounded bg-gray-200">
              <FaBell size={16} color="darkblue" className="" />
            </button>
            <div className="flex items-center gap-2">
              <img className="w-12 rounded-full" src={person} alt="person" />
              <div className="text-sm">
                <p className="font-semibold leading-4 text-base">Isah Hamza</p>
                <p>Admin</p>
              </div>
            </div>
          </div>
        </header>
        <section className="pt-6 h-[calc(100vh-70px)] overflow-auto">{children}</section>
      </main>
    </div>
  );
};

export default AppLayout;
