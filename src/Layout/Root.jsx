import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Banner from "../Components/Banner/Banner";
import Footer from "../Shared/Footer/Footer";



const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;


