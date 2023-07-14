import React from "react";
// import "../../index.css";
// import "../../styles/login.css";
import appScreenshot from "../assets/images/app-screenshot.png";

import "../styles/login.css";
import "../index.css";
import SimpleSlider from "../components/Slider";

const AuthPagesLayout = ({ children }) => {
  return (
    <main className="authPages login  flex flex-row-reverse">
      <SimpleSlider>
        <section className="right custom-bg h-full !flex flex-1">
          <div className="login-footer mt-auto mb-2">
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
          <div className="flex justify-center gap-1 items-center mb-3">
            <div className="bg-secondary w-1.5 h-1.5 rounded-full"></div>
            <div className="bg-white w-1.5 h-1.5 rounded-full"></div>
            <div className="bg-white w-1.5 h-1.5 rounded-full"></div>
          </div>
          <div className="login-img">
            <img src={appScreenshot} className="rounded-xl h-[80%]" alt="img" />
          </div>
        </section>
        <section className="right custom-bg h-full !flex flex-1">
          <div className="login-footer mt-auto mb-2">
            <h3 className="font-semibold !leading-5">
              {" "}
              <span className="text-secondary font-semibold">Manage</span> all
              your business operations.
            </h3>
            <p className="!text-sm max-w-[450px]">
              Keep all your business records, customers, inventories, orders and
              suppliers in one space.
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
        <section className="right custom-bg h-full !flex flex-1">
          <div className="login-footer mt-auto mb-2">
            <h3 className="font-semibold !leading-5">
              {" "}
              <span className="text-secondary font-semibold">Reduce</span> your
              overhead cost{" "}
            </h3>
            <p className="!text-sm max-w-[450px]">
              With ShopHub logistics and overhead group, we help you get cheaper goods and also connect you directly with suppliers
            </p>
          </div>
          <div className="flex justify-center gap-1 items-center mb-3">
            <div className="bg-white w-1.5 h-1.5 rounded-full"></div>
            <div className="bg-white w-1.5 h-1.5 rounded-full"></div>
            <div className="bg-secondary w-1.5 h-1.5 rounded-full"></div>
          </div>
          <div className="login-img">
            <img src={appScreenshot} className="rounded-xl h-[80%]" alt="img" />
          </div>
        </section>
      </SimpleSlider>
      <section className="max-w-[400px] relative left !bg-white/90 flex justify-center items-center h-screen overflow-auto">
        {children}
      </section>
    </main>
  );
};

export default AuthPagesLayout;
