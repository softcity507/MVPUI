import React from "react";
import { Description } from "./Description";

interface CustomInputProps {
  label?: string;
  name: string; // required if used in form
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  type?: "text" | "email" | "password" | "number" | "select";
  required?: boolean;
  about?: string;
  error?: string;
  options?: string[]; 
  placeholder?:string
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  required = false,
  about,
  error,
  options = [],
  placeholder
}) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-medium mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      {type === "select" ? (
        <select
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className={`w-full px-3 py-2 text-gray-600 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${error ? "border-red-500" : "border-gray-300"}`}
        >
          <option value="">{placeholder ? placeholder : label}</option>
          {options.map((opt,i) => (
            <option key={i} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className={`w-full px-3 py-2 text-gray-600 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400 ${error ? "border-red-500" : "border-gray-300"}`}
          placeholder={placeholder ? placeholder :label}
        />
      )}
       {error && <Description text={error} desClass="text-red-500" />} <br/>
      {about && <Description text={about} desClass="" />}
     </div>
  );
};

export default CustomInput;
