import { Helmet } from "react-helmet-async";
import TourType from "../../Components/TourType/TourType";
import TourGuide from "../../Components/TourType/TourGuide/TourGuide";
import Story from "../../Components/Story/Story";
import OverView from "../../Components/OverView/OverView";




const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <OverView></OverView>
      <TourType></TourType>
      <TourGuide></TourGuide>
      <Story></Story>
    </div>
  );
};

export default Home;

