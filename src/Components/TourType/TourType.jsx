import { FaCity, FaPersonHiking } from "react-icons/fa6";
import { FaWalking } from "react-icons/fa";
import { GiCycling } from "react-icons/gi";
import { IoBoatOutline } from "react-icons/io5";
import Container from "../../Shared/Container";
import { GiCircleForest } from "react-icons/gi";
import { TbBeach } from "react-icons/tb";
import { GiIsland } from "react-icons/gi";
import { MdChangeHistory } from "react-icons/md";
import { MdOutlineFestival } from "react-icons/md";
import TourText from "./TourText";
import { Link } from "react-router-dom";



const TourType = () => {
  
  return (
    <div className="mt-10 mb-10">
      <Container>
        <TourText></TourText>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <Link to="/hiking" className="flex flex-col items-center justify-center">
            <FaPersonHiking className="text-5xl" />
            <h2 className="md:text-3xl font-bold">Hiking</h2>
          </Link>
          <Link to="cycling" className="flex flex-col items-center justify-center">
            <GiCycling className="text-5xl"/>
            <h2 className="md:text-3xl font-bold">Cycling</h2>
          </Link>
          <Link to="boating" className="flex flex-col items-center justify-center">
            <IoBoatOutline className="text-5xl" />
            <h2 className="md:text-3xl font-bold">Boating</h2>
          </Link>
          <Link to="/walking" className="flex flex-col items-center justify-center">
            <FaWalking className="text-5xl"/>
            <h2 className="md:text-3xl font-bold">Walking</h2>
          </Link>
          <Link to="/city" className="flex flex-col items-center justify-center">
            <FaCity  className="text-5xl"/>
            <h2 className="md:text-3xl font-bold">City</h2>
          </Link>
          <Link to="/forest" className="flex flex-col items-center justify-center">
            <GiCircleForest className="text-5xl" />
            <h2 className="md:text-3xl font-bold">Forest</h2>
          </Link>
          <Link to="beach" className="flex flex-col items-center justify-center">
            <TbBeach className="text-5xl" />
            <h2 className="md:text-3xl font-bold">Sea Beach</h2>
          </Link>
          <Link  to="/historical" className="flex flex-col items-center justify-center">
            <MdChangeHistory className="text-5xl" />
            <h2 className="md:text-3xl font-bold">Historical</h2>
          </Link>
          <Link to="/island" className="flex flex-col items-center justify-center">
            <GiIsland className="text-5xl" /> 
            <h2 className="md:text-3xl font-bold">IsLand</h2> 
          </Link>
          <Link to="/festival" className="flex flex-col items-center justify-center">
            <MdOutlineFestival className="text-5xl" />
            <h2 className="md:text-3xl font-bold">Festival</h2> 
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default TourType;


