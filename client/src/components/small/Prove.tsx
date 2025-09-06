import { Hero } from "../mini/Hero"
import proveImage from "../../assets/rbg/prove.png"
export const Prove = () => {
  return (
    <div className="md:py-20 py-10">
      <Hero mainText="They're Proven to Convert "
        highlightText=" Funnel Templates, with AI"
        subText="Same layouts and funnel frameworks as my clients get when they pay $5,000-10k for funnels. Now yours inside MVP."
        
         />
      <img src={proveImage} alt="prove images" className="w-full h-auto" />

    </div>
  )
}