import React from "react";
import '../small/css/hero.css'
interface DescriptionProps {
  text?: string;
  desClass?: string; // optional extra styles
}

export const Description: React.FC<DescriptionProps> = ({ text, desClass = "" }) => {
  return (
    <span
      className={`w-full text-center leading-relaxed 
      
       hero ${desClass?desClass:"[@media(min-width:426px)]:text-[16px] [@media(max-width:425px)]:text-[12px]"} `}
    >
      {text}
    </span>
  );
};
