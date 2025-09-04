import React from "react";
import { Transition } from "@headlessui/react"; // For smooth mounting/unmounting
import { CgClose } from "react-icons/cg";

interface BlackDialogProps {
  open: boolean;
  title: string;
  onCloseOrSubmit: () => void;
  children: React.ReactNode;
  submitText?: string;
}

export const BlackDialog: React.FC<BlackDialogProps> = ({
  open,
  title,
  onCloseOrSubmit,
  children,
  submitText
 }) => {
  return (
    <Transition show={open} appear >
      {/* Background Overlay */}
      <Transition.Child
        enter="transition-opacity ease-in-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-in-out duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0   bg-opacity-60 z-40"  />
      </Transition.Child>

      {/* Dialog Container */}
      <Transition.Child
        enter="transition-all ease-in-out duration-300"
        enterFrom="opacity-0 scale-90 translate-y-4"
        enterTo="opacity-100 scale-100 translate-y-0"
        leave="transition-all ease-in-out duration-300"
        leaveFrom="opacity-100 scale-100 translate-y-0"
        leaveTo="opacity-0 scale-90 translate-y-4"
      >
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-gray-100  w-full max-w-md rounded-lg shadow-lg">
               <div className="flex justify-end p-1 ">
              <button
                onClick={onCloseOrSubmit}
                className="text-red-500 border rounded-full p-1 hover:bg-red-100  hover:text-red-700 transition-colors"
              >
                <CgClose className="text-red-500 hover:text-red-700"/>
              </button>
              </div>
            <div className="flex flex-col justify-between items-center p-4 bg-gray-400 border-b border-[#2d2d2d] text-white">
              <p className="text-lg text-center font-medium flex flex-col"><span> {title} </span> <span>{submitText}</span></p>
            </div>

            
            <div className="p-6 text-white h-auto">{children}</div>

            
          </div>
        </div>
      </Transition.Child>
    </Transition>
  );
};
