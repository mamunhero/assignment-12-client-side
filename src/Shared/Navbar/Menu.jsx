
import MenuDropDown from "./MenuDropDown";
import NavMenu from "./NavMenu";

const Menu = () => {
  return (
    <>
      <div className="flex flex-row items-center  gap-3">
        <div className="flex flex-row items-center gap-3">
          {/* menu */}
          <NavMenu address={"/"} label={"home"}></NavMenu>
          <NavMenu address={"/community"} label={"community"}></NavMenu>
          <NavMenu address={"/blogs"} label={"blogs"}></NavMenu>
          <NavMenu address={"/aboutus"} label={"about us"}></NavMenu>
          <NavMenu address={"/contactus"} label={"contact us"}></NavMenu>
        </div>
        <div>
          {/* menu drop down */}
          <MenuDropDown></MenuDropDown>
        </div>
      </div>
    </>
  );
};

export default Menu;
