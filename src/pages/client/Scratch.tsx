import { Heading } from "../../components/mini/Heading"
import HeaderSection from "../../components/small/DashboardHead"
import { FaRegPenToSquare } from "react-icons/fa6";
import { CiBookmarkCheck } from "react-icons/ci";
import { Description } from "../../components/mini/Description";
import { useNavigate } from "react-router-dom";

export const Scratch = () => {
    const navigate = useNavigate()

    const goToform = () => {
        navigate("/confirmed/addbrand")
    }

    return (
        <div className="flex flex-col justify-center items-center">

            <div className="h-[100px] flex justify-center items-center">
                <Heading text="Template Details - Setup Wizard" className="text-[30px]" />

            </div>
            <div className="border lg:w-[80%] m-2 rounded p-5 flex flex-col justify-center    border-gray-300">
                <Heading text="How would you like to set up your brand details for this page?" className="lg:text-[20px]" />
                <div className="grid md:grid-cols-2 cols-1  gap-5 mt-5 ">


                    <div onClick={goToform}  className="group border  rounded flex flex-col justify-between  items-center py-5 px-15 border-gray-300  hover:border-gray-500 cursor-pointer transition hover:scale-105">
                        <div className="icon w-[60px] h-[60px] rounded-full bg-blue-200 flex justify-center items-center text-white transition group-hover:bg-white group-hover:text-slate-500">
                            <FaRegPenToSquare size={30} />
                        </div>
                        <Heading text="Start From Scratch" className="" />
                        <Description text="Manually enter your brand, offer, and audience details." desClass="text-gray-600" />
                    </div>
                    <div onClick={goToform} className="group border  rounded flex flex-col justify-center items-center py-5 px-15 border-gray-300 hover:border-gray-500 cursor-pointer transition hover:scale-105">
                        <div className="icon w-[60px] h-[60px] rounded-full bg-blue-200 flex justify-center items-center text-white transition group-hover:bg-white group-hover:text-slate-500">
                            <CiBookmarkCheck size={30} />
                        </div>
                        <Heading text="Use Existing Brand Details" className="" />
                        <Description text="Load previously saved brand details to get started quickly." desClass="text-gray-600" />
                    </div>

                </div>
            </div>
        </div>)
}