const TourGuideCard = ({ tourGuideData }) => {
  const { name, languages, excursions, rating, image } = tourGuideData || {};
  return (
    <div className="">
      <div>
        <div className="flex gap-5">
          <div>
            <img className="object-cover w-full h-auto" width="200" height="200" src={image} alt="Avatar" />
          </div>
          <div>
            <h2>Name:{name}</h2>
            <p>Languages:{languages}</p>
            <div className="flex gap-5">
              <p>Excursions:{excursions}</p>
            </div>
            <div>
              <span>Rating</span>
              <span className="ml-2">{rating}</span>
            </div>
            <div className="mt-3">
              <a className="mt-4 bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-teal-300" href="">
                Hire
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourGuideCard;
