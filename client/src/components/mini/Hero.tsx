import React from "react";
import "../small/css/hero.css";

interface HeroProps {
  mainText: string;         // First bold main line
  highlightText?: string;   // Highlighted second part (optional)
  subText?: string; 
  mainClass?:string  ;
  textClass?:string      // Small paragraph under heading
}

export const Hero: React.FC<HeroProps> = ({
  mainText,
  highlightText = "",
  subText = "",
  mainClass,
  textClass
}) => {
  return (
    <div className={` my-3 flex flex-col justify-center items-center space-y-5 ${mainClass}`}>
      {/* Main Heading */}
     <div
  className={`w-[85%] text-center leading-[95%] [@media(min-width:426px)]:text-[70px] [@media(max-width:426px)]:text-[40px] ${textClass}`}
>
  <span className="hero font-bold text-center m-2">
    {mainText}  {highlightText}
  </span>
 
</div>


      {/* Subheading */}
      {subText && (
        <p className="lastChild w-[98%] text-center  [@media(min-width:426px)]:text-[25px] [@media(max-width:426px)]:text-[20px]">
          {subText}
        </p>
      )}
    </div>
  );
};
