
import { RxHamburgerMenu } from "react-icons/rx";
import avatar from "../../../src/assets/images/placeholder.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const MenuDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {user, logout} = useAuth();
  return (
    <div className="relative">
      <div className="">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="p-4 md:py-1 md:px-2 border-[1px] border-red-500 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <RxHamburgerMenu className="text-red-600" />
          <div className="hidden md:block">
            <img 
              className="rounded-full" 
              src={user && user.photoURL ? user.photoURL : avatar} width="30" height="30" alt="profileImage" />
          </div>
        </div>
        {isOpen && (
          <div className="absolute rounded-xl shadow-md w-[40vw] md:w-[15vw] bg-teal-300 overflow-hidden right-0 top-12 text-sm text-center">
            <div className="flex flex-col cursor-pointer"> 
              <Link to="/" className="block md:hidden px-4 py-4 font-semibold text-white hover:bg-blue-400 transition">
                Home
              </Link>
              {user ? (
                <>
                  <Link to="/dashbroad" className="px-4 py-3 hover:bg-neutral-100 transation  font-semibold">
                    DashBoard
                  </Link>
                  <div onClick={logout} className="px-4 py-3 hover:bg-neutral-100 transation cursor-pointer font-semibold">
                    Logout
                  </div>
                </>
              ) : (
                <>
                  <Link to="/login" className="px-4 py-3 hover:bg-neutral-100 transation  font-semibold">
                    Login
                  </Link>
                  <Link to="/signup" className="px-4 py-3 hover:bg-neutral-100 transation  font-semibold">
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuDropDown;

