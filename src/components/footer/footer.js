import React from "react";
import { AiOutlineCopyright } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-gray-500 w-full h-[5rem] text-white text-lg mt-20">
      <div className="max-w-[90%] flex justify-between items-center px-4 py-2 mx-auto h-full">
        <CustomContainer gap={"gap-2"}>
          <AiOutlineCopyright size={20} />
          <div className="font-medium">2023 Company</div>
        </CustomContainer>
        <div className="hidden md:flex">
          <CustomContainer gap={"gap-6"}>
            <div className="cursor-pointer text-lg">About</div>
            <div className="cursor-pointer text-lg">Terms of use</div>
            <div className="cursor-pointer text-lg">Contact</div>
          </CustomContainer>
        </div>
      </div>
    </div>
  );
};

export default Footer;

const CustomContainer = ({ children, gap }) => {
  return (
    <div className={`flex justify-start items-center ${gap ? gap : "gap-2"}`}>
      {children}
    </div>
  );
};