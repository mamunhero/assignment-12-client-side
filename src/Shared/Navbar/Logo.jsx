import { Link } from "react-router-dom";
import logoImg from "../../../src/assets/images/logo-dark.png";


const Logo = () => {
  return (
    <div>
      <Link to="/">
        <img className="hidden md:block" src={logoImg} width="100" height="100" alt="logoImage" />
      </Link>
    </div>
  );
};

export default Logo;
