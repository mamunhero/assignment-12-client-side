import { NavLink } from "react-router-dom";

const NavMenu = ({ address, label }) => {
  return (
    <NavLink 
      to={address}
      className={({ isActive }) =>
      `px-2 uppercase  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
        isActive ? 'bg-red-600  text-gray-700' : 'text-gray-600'
      }`
    }>
      <span className="hidden lg:block mx-1 font-medium">{label}</span>
    </NavLink>
  );
};

export default NavMenu;

