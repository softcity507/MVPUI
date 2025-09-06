import React from "react";

interface CustomDialogProps {
  open: boolean;
  title: string;
  submitText: string;
  onCloseOrSubmit: () => void;
  children?: React.ReactNode;
}

export const CustomDialog: React.FC<CustomDialogProps> = ({
  open,
  title,
  submitText,
  onCloseOrSubmit,
  children,
}) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-gray-800 p-6 rounded-lg w-full max-w-md text-white">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <div className="mb-4">{children}</div>
        <button
          onClick={onCloseOrSubmit}
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
        >
          {submitText}
        </button>
      </div>
    </div>
  );
};
