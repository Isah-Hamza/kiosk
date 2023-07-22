import React from "react";
import person from "../assets/images/hamza.jpeg";
import { FaBell } from "react-icons/fa";
import { FiHome, FiUsers } from "react-icons/fi";
import { BsCaretDownFill, BsCreditCard } from "react-icons/bs";
import { RiDashboardLine } from "react-icons/ri";
import { RiCarFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const AppLayout = ({ children }) => {
  const navigate = useNavigate();

  const sidebarElements = [
    {
      name: "Dashboard",
      path: "/home",
      icon: <FiHome />,
    },
    {
      name: "Logistics",
      path: null,
      icon: <RiCarFill />,
    },
    {
      name: "My Customers",
      path: null,
      icon: <FiUsers />,
    },
    {
      name: "Investories",
      path: null,
      icon: <RiDashboardLine />,
    },
    {
      name: "Reports",
      path: null,
      icon: <BsCreditCard />,
      hasSubMenu: true,
      subMenu: [
        {
          name: "All Expenses",
          path: "/loan",
          icon: <BsCreditCard />,
        },
        {
          name: "All Inventories",
          path: "/loan",
          icon: <BsCreditCard />,
        },
        {
          name: "All Sales",
          path: "/loan",
          icon: <BsCreditCard />,
        },
        {
          name: "All Transactions",
          path: "/loan",
          icon: <BsCreditCard />,
        },
      ],
    },
  ];

  const secondarySideBarItems = ["Terms and Conditions", "Help Center"];

  return (
    <div className="flex bg-[#f4f5f9] h-screen">
      <aside className="flex flex-col w-[280px] h-full bg-white/90 py-5">
        <div className="flex items-center gap-2 px-7">
          <div className="rounded-full w-10 h-10 bg-[#41010b]"></div>
          <p className="text-xl font-bold">ShopHub</p>
        </div>
        <div className="mt-10 px-2">
          <ul>
            {sidebarElements.map((item, idx) => (
              <li
                onClick={() => navigate(item.path)}
                key={idx}
                className="flex items-center justify-between text-[15px]font-medium opacity-70 pl-8 pr-5 py-3.5 hover:bg-[#f3f4f5] hover:opacity-100 cursor-pointer transition-all duration-300 ease-in-out"
              >
                <div className=" flex gap-3 items-center font-medium">
                  <span>{item.icon}</span>
                  <span className="">{item.name}</span>
                </div>
                {item.hasSubMenu ? <BsCaretDownFill size={12} /> : null}
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
              onClick={() => navigate("/login")}
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
            <button className="relative p-2 rounded bg-gray-200">
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
        <section className="pt-6 h-[calc(100vh-70px)] overflow-auto">
          {children}
        </section>
      </main>
    </div>
  );
};

export default AppLayout;
