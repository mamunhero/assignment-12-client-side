import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Banner from "../Components/Banner/Banner";



const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;


