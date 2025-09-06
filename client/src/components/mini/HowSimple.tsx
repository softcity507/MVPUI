import { Description } from "./Description";
import { Heading } from "./Heading";

 
export const HowSimple=()=>{
    const steps = [
  {
    image: "https://assets.cdn.filesafe.space/c3cmUrbBhdgs54adfIYP/media/683da496e1360e434a247440.png",
    title: "STEP ONE",
    heading: "Download Chrome Extension",
    description: "Click the button and download the Chrome Extension to get your first 3 funnels generated, using the MVP tool."
  },
  {
    image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/c3cmUrbBhdgs54adfIYP/media/66a0f641640ee72356072b35.png",
    title: "STEP TWO",
    heading: "Choose Funnel Template",
    description: "Pick one of the templates inside MVP and add your domain where you want the funnel built out."
  },
  {
    image: "https://assets.cdn.filesafe.space/c3cmUrbBhdgs54adfIYP/media/683da6fa2fcd90496d27b2a5.png",
    title: "STEP THREE",
    heading: "Launch in Seconds",
    description: "Simply tell us about your product or service and the tool will write all your sales copy for you and add into a pre-made funnel template, proven to convert."
  }
];


    return(
      
      <div className="w-full  flex flex-col justify-center items-center">
        {
          steps.map((step, index) =>(

        <div key={index} className="how-simple   border mb-5 overflow-hidden border-blue-400 py-10 w-[85%] hover:border-blue-200 rounded-[10px] bg-[#fff]">
            
            <div className="block md:flex ">
              <div className="md:w-[40%]  h-full   [@media(max-width:426px)]:w-full flex justify-center items-center">
                <img className="w-[150px] h-[150px]" src={step.image} alt={"Images"}  />
                </div>
            <div className="text-left flex flex-col justify-between px-5   md:w-[60%]">
                <Description text={step.title} desClass="text-left text-[30px] text-blue-400"/>
                <Heading text={step.heading} className="text-left text-[30px]" />
                <Description text={step.description} desClass="text-left text-[18px]"/>
            </div>
            </div>
            
        </div>
          ))
        }
        </div>
    )
}