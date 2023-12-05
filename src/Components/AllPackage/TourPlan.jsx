import React from "react";

const TourPlan = ({ allPackage }) => {
  console.log(allPackage);
  return (
    <div className="col-span-3">
      <h2 className="font-bold">Tour Plan</h2>
      <h2 className="font-semibold">Title:{allPackage?.tripTitle}</h2>
      <p>Price: {allPackage?.price}</p>
      <p className="font-bold">Tour Duration:3 Days</p>
      <div className="">
        <p className="text-orange-500 font-bold">Day 1</p>
        <span>
          Arrive Dhaka airport & transfer to hotel. If time permits half day city tour to Sadarghat River front, old
          Hindu temples, Lalbag Fort of Mughal Empire, Museum, Shahid Minar and Curzon Hall (Dhaka University).
          Overnight at Hotel.
        </span>
      </div>
      <div className="">
        <p className="text-orange-500 font-bold">Day 2</p>
        <span>
          Leave Dhaka for Moinamaoti, Comilla at 0800Hrs. On the way, visit Sonargaon, the Ancient Capital of Bengal,
          which was built 15th Century. An interesting folk museum here. After lunch, you will visit Moinamoti, Salban
          Vihara the relics of old Buddhist Civilization. Its an extensive center of Buddhist Culture of 7th-12th
          Century. The attractions include, Buddhist Vihara (monastery) with imposing central shrine, Kotia Mura etc.
          Back to Dhaka at evening & Night Halt.
        </span>
      </div>
      <div className="">
        <p className="text-orange-500 font-bold">Day 3</p>
        <span>
          Leave Dhaka by reserve van for Dinajpur via Jamuna Bridge at 0800Hrs. Arrive Dinajpur around 1500Hrs. Check in
          the Hotel. Visit the Ramsagar-historical pond (16th Century) & Night Halt.
        </span>
      </div>
    </div>
  );
};

export default TourPlan;
