import { Founders } from "../../components/small/Founders";
import { HowWork } from "../../components/small/HowWork";
import { Introduction } from "../../components/small/Introduction";
import { Price } from "../../components/small/Price";
import { Prove } from "../../components/small/Prove";
import { Question } from "../../components/small/Question";
import { StopMannully } from "../../components/small/StopManually";
import { HeroSection } from "../../components/small/HeroVideo";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

export default function Home() {
  return (
    <div className=" ">
      <header className=" w-full ">
        <Navbar />
      </header>
      <HeroSection />
      <StopMannully />
      <Introduction />
      <Price />
      <HowWork />
      <Prove />
      <Question />
      <Footer />
    </div>
  );
}
