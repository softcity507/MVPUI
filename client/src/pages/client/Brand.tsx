import { useState } from "react";
import HeaderSection from "../../components/small/DashboardHead";
import { useNavigate } from "react-router-dom";
import MultiStepFormBrand from "../../components/small/MultiStepFormBrand";
 
  
export default function  Brand() {
 const [form,setForm]=useState(false)
const handleClick=()=>{
   setForm(!form)
}
  return (
    <div className="flex flex-col rounded-lg p-4 w-full">
        <HeaderSection
               heading={`Brand`}
               name={` ${form? "Hide":"Add"} New Brand`}
               onButtonClick={handleClick } 
        />
        
         {
          form && <MultiStepFormBrand/>
         }    

     </div>
  );
}
