import { useState } from "react";
import logo from "../../assets/rbg/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { IoReorderThree, IoBookOutline } from "react-icons/io5";
import { AiOutlineGlobal } from "react-icons/ai";
import { CircleCheck } from "lucide-react";
import { CiFilter } from "react-icons/ci";
import { BsClockHistory, BsPerson } from "react-icons/bs";
import { Info } from "../../pages/utils/Tostify";
import { Description } from "../mini/Description";

// Type for sidebar link
interface SidebarLink {
  name: string;
  path: string;
  icon: JSX.Element;
}

const Sidebar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const localDomain=localStorage.getItem("domain")
  const navigate=useNavigate()
  // Dummy logout function (replace with actual logic)
  const logout = (): void => {
    console.log("Logout clicked");
    navigate("/")
    Info("you are logOut")
  };
   // Sidebar links with proper type
  const links: SidebarLink[] = [
    { name: "Template", path: "/confirmed/template", icon: <CiFilter size={25} /> },
    { name: "Brand", path: "/confirmed/brand", icon: <CircleCheck size={25} /> },
    { name: "Domain", path: "/confirmed/domain", icon: <AiOutlineGlobal size={25} /> },
    { name: "Profile", path: "/confirmed/profile", icon: <BsPerson size={25} /> },
    { name: "History", path: "/confirmed/history", icon: <BsClockHistory size={25} /> },
    { name: "Help center", path: "/confirmed/contact", icon: <IoBookOutline size={25} /> },
  ];

  return (
    <>
       {!open && (
        <button
          className="lg:hidden fixed  z-50 p-4 rounded-md"
          onClick={() => setOpen(!open)}
        >
          <IoReorderThree className="text-gray-800" size={25} />
        </button>
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-[100vh] w-[75%] sm:w-[60%] md:w-[40%] 
          bg-gray-800 text-white shadow-lg transform 
          transition-transform duration-300 ease-in-out z-40
          ${open ? "translate-x-0" : "-translate-x-full"} 
          lg:relative lg:translate-x-0 lg:w-[20%] min-h-[100vh] h-auto
        `}
      >
        <div className="p-6 space-y-6">
      <div className="flex justify-center">
            <img onClick={()=>navigate("/confirmed/template")} className="w-[70px] h-[70px]" src={logo} />
          </div>

          {/* Links */}
          <nav className="space-y-2">
            {links.map((link, index) => (
              <div
                key={index}
                onClick={() => setOpen(false)}
                className="flex items-center gap-x-4 gap-y-2 hover:text-gray-300 cursor-pointer"
              >
                {link.icon} <Link to={link.path}><Description text={link.name} desClass="text-[25px]"/></Link>
              </div>
            ))}

           <div className="flex flex-col items-center gap-3 hover:text-gray-300">
              <div className="flex w-full items-center gap-3 h-[4px] bg-[#fff] rounded-[5px]"></div>
              <span className="text-[#fff] text-[10px]">
                You have 3 credits remaining
              </span>
            </div>
          </nav>
        </div>

       <div className="flex justify-center items-center gap-3 p-4">
          <button
            className="text-red-400 cursor-pointer border px-4 py-1 rounded-full"
            onClick={logout}
          >
            LogOut
          </button>
        </div>
      </div>
      {open && (
        <div
          className="fixed inset-0 bg-black/50 lg:hidden z-30"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
