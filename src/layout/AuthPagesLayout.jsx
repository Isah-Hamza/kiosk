import React from "react";
// import "../../index.css";
// import "../../styles/login.css";
// import appScreenshot from "../assets/images/app-screenshot.png";
import loginImg from "../assets/images/undraw_edited-removebg-preview.png";

import "../styles/login.css";
import "../index.css";
import SimpleSlider from "../components/Slider";

const AuthPagesLayout = ({ children }) => {
  return (
    <main className="authPages login grid grid-cols-2">
      <section className="right bg-primaryColor-900 h-full !flex">
        <div className="login-img">
          {/* <img src={loginImg} alt="img" /> */}
        </div>
        <div className="flex justify-center gap-1 items-center mb-3">
          <div className="bg-white w-1.5 h-1.5 rounded-full"></div>
          <div className="bg-secondary w-1.5 h-1.5 rounded-full"></div>
          <div className="bg-white w-1.5 h-1.5 rounded-full"></div>
        </div>
        <div className="login-footer mt-auto ">
          <h3 className="font-semibold !leading-5">
            {" "}
            <span className="text-secondary font-semibold">Grow</span> your
            business with ShopHop.
          </h3>
          <p className="!text-sm max-w-[450px]">
            With ShopHub you now have access to finance that helps grow your
            business savings, loans and joining a coperative society
          </p>
        </div>
      </section>
      <section className="relative left !bg-white/90 flex justify-center items-center h-screen overflow-auto">
        {children}
      </section>
    </main>
  );
};

export default AuthPagesLayout;
