import { Helmet } from "react-helmet-async";
import Container from "../../Shared/Container";
import StoryImage from "./StoryImage";

const Story = () => {
  return (
    <div className="mt-10 mb-10">
      <Helmet>
        <title>Story</title>
      </Helmet>
      <Container>
        <div>
          <h2 className="text-3xl text-center font-bold">Share Your Tour Stories!!!</h2>
          <div className="mt-4 mb-4 w-20 h-1 bg-orange-600 mx-auto"></div>
          <p className="text-xl text-gray-300 text-justify">
          Bangladesh showcases a myriad of tour experiences, suiting diverse tastes and interests. Its array of options beckons adventurers, encouraging exploration and discovery within the country's rich tapestry of landscapes and cultures.
          </p>
        </div>
        <StoryImage></StoryImage>
      </Container>
    </div>
  );
};

export default Story;


