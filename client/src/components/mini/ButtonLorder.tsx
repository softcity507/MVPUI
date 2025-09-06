import React from "react";

interface ButtonLoaderProps {
  text?: string;
  loading?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";  

  // Customization
  color?: string;  
  textColor?: string; 
  size?: "sm" | "md" | "lg"; 
  btnClass?: string;
  className?: string;  
}

export const ButtonLoader: React.FC<ButtonLoaderProps> = ({
  text,
  loading = false,
  onClick,
  disabled = false,
  type = "button", // ✅ default
  color = "bg-indigo-600",
  textColor = "text-white",
  size = "md",
  btnClass,
  className = "",
}) => {
  const sizeClasses = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      type={type} // ✅ apply correctly
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        flex items-center justify-center gap-2 rounded-full font-medium 
        ${color} ${textColor} ${sizeClasses[size]} 
        disabled:opacity-60 disabled:cursor-not-allowed 
        transition duration-200 ease-in-out ${className} ${btnClass}
      `}
    >
      {loading && (
        <svg
          className="animate-spin h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          ></path>
        </svg>
      )}
      {loading ? "Please wait..." : text}
    </button>
  );
};
