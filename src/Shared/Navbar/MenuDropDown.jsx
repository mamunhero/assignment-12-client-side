import { RxHamburgerMenu } from "react-icons/rx";
import avater from "../../../src/assets/images/placeholder.jpg";


const MenuDropDown = () => {
  return (
    <div>
      <div className="">
        <div className="p-4 md:py-1 md:px-2 border-[1px] border-red-500 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition">
          <RxHamburgerMenu className="text-red-600"/>
          <div className="hidden md:block">
            <img className="rounded-full" src={avater} width="30" height="30" alt="profileImage" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuDropDown;
