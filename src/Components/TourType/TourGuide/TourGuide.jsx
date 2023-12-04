import { useEffect, useState } from "react";
import Container from "../../../Shared/Container";
import { tourGuideInfo } from "../../../Api/fetch";
import TourGuideCard from "./TourGuideCard";
import TourGuideText from "./TourGuideText";

const TourGuide = () => {
  const [guide, setGuide] = useState([]);
  useEffect(() => {
    tourGuideInfo().then((data) => setGuide(data));
  }, []);
  // console.log(guide);
const guideFour = guide.slice(0,6)
  return (
    <div className="mt-10 mb-10">
      <Container>
        <TourGuideText></TourGuideText>
        <div className = " gap-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {guideFour.map((tourGuideData) => (
            <TourGuideCard key={tourGuideData._id} tourGuideData={tourGuideData} />
          ))}
        </div>
        <div className="flex items-center justify-center mt-5 mb-5">
          <button className="btn bg-teal-300 text-white py-2 px-4 rounded-md hover:bg-orange-600 transation">
            All Guide
          </button>
        </div>
      </Container>
    </div>
  );
};

export default TourGuide;


