import  { useEffect, useState } from 'react';
import { getAllPackage } from '../../Api/fetch';
import HikingCard from './HikingCard';

const Hiking = () => {
  const [isPackage, setIsPackage] = useState([]);
  useEffect(() => {
    getAllPackage().then((data)=> {
      const filtered = data.filter((packageInfo)=> packageInfo.tourType === "hicking")
      setIsPackage(filtered)
    });
  }, []);
  console.log(isPackage);
  return (
    <div>
      {
        isPackage.map((packageInfo)=> <HikingCard key={packageInfo._id} packageInfo={packageInfo}></HikingCard>)
      }
    </div>
  );
};

export default Hiking;


