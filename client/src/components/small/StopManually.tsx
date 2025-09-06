import { CallToAction } from "../mini/CallToAction";
import { Heading } from "../mini/Heading";
import { Stop } from "../mini/Stop";
import { Hero } from "../mini/Hero"
import { AiFillCloseCircle } from "react-icons/ai";
import { Description } from "../mini/Description";

export const StopMannully = () => {
    const close = <AiFillCloseCircle size={25} className="text-red-400" />

    const stoparray = [
        {
            icon: close,
            text: `No more staring at a blank screen wondering what sales funnel type you need.`
        },
        {
            icon: close,
            text: `Stop manually building your sales funnels from scratch and wasting valuable time.`
        }, {
            icon: close,
            text: `Enough wondering what to write as your sales copy - instead have MVP write it for you.`
        }
    ]


    return (
        <div className="w-full flex flex-col justify-center  [@media(min-width:426px)]:m-10 py-10   ">
            {/* <p className="">WHY MVP:</p> */}
            <Description text="WHY MVP:" desClass="text-center text-[30px] " />
            <div className="flex justify-center" >
                <Hero

                    mainText="Stop Building Funnels "
                    highlightText="Manually"
                />
            </div>

            {
                stoparray.map((item, index) => {
                    return (
                        <div key={index} className="flex justify-center items-center gap-2">

                            <Stop

                                icon={item.icon}
                                text={item.text}
                                className="[@media(min-width:426px)]:w-[60%] [@media(max-width:426px)]:w-[100%] flex"
                                iconClassName="   p-1  "
                                textClassName=" text-[15px] " />

                        </div>
                    )
                })
            }

            <div className="mt-10">
                <Heading text="Let AI do the work for you!" className=" lg:text-[35px] text-[25px]" />
                <CallToAction
                    mainText="Create Your Free Account"
                    subText="First three Funnels are free"
                    gradient="from-blue-700 to-blue-200"
                    rounded
                />
            </div>

        </div>
    )


}