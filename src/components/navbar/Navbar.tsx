import { Link } from "react-router-dom";
import { TbMailFilled } from "react-icons/tb";
import logo from "../../assets/rbg/logo.png"
export default function Navbar() {
  return (
    <nav className="bg-[#292F49] text-white m-4 px-2 sticky top-0 z-50  rounded-full  ">
      <div className="flex flex-row justify-between   items-center [@media(max-width:426px)]:justify-center w-full">
        {/* First part: always visible */}
        <Link to="/" className="font-bold md:mb-0   border-white">
          <img className="w-[60px] h-[60px]" src={logo} alt="logo" />
        </Link>

        {/* Second part: hidden on small screens, visible on md and larger */}
        <div className="hidden  [@media(min-width:426px)]:block tracking-wide text-[15px]  border-white uppercase">
        <p className="flex justify-center items-center"><TbMailFilled /><span className="mx-1">support@MVP.AI</span> </p>

        </div>

      </div>
    </nav>
  );
}
