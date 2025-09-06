import React, { ChangeEvent, useState } from "react";
import payment from "../../assets/rbg/payment.png";
import { BlackDialogWrapper } from "./BlackDialogWrapper";
import CustomInput from "./Custom";
import { Error, Success } from "../../pages/utils/Tostify";
import { useNavigate } from "react-router-dom";
import { ButtonLoader } from "./ButtonLorder";
import API from "../../utils/api";

interface CallToActionProps {
  mainText: string;
  subText?: string;
  gradient?: string;
  rounded?: boolean;
  classes?: string;
  loarding?: string; // typo kept as per your prop
}

export const CallToAction: React.FC<CallToActionProps> = ({
  mainText,
  subText,
  classes,
  gradient = "from-green-400 to-green-600",
  rounded = true,
  loarding,
}) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [loard, setLoard] = useState(false)
  const navigate = useNavigate()
  const [loading, setLoading] = React.useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });
  const handleAction = () => {
    console.log("Dialog closed or submitted");
    setDialogOpen(false);
  };
const handleChange = (
  
 e: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
) => {
    const { name, value } = e.target;

    if (name === "email") {
      if (value.length > 10) {
        const eRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!eRegex.test(value)) {
          const lastChar = value[value.length - 1];
          if (lastChar !== "." && lastChar !== "@") {
            Error("Please enter a valid email address");
          }
        }
      }
    }

    setFormData((prev) => ({ ...prev, [name]: value }));

  };

  const handleSubmit = async() => {
     setLoading(true);
   
     try {
 
        localStorage.setItem("user", JSON.stringify(formData));
       Success("Form Submitted Successfully")
       navigate("/welcome")
       setTimeout(() => {
         setLoading(false);
       },2000)
      
     } catch (error) {
        Error("Please try again, something went wrong")
     }

  };




  const handleClick = () => {
    if (loarding === "Just $497" || loarding === "Just $297") {
      setLoard(true)
      setTimeout(() => {
        setLoard(false);
        // setDialogOpen(true);
        navigate("/payments")

      }, 2000);
    } else {
      setLoard(false)
      setDialogOpen(true);

    }
  };

  return (
    <div className="flex flex-col justify-center items-center" >
       <BlackDialogWrapper
        open={dialogOpen}
        title="Get FREE ACCESS to 'MVP' "
        submitText="Where should we send the login details?"
        onCloseOrSubmit={handleAction}
      >

        <form className="max-w-md flex flex-col justify-center  mx-auto p-6 bg-gray-100 rounded-lg">
          <CustomInput
            label="Name"
            placeholder="Enter your Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <CustomInput
            label="Email"
            placeholder="Enter your valid Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />


          <ButtonLoader
            onClick={handleSubmit}
            type="submit"
            text="Get instance Free Access"
            btnClass="border  hover:border-blue-500 hover:bg-blue-200 hover:text-blue-600 px-6 py-3 rounded-[15px] border-blue-400 text-blue-700"
            loading={loading}
          />
        </form>



      </BlackDialogWrapper>

      {/* Button */}
      <div className="flex justify-center items-center mt-5 font-normal w-full">
        <button
          type="button"
          disabled={false}
          className={`flex  ${loard ? "flex-row" : "flex-col"} items-center  px-6 py-3 cursor-pointer text-white bg-gradient-to-t ${gradient} 
            ${rounded ? "rounded-full" : "rounded-lg"} ${classes}
            ${loarding ? "opacity-75 cursor-not-allowed" : ""}`}
          onClick={handleClick}
        >
          {loard && (
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

          <span className="text-lg sm:text-xl md:text-2xl">
            {loard ? "Processing..." : mainText}
          </span>

          {!loard && subText && <span className="text-sm">{subText}</span>}
        </button>
      </div>

      {/* Payment Image */}
      <div className="flex justify-center items-center mt-3">
        <img className="w-[200px]" src={payment} alt="payments" />
      </div>
    </div>
  );
};
