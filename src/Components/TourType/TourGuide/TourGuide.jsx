import Container from "../../../Shared/Container";

const TourGuide = () => {
  return (
    <div className="mt-10 mb-10">
      <Container>
        <div className="">
          <div className="mt-10 mb-10">
            <h2 className="text-2xl text-center">Select a private local tour guide in Bangladesh</h2>
            <div className="mt-4 w-20 h-1 bg-orange-600 mx-auto"></div>
          </div>
          <div className=" gap-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex gap-5">
              <div>
                <img
                  className="object-cover w-full h-auto"
                  width="200"
                  height="200"
                  src="https://i.ibb.co/2PJNHjh/avatar3.jpg"
                  alt="Avatar"
                />
              </div>
              <div>
                <h2>Mohammad Abu Zabar</h2>
                <p>Languages English, Hindi</p>
                <div className="flex gap-5">
                  <p>excursions</p>
                  <span>0</span>
                  <p>Feedback</p>
                  <span>0</span>
                </div>
                <div>
                  <span>Rating</span>
                  <span className="ml-2">0</span>
                </div>
                <div className="mt-3">
                  <a className="mt-4 bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-teal-300" href="">
                    Hire
                  </a>
                </div>
              </div>
            </div>
            <div className="flex gap-5">
              <div>
                <img
                  className="object-cover w-full h-auto"
                  width="200"
                  height="200"
                  src="https://i.ibb.co/2PJNHjh/avatar3.jpg"
                  alt="Avatar"
                />
              </div>
              <div>
                <h2>Mohammad Abu Zabar</h2>
                <p>Languages English, Hindi</p>
                <div className="flex gap-5">
                  <p>excursions</p>
                  <span>0</span>
                  <p>Feedback</p>
                  <span>0</span>
                </div>
                <div>
                  <span>Rating</span>
                  <span className="ml-2">0</span>
                </div>
                <div className="mt-3">
                  <a className="mt-4 bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-teal-300" href="">
                    Hire
                  </a>
                </div>
              </div>
            </div>
            <div className="flex gap-5">
              <div>
                <img
                  className="object-cover w-full h-auto"
                  width="200"
                  height="200"
                  src="https://i.ibb.co/2PJNHjh/avatar3.jpg"
                  alt="Avatar"
                />
              </div>
              <div>
                <h2>Mohammad Abu Zabar</h2>
                <p>Languages English, Hindi</p>
                <div className="flex gap-5">
                  <p>excursions</p>
                  <span>0</span>
                  <p>Feedback</p>
                  <span>0</span>
                </div>
                <div>
                  <span>Rating</span>
                  <span className="ml-2">0</span>
                </div>
                <div className="mt-3">
                  <a className="mt-4 bg-orange-500  text-white py-2 px-4 rounded-md hover:bg-teal-300" href="">
                    Hire
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TourGuide;
