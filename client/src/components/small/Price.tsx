import { Description } from "../mini/Description"
import { Plan } from "../mini/Plan"
import { Hero } from "../mini/Hero"


interface PlanOption {
  option: string;
}

export interface PlanOffer {
  topText: string;
  planType: string;
  describe: string;
  options: PlanOption[];
  account: string;
  pastprice:string;
  funnels: string;
  limited: string;
  lastText: string;
  btntext: string;
}

export const Price = () => {
   const planOffer: PlanOffer[]=[
    {
  topText:"TRY IT OUT",
  planType:"The Starter Plan",
  describe:"For beginners wanting to try it out risk-free and see how it works.",
  options:[{option:'1 GHL Account'},{option:'3 funnels generated for free'},{option:'Limited access - Try it out'},{option:'Access to funnel building community'}],
  account:"Free Account",
  funnels:"(3 funnels)",
  pastprice:"",
  limited:"Limited time only",
  lastText:"Start free - upgrade in your account",
  btntext:"Get 3 Funels Free",
     },
     {
  topText:"SCALE YOUR BUSINESS",
  planType:"The Business Plan",
  describe:"For those wanting to generate funnels for your own business in seconds, using AI.",
  options:[{option:'1 GHL Account'},{option:'100 funnels generated max per year'},{option:'Lifetime access'},{option:'Access to funnel building community'}],
  account:"Just $297",
  pastprice:"497",
  funnels:"50% OFF (LIFETIME)",
  limited:"First 100 people only",
  lastText:"One time payment - no monthly fees",
  btntext:"Choose Bussiness Plan",
     },
     {
  topText:"USE WITH CLIENT",
  planType:"The Agency Plan",
  describe:"For those wanting to generate funnels for clients, and get paid to build funnels.",
  options:[{option:'100 GHL Client Accounts'},{option:'1,000 funnels generated max per year'},{option:'Lifetime access'},{option:'Access to funnel building community'}],
  account:"Just $497",
  pastprice:"997",
  funnels:"50% OFF (LIFETIME)",
  limited:"First 100 people only",
  lastText:"One time payment - no monthly fees",
  btntext:"Choose Agency plan",
     }

]


    return (

        <div className="flex flex-col py-10  bg-[#F6F6FF]  items-center justify-center ">
            <Description text="PRICING" desClass=" " />
            <Hero mainText="Choose Your Plan"
                 mainClass=" w-full mb-15"
                 />
               <div className="flex  [@media(min-width:786px)]:flex-row flex-col  w-full ">

                
                 {

                     planOffer.map((item,index)=>(
                         <Plan 
                         key={index}
                          btndesc={""} 
                          topText={item?.topText}
                          planType={item?.planType}
                          describe={item?.describe}
                          options={item?.options}
                          pastprice={item?.pastprice}
                          account={item?.account}
                          funnels={item?.funnels}
                          limited={item?.limited}
                          lastText={item?.lastText}
                          btntext={item?.btntext}
                         /> 
                         
                        
                        
                      ))
                }
                </div>
        </div>
    )



}