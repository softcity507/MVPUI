import React from "react";

interface InputProps {
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  name?: string;
}

const FloatingInput: React.FC<InputProps> = ({
  label,
  type = "text",
  value,
  onChange,
  error,
  name,
}) => {
  return (
    <div className="w-full mb-5 relative">
      <div className="relative">
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder=" " // keep empty space for floating label trick
          className={`peer w-full border rounded-md px-3 pt-5 pb-2 text-sm text-gray-900 focus:outline-none focus:border-blue-500 
          ${error ? "border-red-500" : "border-gray-300"}`}
        />
        <label
          className={`absolute left-3 top-1.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-500
          ${error ? "peer-focus:text-red-500 text-red-500" : ""}`}
        >
          {label}
        </label>
      </div>
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
};

export default FloatingInput;
