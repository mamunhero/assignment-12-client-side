import { Link } from "react-router-dom";

const AllPackageCard = ({ packageIS }) => {
  // console.log(packageIS);
  const { image, tourType, tripTitle, price, _id } = packageIS || {};
  return (
    <div>
      <div className="card w-full h-full bg-base-100 shadow-xl">
        <figure>
          <img className="object-cover w-full h-full scale-110" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{tourType}</h2>
          <p>{tripTitle}</p>
          <p>{price}</p>
          <div className="card-actions">
            <Link to={`/packages/${_id}`}>
              <button className="btn mt-4 bg-orange-500  text-white py-2 px-4 rounded-md hover:bg-teal-300">
                View Package
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllPackageCard;
