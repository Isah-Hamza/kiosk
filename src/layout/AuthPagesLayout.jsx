import React from "react";
// import "../../index.css";
// import "../../styles/login.css";
import appScreenshot from "../assets/images/app-screenshot.png";

import "../styles/login.css";
import "../index.css";

const AuthPagesLayout = ({ children }) => {
  return (
    <main className="authPages login  flex flex-row-reverse">
      <section className="right custom-bg h-full !flex flex-1">
        <div className="login-footer mt-auto mb-2">
          <h3 className="font-semibold !leading-5">
            {" "}
            Welcome to <b>ShopHub</b> your one-stop shop.
          </h3>
          <p className="!text-sm max-w-[450px]">
            Unleash the power of convenience, speed, and reliability. Shop
            smarter, ship faster with our all-in-one online shopping and
            logistics platform.
          </p>
        </div>
        <div className="flex justify-center gap-1 items-center mb-3">
          <div className="bg-white w-1.5 h-1.5 rounded-full"></div>
          <div className="bg-secondary w-1.5 h-1.5 rounded-full"></div>
          <div className="bg-white w-1.5 h-1.5 rounded-full"></div>
        </div>
        <div className="login-img">
          <img src={appScreenshot} className="rounded-xl h-[80%]" alt="img" />
        </div>
      </section>
      <section className="max-w-[400px] relative left !bg-white/90 h-full flex justify-center items-center h-screen overflow-auto">
        {children}
      </section>
    </main>
  );
};

export default AuthPagesLayout;
