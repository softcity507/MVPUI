import { Description } from "../../components/mini/Description"
import { Heading } from "../../components/mini/Heading"
import Navbar from "../../components/navbar/Navbar"
import image from "../../assets/rbg/AIfunels.png"
import Footer from "../../components/footer/Footer"
import API from "../../utils/api"
import { Success } from "../utils/Tostify"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { BlackDialogWrapper } from "../../components/mini/BlackDialogWrapper"
import CustomInput from "../../components/mini/Custom"
import { ButtonLoader } from "../../components/mini/ButtonLorder"


const Welcome = () => {
  const [loading, setLoading] = useState(false)
   const [dialogOpen, setDialogOpen] = useState(false);
  
   const [formData, setFormData] = useState({
     email: "",
    code: ""
    });
  const details=["Check your email (and spam folder) for login details to get started instantly.","If you have any further questions, feel free to email support at support@mvp.ai","We look forward to hearing your feedback as we continue to work hard on making MVP better each day."]
  const navigate =useNavigate()
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
    setFormData((prev) => ({ ...prev, [name]: value }));

  };
   useEffect(()=>{
      setTimeout(()=>{
        setDialogOpen(true)
      },3000)
   },[])

  const handleSubmit = async() => {
     setLoading(true);
       
     try {
        Success("Form Submitted Successfully")
       navigate("/confirmed/template")
       setTimeout(() => {
         setLoading(false);
       },3000)
      
     } catch (error) {
        Error("Please try again")
     }

  };

    return(
        <div className="flex flex-col justify-center bg-gradient-to-b  from-gray-200 via-gray-400 to-gray-600 items-center">
             <header className=" w-full ">
        <Navbar />
      </header>
           <BlackDialogWrapper
                  open={dialogOpen}
                  title="Get FREE ACCESS to 'MVP' "
                  submitText="Where should we send the login code?"
                  onCloseOrSubmit={handleAction}
                >
          
                  <form className="max-w-md flex flex-col justify-center  mx-auto p-6 bg-gray-100 rounded-lg">
                    <CustomInput
                      label="Verification Code"
                      name="code"
                      placeholder="Enter your 6 digit verification code"
                      value={formData.code}
                      onChange={handleChange}
                    />
                    <CustomInput
                      label="Email"
                      name="email"
                      placeholder="Enter your email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
          
          
                    <ButtonLoader
                      onClick={handleSubmit}
                      type="submit"
                      text="Verify"
                      btnClass="border  hover:border-blue-500 hover:bg-blue-200 hover:text-blue-600 px-6 py-3 rounded-[15px] border-blue-400 text-blue-700"
                      loading={loading}
                    />
                  </form>
          
          
          
                </BlackDialogWrapper>
          
         
         <Description text="CONGRATULATIONS - You'RE IN!" desClass=" font-bold text-[#fff] tracking-[5px] p-2 "/>
         <Heading text="Welcome to MVP!"  className="text-[#fff] 
         tracking-[5px] p-2 text-[50px] "/>
         {
            details.map((detail,i)=>(
                <Description key={i} text={detail} desClass="  text-[#fff] p-2 "/>
            ))
         }
         <img src={image} alt="image" className="w-[90%] rounded-[13px]"/>
         <Footer/>
        </div>
    )
}
export default Welcome