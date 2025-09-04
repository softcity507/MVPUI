import { CallToAction } from "../mini/CallToAction"
import { Description } from "../mini/Description"
import { Heading } from "../mini/Heading"
import { HowSimple } from "../mini/HowSimple"
import { Hero } from "../mini/Hero"

export const HowWork = () => {


    return (
        <div className="flex flex-col justify-center py-10  bg-gradient-to-b from-blue-50 to-blue-100">
            <Description text="SUPER SIMPLE TO USE" desClass="" />
            <Hero mainText="Here's How It Works"
                mainClass=" w-full mb-15"
                  />

            <div className="">
                <HowSimple />
                <Heading text="Enjoy the first 3 funnels for free!" className=" lg:text-[35px] text-[25px]" />
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