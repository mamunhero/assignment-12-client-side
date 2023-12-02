import { Helmet } from "react-helmet-async";
import TourType from "../../Components/TourType/TourType";
import TourGuide from "../../Components/TourType/TourGuide/TourGuide";




const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <TourType></TourType>
      <TourGuide></TourGuide>
    </div>
  );
};

export default Home;

