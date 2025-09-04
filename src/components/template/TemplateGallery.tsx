import { useNavigate } from "react-router-dom";
import { ButtonLoader } from "../mini/ButtonLorder";
import { Description } from "../mini/Description";
import { Heading } from "../mini/Heading";

// Define template type
interface Template {
  id: string;
  name: string;
  desc: string;
  image: string;
  file: string;
}

export default function TemplateGallery() {
  const navigate = useNavigate();

  const templates: Template[] = [
    {
      id: "logoipsum",
      name: "Logo Ipsum Funnel",
      desc: "Display your funnel-building expertise using Gusten's portfolio template. It's structured to highlight your past projects, client testimonials, and services offered, providing potential clients with a comprehensive view of your capabilities.",
      image: "/templates/images/template-39.png",
      file: "/templates/logoipsum.html",
    },
    {
      id: "creator1",
      name: "Female Personal Brand",
      desc: "Build a strong personal brand with this template tailored for women in business. It offers sections to highlight your story, showcase your expertise, and connect with your audience, all wrapped in a design that reflects elegance and authenticity.",
      image: "/templates/images/template-38.png",
      file: "/templates/creator.html",
    },
    {
      id: "creator2",
      name: "Female Personal Brand",
      desc: "Build a strong personal brand with this template tailored for women in business. It offers sections to highlight your story, showcase your expertise, and connect with your audience, all wrapped in a design that reflects elegance and authenticity.",
      image: "https://app.aifunnels.ai/img/templates/template-38.png",
      file: "/templates/creator.html",
    },
  ];

  const handleClick = (id: string, name: string) => {
    navigate(`/confirmed/scratch?id=${id}`); // passing id as query param
    console.log("Selected Template:", id, name);
  };

  return (
    <div className="grid lg:grid-cols-3 py-10 md:grid-cols-2 mx-2 grid-cols-1 gap-6 h-auto overflow-hidden">
      {templates.map((tpl) => (
        <div key={tpl.id} className="flex justify-center  h-[530px]">
          <div
            className=" rounded-md w-[95%] p-2 bg-white shadow-xl 
                       transform transition duration-300 hover:scale-105"
          >
            {/* Thumbnail */}
            <img
              src={tpl.image}
              alt={tpl.name}
              className="w-full h-[30%] object-cover"
            />
            <div className="flex justify-between items-center p-1">
              <Heading text={tpl.name} className=" text-left 
              text-[10px]" />
              <a
                href={tpl.file}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600  hover:underline h-[10%]"
              >
                Preview
              </a>
            </div>
            <div className="min-h-[250px] p-2 ">
              <Description text={tpl.desc} />
            </div>
            <div className=" ">
              <Heading text="Build on:" className="text-center 
              h-[5%] " />
              <div className="flex justify-center m-2 ">
                <ButtonLoader
                  text="GoHighLevel"
                  onClick={() => handleClick(tpl.id, tpl.name)}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
