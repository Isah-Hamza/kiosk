import React, { useState } from "react";
import person from "../assets/images/hamza.jpeg";
import { FaBell, FaRedo, FaUserCog } from "react-icons/fa";
import { FiHome, FiUsers } from "react-icons/fi";
import { BsCreditCard, BsEye, BsPlus } from "react-icons/bs";
import { RiDashboardLine, RiServiceFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { BiCaretDown, BiCaretUp, BiShoppingBag } from "react-icons/bi";
import CustomDropdown from "../components/Dropdown";

const AppLayoutNew = ({ children, noHeader }) => {
  const navigate = useNavigate();
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const toggleSubMenu = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  const sidebarElements = [
    {
      name: "Dashboard",
      path: "/home",
      icon: <FiHome />,
    },
    {
      name: "My Books",
      path: null,
      icon: <BsCreditCard />,
      hasSubMenu: true,
      subMenu: [
        {
          name: "All Expenses",
          path: null,
          icon: <BsCreditCard />,
        },
        {
          name: "All Inventories",
          path: null,
          icon: <BsCreditCard />,
        },
        {
          name: "All Sales",
          path: null,
          icon: <BsCreditCard />,
        },
      ],
    },
    {
      name: "My Customers",
      path: "/customers",
      icon: <FiUsers />,
    },
    {
      name: "Products",
      path: "/products",
      icon: <RiDashboardLine />,
    },
    {
      name: "Orders",
      path: "/orders",
      icon: <BiShoppingBag size={17} />,
    },
    {
      name: "My Profile",
      path: "/profile",
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
          path: null,
          icon: <BsCreditCard />,
        },
        {
          name: "All Inventories",
          path: null,
          icon: <BsCreditCard />,
        },
        {
          name: "All Sales",
          path: null,
          icon: <BsCreditCard />,
        },
      ],
    },
  ];

  const secondarySideBarItems = ["Terms and Conditions", "Help Center"];

  return (
    <div className="flex h-screen">
      <aside className="flex flex-col w-0 xl:w-[300px] h-full bg-white/90 py-5 overflow-hidden transition-all ease-in-out duration-300">
        <div className="flex items-center gap-2 px-10">
          <div className="rounded-full w-10 h-10 bg-[#41010b]"></div>
          <p className="text-xl font-bold">ShopHub</p>
        </div>
        <div className="mt-10 px-5">
          <ul>
            {sidebarElements.map((item, idx) => (
              <li
                key={idx}
                className={`items-center text-sm font-medium opacity-70 pl-8 pr-5 py-3 hover:opacity-100 hover:text-primary cursor-pointer transition-all duration-300 ease-in-out
                ${item.hasSubMenu ? "grid" : "flex"}
                ${item.hasSubMenu && openSubMenu === idx ? "active-link" : ""}`}
              >
                <div
                  className="flex justify-between items-center"
                  onClick={() =>
                    item.hasSubMenu ? toggleSubMenu(idx) : navigate(item.path)
                  }
                >
                  <div className="flex gap-3 items-center font-medium">
                    <span>{item.icon}</span>
                    <span className="whitespace-nowrap">{item.name}</span>
                  </div>
                  {item.hasSubMenu ? (
                    <BiCaretUp
                      size={12}
                      className={` ml-auto block transform ${
                        openSubMenu === idx ? "rotate-0" : "rotate-180"
                      } transition-transform duration-300 origin-center`}
                    />
                  ) : null}
                </div>
                {item.hasSubMenu && openSubMenu === idx ? (
                  <ul className="pl-6 mt-2">
                    {item.subMenu.map((subItem, subIdx) => (
                      <li
                        key={subIdx}
                        onClick={() => navigate(subItem.path)}
                        className="text-sm py-2 hover:opacity-100 !text-black opacity-80 hover:text-primary cursor-pointer transition-all duration-300 ease-in-out"
                      >
                        <div className="flex gap-3 items-center font-medium">
                          <span>{subItem.icon}</span>
                          <span>{subItem.name}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-auto">
          <ul className="px-5">
            {secondarySideBarItems.map((item, idx) => (
              <li
                to={null}
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
            <CustomDropdown />
            <div className="flex gap-3 items-center">
              <button className="relative p-1.5 rounded bg-primary/30">
                <FaBell size={14} className="text-primary" />
              </button>
              <div className="flex items-center gap-2">
                <img className="w-11 rounded-full" src={person} alt="person" />
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
