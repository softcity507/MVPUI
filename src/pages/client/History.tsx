import { Empty } from "antd";
import { Description } from "../../components/mini/Description";
import { Heading } from "../../components/mini/Heading";
import HeaderSection from "../../components/small/DashboardHead";

 
  
export default function History() {


  return (
    <div className="flex flex-col w-full items-center  h-screen">
      {/* <div className="flex justify-start">
     <Heading
              text={`Histroy`}
              className="lg:block hidden text-left  text-gray-700 mt-10 text-[30px]"
            />
    </div> */}
          <div className="lg:block hidden w-full">

       <HeaderSection
       heading={`History`}
      />
      </div>
     <div className="w-full flex justify-center items-center">
      <div className="bg-gray-100 border rounded py-5 w-[70%] mt-10 ">
        <Empty description="You don't have any history at the moment." />

      </div>
     </div>

     </div>
  );
}
