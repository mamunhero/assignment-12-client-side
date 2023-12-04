import { useEffect, useState } from "react";
import { tourGuideInfo } from "../../../Api/fetch";
import TourGuide from "./TourGuide";



const TourGuideInforma = () => {
  const [guide, setGuide] = useState([]);
  useEffect(()=> {
      tourGuideInfo().then((data)=> setGuide(data))
  },[])
  console.log(guide);
  return (
    <div>
      <div>
        {
          guide.map(tourGuideInformation=> 
          <TourGuide key={tourGuideInformation._id}
          tourGuideInformation={tourGuideInformation}
          ></TourGuide>)
        }
      </div>
    </div>
  );
};

export default TourGuideInforma;


