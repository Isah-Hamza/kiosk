import React, { useState } from "react";
import { BsFacebook } from "react-icons/bs";
import { FaCopy, FaFileImage, FaImages, FaLuggageCart } from "react-icons/fa";
import CustomButton from "../../components/Buttons/CustomButton";
import { FiPlus } from "react-icons/fi";
import { SlSocialFacebook } from "react-icons/sl";
import { AiFillTwitterCircle } from "react-icons/ai";
import { MdWhatsapp } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";
import { ImMail } from "react-icons/im";

const ShareProduct = ({ setShareProduct }) => {
  const product_type = [
    {
      label: "Physical Product",
      value: 1,
    },
    {
      label: "Digital Product",
      value: 2,
    },
  ];

  return (
    <div className="overflow-auto fixed inset-0 bg-black/60 grid place-content-center z-[10001]">
      <div className="max-w-[90%] m-auto sm:min-w-[500px] min-h-[200px]">
        <div className="p-6 bg-white rounded-xl">
          <div className="border-b pb-3 flex items-center justify-between">
            <p className="text-lg font-semibold">Share via </p>
            <button onClick={() => setShareProduct(false)}>
              <FiPlus className="rotate-45" size={22} />
            </button>
          </div>
          <div className="mt-5 items-center flex justify-between pb-5 border-b">
            <BsFacebook size={60} color="#3b5999" className="cursor-pointer" />
            <AiFillTwitterCircle
              size={70}
              color="#55acee"
              className="cursor-pointer"
            />
            <RiWhatsappFill
              size={70}
              color="green"
              className="cursor-pointer"
            />
            <ImMail
              className="rounded-fullcursor-pointer"
              size={60}
              color="#2196f3"
            />
          </div>
          <div className="mt-7 bg-blue-200 rounded-2xl p-5 py-3 mb-3 flex justify-between gap-5 flex-wrap items-center">
            <span className="text-sm text-center sm:text-left">
              www.glowbiz.com/ridiculous-product/123
            </span>
            <CustomButton
              className={
                "w-full sm:w-[unset] justify-center !flex !items-center gap-2 !px-3 rounded-lg !py-2"
              }
            >
              <FaCopy />
              Copy Link
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareProduct;
