import React from "react";
import person from "../assets/images/hamza.jpeg";
import { FaBell, FaUserCog } from "react-icons/fa";
import { FiHome, FiUsers } from "react-icons/fi";
import { BsCaretDownFill, BsCreditCard } from "react-icons/bs";
import { RiDashboardLine, RiServiceFill } from "react-icons/ri";
import { RiCarFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { BiCaretDown } from "react-icons/bi";

const AppLayoutNew = ({ children, noHeader }) => {
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
      name: "My Books",
      path: "#",
      icon: <BsCreditCard />,
      hasSubMenu: true,
      subMenu: [
        {
          name: "All Expenses",
          path: "#",
          icon: <BsCreditCard />,
        },
        {
          name: "All Inventories",
          path: "#",
          icon: <BsCreditCard />,
        },
        {
          name: "All Sales",
          path: "#",
          icon: <BsCreditCard />,
        },
        {
          name: "All Transactions",
          path: "#",
          icon: <BsCreditCard />,
        },
      ],
    },
    {
      name: "My Customers",
      path: null,
      icon: <FiUsers />,
    },
    {
      name: "Products",
      path: null,
      icon: <RiDashboardLine />,
    },
    {
      name: "My Profile",
      path: null,
      icon: <FaUserCog />,
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
    <div className="flex h-screen">
      <aside className="flex flex-col w-[300px] h-full bg-white/90 py-5">
        <div className="flex items-center gap-2 px-10">
          <div className="rounded-full w-10 h-10 bg-[#41010b]"></div>
          <p className="text-xl font-bold">ShopHub</p>
        </div>
        <div className="mt-10 px-5">
          <ul>
            {sidebarElements.map((item, idx) => (
              <li
                onClick={() => navigate(item.path)}
                key={idx}
                className={` flex items-center justify-between text-[15px] font-medium opacity-70 pl-8 pr-5 py-3 hover:opacity-100 hover:text-primary cursor-pointer transition-all duration-300 ease-in-out ${
                  idx == 0 && "active-link"
                }`}
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
      <main className="flex-1 h-screen overflow-auto bg-bg">
        {noHeader ? null : (
          <header className="w-full h-[120px] flex items-center justify-between px-7 pt-5">
            <button className="border border-primary/30 rounded px-3 py-3 flex items-center gap-2 text-primary">
              <RiServiceFill size={18} className="text-current" />
              <span className="font-medium">Pelemo Stores</span>
              <BiCaretDown className="text-current ml-5" />
            </button>
            <div className="flex gap-3 items-center">
              <button className="relative p-1.5 rounded bg-primary/30">
                <FaBell size={14} className="text-primary" />
              </button>
              <div className="flex items-center gap-2">
                <img className="w-11 rounded-full" src={person} alt="person" />
                {/* <div className="text-sm">
                <p className="font-semibold leading-4 text-base">Isah Hamza</p>
                <p>Admin</p>
              </div> */}
              </div>
            </div>
          </header>
        )}
        <section className="">{children}</section>
      </main>
    </div>
  );
};

export default AppLayoutNew;
