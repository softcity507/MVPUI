import React from "react";
import { Heading } from "../mini/Heading";
 
interface HeaderSectionProps {
  heading?: string;
  name?: string;
  onButtonClick?: () => void;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({ heading, name, onButtonClick }) => {
  return (
    <div className="w-full flex justify-center mb-5">
    <div className="flex  lg:justify-between border-gray-500 border-b w-[85%] justify-end items-center py-4">
      <Heading
        text={heading}
        className="lg:block hidden text-gray-700 text-[30px]"
      />

      {
    name &&
      <button
        className="border px-4  py-1 text-[25px] rounded-full text-white bg-blue-700"
        onClick={onButtonClick}
      >
        {name}
      </button>
}
    </div>
    </div>
  );
};

export default HeaderSection;
