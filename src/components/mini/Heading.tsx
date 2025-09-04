import React from "react";

interface HeadingProps {
  text?: string;
  className?: string; // optional for extra styles
}

export const Heading: React.FC<HeadingProps> = ({ text, className = "text-[#04162E]" }) => {
  return (
    <h1
      className={` text-center font-bold tracking-wide 
       leading-tight text-[#04162E] ${className}`}
    >
      {text}
    </h1>
  );
};
