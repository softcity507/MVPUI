import { Hero } from "../mini/Hero"
import { Video } from "../mini/Vedio"

export const HeroSection=()=>{
    return(
        <div className="flex pb-10 flex-col items-center h-auto bg-gradient-to-b  from-gray-50 via-gray-200 to-gray-300">
          <Hero
            mainText="Your Funnels Generated in Seconds "
            highlightText="Using AI"
            subText='Pick a proven funnel template, add your own offer and let "MVP" write the copy and build the funnel for you.'
            
          />
          <Video />
        </div>
    )
}