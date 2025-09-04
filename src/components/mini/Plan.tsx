import React from "react";
import { CallToAction } from "./CallToAction";
import { Description } from "./Description";
import { Heading } from "./Heading";
import { RiArrowRightCircleFill } from "react-icons/ri";

interface PlanProps {
  topText: string;
  planType: string;
  describe: string;
  options: { option: string }[];
  account: string;
  funnels: string;
  limited: string;
  lastText: string;
  btndesc: string;
  btntext: string;
  pastprice?: string;
}

export const Plan: React.FC<PlanProps> = ({
  topText,
  planType,
  describe,
  options,
  account,
  funnels,
  limited,
  lastText,
  btndesc,
  btntext,
  pastprice,

}) => {
  return (
    <div className="bg-gradient-to-r border border-blue-400 hover:border-blue-700 from-gray-100 to-gray-200 
   rounded-[10px] m-2 p-4 flex flex-col h-auto [@media(min-width:786px)]:w-[33%]">

      <Description text={topText} desClass="h-[30px] pt-3 text-blue-500" />
      <Heading text={planType} className=" text-[35px]" />
      <Description text={describe} desClass="  h-auto text-[20px] w-[100%] p-2" />

      {/* Options List */}
      <div className="option h-[120px]   p-2">
        {options.map((opt, index) => (
          <div
            key={index}
            className="flex justify-center gap-2  text-sm font-medium text-gray-700"
          >
            <RiArrowRightCircleFill size={20} className="text-blue-500" />
            <Description text={opt?.option} desClass="text-left text-[15px] " />
          </div>
        ))}
      </div>

      {/* Account & Funnels Info */}
      <div className="flex  justify-center  items-center">
        <Heading text={account}
          className="h-[50px] text-[35px] " />
        
        <Heading text={pastprice ?? ""} className="h-[50px] ml-5 text-[35px] line-through " />
      </div>

      <Description text={funnels} desClass="text-[40px] w-[100%]" />
      <Heading text={ limited}
        className="text-[20px] w-full font-medium " />

      <CallToAction
        mainText={btntext}
        subText={btndesc}
        gradient="from-blue-700 to-blue-400"
        rounded
        loarding={account}

      />


      <Description text={lastText} desClass="w-[95%] h-[50px] pt-5   " />
    </div>
  );
};
