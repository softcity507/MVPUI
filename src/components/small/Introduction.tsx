import { Description } from "../mini/Description"
import { Hero } from "../mini/Hero"
import aiFunel from "../../assets/rbg/setscreenShort.png"
import { Heading } from "../mini/Heading"
import { CallToAction } from "../mini/CallToAction"

export const Introduction = () => {
  return (
    <div className="flex flex-col items-center px-3 bg-[#eef1f7] justify-centerx py-10">

      <Hero
        mainText="Introducing: The Ultimate MVP Generator"
        mainClass=""
        subText="Generate your sales funnels with a click of a button, using AI."
      />

      <div className="p-1 bg-blue-50 flex justify-center rounded-[7px] border-gray-400">
        <img src={aiFunel} alt="aiFunel" className="
        rounded-[7px] w-[100%] h-[100%]" />
      </div>
      
      <Heading text="Get your first 3 funnels free of charge!"
        className="[@media(min-width:426px)]:text-[30px] 
      [@media(max-width:425px)]:text-[25px] "/>
      {/* <Description text="Just download the Chrome extension and try it out for free." desClass="" /> */}
        <CallToAction
          mainText="Create Your Free Account"
          subText="First three Funnels are free"
          gradient="from-blue-700 to-blue-200"
          rounded
        />



    </div>
  )
}