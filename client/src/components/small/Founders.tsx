import { CallToAction } from "../mini/CallToAction"
import { Description } from "../mini/Description"
import { Heading } from "../mini/Heading"
import { Hero } from "../mini/Hero"

export const Founders = () => {
   const founders=[
    {pick:"",about:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, rerum. Debitis reiciendis quaerat rerum accusantium, maiores quos vel consequatur earum vitae labore amet culpa modi fuga velit aliquid perspiciatis sed aut animi quas consequuntur totam harum, pariatur deleniti! Laudantium officiis commodi possimus necessitatibus nostrum, recusandae sunt totam molestiae quisquam aut dicta explicabo ipsa aliquid ut laboriosam consequatur amet eum! Laborum aliquid repellendus soluta suscipit rem quia maiores voluptatum similique repellat iste, veniam quasi architecto sapiente sunt nisi minus quam? Explicabo ad ex tenetur atque reprehenderit ducimus assumenda vitae, delectus nostrum officia, ratione maxime officiis eum quidem, nulla odio eveniet obcaecati!"},
    {pick:"",about:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, rerum. Debitis reiciendis quaerat rerum accusantium, maiores quos vel consequatur earum vitae labore amet culpa modi fuga velit aliquid perspiciatis sed aut animi quas consequuntur totam harum, pariatur deleniti! Laudantium officiis commodi possimus necessitatibus nostrum, recusandae sunt totam molestiae quisquam aut dicta explicabo ipsa aliquid ut laboriosam consequatur amet eum! Laborum aliquid repellendus soluta suscipit rem quia maiores voluptatum similique repellat iste, veniam quasi architecto sapiente sunt nisi minus quam? Explicabo ad ex tenetur atque reprehenderit ducimus assumenda vitae, delectus nostrum officia, ratione maxime officiis eum quidem, nulla odio eveniet obcaecati!"}
]

  return(
    <div className="founders flex flex-col items-center justify-center gap-5 md:py-20 py-10">
           <Heading text="Meet The Founders "
                     className=" text-[60px]"      />
            <div className="md:flex block ">
                {
                    founders.map((founder,i)=>(
               <div key={i} className="m-4 border p-3 rounded-lg bg-gray-100 border-gray-400">
                <div className="flex justify-center">
                    <img src={founder.pick} className="w-40 h-40 rounded-full bg-slate-400" alt="Founder1" />
                    
                </div>
                 <div>
                    <Description text={founder.about} desClass="text-justify"/>
                        
                    
                 </div>
               </div>

                    ))
                }

            </div>
              <CallToAction
                      mainText="Create Your Free Account"
                      subText="First three Funnels are free"
                      gradient="from-blue-700 to-blue-200"
                      rounded
                    />
        
        </div>
  )
}