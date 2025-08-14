import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className=" flex items-center justify-between font-medium py-5">
      <img src={assets.logo} alt="Logo" className="w-36" />
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700" />
        </NavLink>
         <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>Collection</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700" />
        </NavLink>
         <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700" />
        </NavLink>
         <NavLink to="/contacts" className="flex flex-col items-center gap-1">
          <p>CONTACTS</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700" />
        </NavLink>
        
      </ul>
    </div>
  );
};

export default Navbar;
