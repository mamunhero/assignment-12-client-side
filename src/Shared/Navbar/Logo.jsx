import { Link } from "react-router-dom";
import logoImg from "../../../src/assets/images/logo-dark.png"
import Container from "../Container";



const Logo = () => {
  return (
    <div>
      <Container>
        <Link to='/'>
          <img className="hidden md:block" src={logoImg} width="100" height="100" alt="logoImage"  />
        </Link>
      </Container>
    </div>
  );
};

export default Logo;

