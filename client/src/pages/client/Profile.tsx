import { useEffect, useState, ChangeEvent } from "react";
import CustomInput from "../../components/mini/Custom";
import { Heading } from "../../components/mini/Heading";
import HeaderSection from "../../components/small/DashboardHead";
import { ButtonLoader } from "../../components/mini/ButtonLorder";

interface FormData {
  name: string;
  email: string;
  oldPassword: string;
  newPassword: string;
  againPassword: string;
}

export default function Profile() {
  const [loard,setLoad]=useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    oldPassword: "",
    newPassword: "",
    againPassword: "",
  });

  // Load local data once on mount
  useEffect(() => {
    const localData = localStorage.getItem("user");
    if (localData) {
      try {
        const parsed = JSON.parse(localData);
        setFormData((prev) => ({
          ...prev,
          name: parsed.name || "",
          email: parsed.email || "",
        }));
      } catch (err) {
        console.error("Invalid user data in localStorage", err);
      }
    }
  }, []);

  // Handle input change
  const handleChange = (
   e: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const showUpdate=()=>{
    setLoad(true)
    console.log("update",formData)
    const data=JSON.stringify(formData)
    localStorage.setItem("user",data)
   setTimeout(()=>{ setLoad(false)},3000)
  }

  return (
    <div className="flex flex-col  justify-center h-full">
      {/* Desktop Header */}
      <div className="lg:block hidden w-ful">
        <HeaderSection heading="Edit Profile" onButtonClick={() => console.log("Save clicked")} />
      </div>

      {/* Form */}
      <div className="flex justify-center w-full">
      <form className="mt-10 space-y-4 w-[70%]">
        <Heading text="Edit Profile" className="lg:hidden" />

        <CustomInput
          label="Name"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
        />

        <CustomInput
          label="Email"
          name="email"
          placeholder="Enter your valid Email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />

        <CustomInput
          label="Old Password"
          placeholder="Enter your old password"
          name="oldPassword"
          type="password"
          value={formData.oldPassword}
          onChange={handleChange}
        />

        <CustomInput
          label="New Password"
          name="newPassword"
          placeholder="Enter your new password"
          type="password"
          value={formData.newPassword}
          onChange={handleChange}
        />

        <CustomInput
          label="Re-enter New Password"
          name="againPassword"
          type="password"
          placeholder="Re-enter your new password"
          value={formData.againPassword}
          onChange={handleChange}
        />
        <div className="flex justify-center mb-5">
        <ButtonLoader
         text="Update"
         loading={loard}
         onClick={showUpdate}
         type={"button"}
        
        /></div>
      </form>
      </div>
    </div>
  );
}
