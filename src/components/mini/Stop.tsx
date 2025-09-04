import React from "react";

interface StopProps {
  icon: React.ReactNode;   // React icon or JSX
  text: string;            // Text content
  className?: string;      // Optional extra classes for container
  iconClassName?: string;  // Optional extra classes for icon
  textClassName?: string;  // Optional extra classes for text
}

export const Stop: React.FC<StopProps> = ({
  icon,
  text,
  className = "",
  iconClassName = "",
  textClassName = "",
}) => {
  return (
    <div
      className={`stop border flex p-5 items-center  bg-[#fff] rounded-[10px] border-blue-500  mt-5  ${className}`}
    >
      <div className={`icon ${iconClassName}`}>{icon}</div>
      <div className={`text ${textClassName}`}>{text}</div>
    </div>
  );
};
