// import { Helmet } from "react-helmet-async";
// import Container from "../../Shared/Container";

// const OverView = () => {
//   return (
//     <div className="mt-10 mb-10">
//       <Helmet>
//         <title>OverView</title>
//       </Helmet>
//       <Container>
//         <div>
//           <h2 className="text-3xl  font-bold">Explore Bangladesh</h2>
//           <div className="mt-4 mb-4 w-20 h-1 bg-orange-600"></div>
//         </div>
//         <div className="flex gap-3">
//         <div className="relative">
//           <img className="object-cover" width="750" height="450" src="https://i.postimg.cc/d0LnHdzy/land-of-river.jpg" alt="" />
//           <iframe
//               className="absolute top-0 left-0 w-full h-full"
//               src="https://www.youtube.com/embed/JTS8Ypguyuc?si=LqkX1ytdse-dPlaK"
//               title="YouTube video player"
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//               allowFullScreen
//             ></iframe>
//         </div>
//         <div className="">
//           <img className="object-cover"  width="350" height="200" src="https://i.postimg.cc/0y3HqcGf/scol-of-life.jpg" alt="" />
//           <img className="object-cover mt-6" width="350" height="200" src="https://i.postimg.cc/T2qSWjGd/land-of-stories.jpg" alt="" />
//         </div>
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default OverView;












import { FaYoutube } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import Container from '../../Shared/Container';
import { useState } from 'react';

const OverView = () => {
  const [showVideo, setShowVideo] = useState(false);

  const toggleVideo = () => {
    setShowVideo(!showVideo);
  };

  return (
    <div className="mt-10 mb-10">
      <Helmet>
        <title>OverView</title>
      </Helmet>
      <Container>
        <div>
          <h2 className="text-3xl font-bold">Explore Bangladesh</h2>
          <div className="mt-4 mb-4 w-20 h-1 bg-orange-600"></div>
        </div>
        <div className='flex gap-3'>
        <div className="relative">
          {/* image one */}
          <img
            className="object-cover"
            width="750"
            height="450"
            src="https://i.postimg.cc/d0LnHdzy/land-of-river.jpg"
            alt=""
          />
          {/* Button or icon to toggle the video */}
          <button
            onClick={toggleVideo}
            className="absolute top-1/2 right-1/2  px-4 py-2 rounded-md border border-gray-300"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            {showVideo ? '' : <FaYoutube className='mx-auto'  />}
          </button>
          {/* Show the YouTube video iframe when showVideo state is true */}
          {showVideo && (
            <iframe
              className="absolute top-0 left-0"
              width="750"
              height="450"
              src="https://www.youtube.com/embed/JTS8Ypguyuc?si=LqkX1ytdse-dPlaK"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          )}
        </div>
        <div>
        <div className="relative">
          {/* image two */}
          <img
            className="object-cover"
            width="350"
            height="200"
            src="https://i.postimg.cc/0y3HqcGf/scol-of-life.jpg"
            alt=""
          />
          {/* Button or icon to toggle the video */}
          <button
            onClick={toggleVideo}
            className="absolute top-1/2 right-1/2  px-4 py-2 rounded-md border border-gray-300"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            {showVideo ? '' : <FaYoutube className='mx-auto'  />}
          </button>
          {/* Show the YouTube video iframe when showVideo state is true */}
          {showVideo && (
            <iframe
              className="absolute top-0 left-0"
              width="350"
              height="200"
              src="https://www.youtube.com/embed/JTS8Ypguyuc?si=LqkX1ytdse-dPlaK"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          )}
        </div>
        <div className="relative">
          {/* image three  */}
          <img
            className="object-cover mt-6"
            width="350"
            height="200"
            src="https://i.postimg.cc/T2qSWjGd/land-of-stories.jpg"
            alt=""
          />
          {/* Button or icon to toggle the video */}
          <button
            onClick={toggleVideo}
            className="absolute top-1/2 right-1/2  px-4 py-2 rounded-md border border-gray-300"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            {showVideo ? '' : <FaYoutube className='mx-auto'  />}
          </button>
          {/* Show the YouTube video iframe when showVideo state is true */}
          {showVideo && (
            <iframe
              className="absolute top-0 left-0"
              width="350"
              height="200"
              src="https://www.youtube.com/embed/JTS8Ypguyuc?si=LqkX1ytdse-dPlaK"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          )}
        </div>
        </div>
        </div>
      </Container>
    </div>
  );
};

export default OverView;




