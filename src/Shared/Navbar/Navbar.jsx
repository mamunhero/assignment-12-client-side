import Container from "../Container";
import Logo from "./Logo";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <div className="fixed w-full bg-zinc-800 z-10 shadow-lg  ">
      <div className="py-4">
        <Container>
          <div className="flex flex-row justify-between items-center gap-3">
            <Logo></Logo>
            <Menu></Menu>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
