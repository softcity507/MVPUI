import { GiSpeaker } from "react-icons/gi";
import { CallToAction } from "./CallToAction";
export const Video = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full   space-y-[20px]">
            <div className="aspect-video w-[90%]   overflow-hidden m-1 rounded-[5px] [@media(max-width:426px)]:w-[95%] bg-black">
                <div className="h-[30px] flex text-[#fff] justify-center items-center bg-[#02182F] font-normal">
                    <div className="flex justify-center items-center">
                        <span className="mx-1">
                            <GiSpeaker size={20} />
                        </span>
                         <span className="text-[12px] font-normal"> WATCH DEMO VIDEO HERE (SOUND ON!)</span>
                    </div>
                </div>
                <div className="h-[95%] w-[100%]">
                    <iframe
                        className="w-full h-full block bg-cover"
                        src="https://www.youtube.com/embed/uP5pZ2Msl2c?si=RuzzjeEjHB-Wk6KE"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
          <CallToAction
  mainText="Create Your Free Account"
  subText="First three Funnels are free"
  gradient="from-blue-700 to-blue-200"
  rounded
  
 />


        </div>
    );
};
