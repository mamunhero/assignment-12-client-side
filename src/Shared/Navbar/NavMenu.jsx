import { NavLink } from "react-router-dom";

const NavMenu = ({ address, label }) => {
  return (
    <NavLink 
      to={address}
      className={({ isActive }) =>
      ` uppercase  text-white font-semibold hover:bg-white hover:text-black hover:rounded-full transition ${
        isActive ? 'border-b-[2px] border-white text-red-500' : ' px-3 py-1'
      }`
    }>
      <span className="hidden lg:block  font-medium">{label}</span>
    </NavLink>
  );
};

export default NavMenu;

