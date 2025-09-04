import React from "react";

interface CustomTextareaProps {
  label?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  rows?: number;
  error?: string;
  description?: string;
  className?: string;
}

const CustomTextarea: React.FC<CustomTextareaProps> = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  rows = 4,
  error,
  description,
  className = "",
}) => {
  return (
    <div className="my-4">
      {label && <p className="mb-1 text-gray-700">{label}</p>}

      <textarea
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
        placeholder={placeholder}
        className={`w-full px-3 py-2 text-gray-600 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-y ${className} ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />

      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}

      {description  && (
        <p className="mt-1 text-sm text-gray-500">{description}</p>
      )}
    </div>
  );
};

export default CustomTextarea;
