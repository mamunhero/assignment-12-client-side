import { useEffect } from "react";
import { useState } from "react";
import { getAllPackage } from "../../Api/fetch";
import AllPackageCard from "./AllPackageCard";
import Container from "../../Shared/Container";

const AllPackage = () => {
  const [isPackage, setIsPackage] = useState([]);
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    getAllPackage().then((data) => setIsPackage(data));
  }, []);
  // console.log(isPackage);
  const isPackages = showAll ? isPackage : isPackage.slice(0, 4);
  const handleShowAll = () => {
    setShowAll(true);
  };
  return (
    <div>
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {isPackages.map((packageIs) => (
            <AllPackageCard key={packageIs._id} packageIS={packageIs}></AllPackageCard>
          ))}
        </div>
        <div className="flex items-center justify-center mt-5 mb-5">
          <button className="btn bg-teal-300 text-white py-2 px-4 rounded-md hover:bg-orange-600 transation"
            onClick={handleShowAll}>
            All Package
          </button>
        </div>
      </Container>
    </div>
  );
};

export default AllPackage;


