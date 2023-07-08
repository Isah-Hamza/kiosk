import React from "react";
// import "../../index.css";
// import "../../styles/login.css";
import loginImg from "../assets/images/undraw_Successful_purchase_re_mpig.svg";

import '../styles/login.css';
import '../index.css';

const AuthPagesLayout = ({ children }) => {
  return (
    <main className="login">
      <section className="right h-full !flex">
        <div className="login-img">
          <img src={loginImg} alt="img" />
        </div>
        <div className="flex justify-center gap-1 items-center mb-3">
          <div className="bg-black w-1.5 h-1.5 rounded-full"></div>
          <div className="bg-white w-1.5 h-1.5 rounded-full"></div>
          <div className="bg-black w-1.5 h-1.5 rounded-full"></div>
        </div>
        <div className="login-footer mt-auto">
          <h3 className="font-semibold !leading-5">ShopHub</h3>
          <p className="max-w-[350px]">
            Unleash the power of convenience, speed, and reliability. Shop
            smarter, ship faster with our all-in-one online shopping and
            logistics platform.
          </p>
        </div>
      </section>
      <section className="relative left !bg-white/90 h-full flex justify-center items-center">{children}</section>
    </main>
  );
};

export default AuthPagesLayout;
