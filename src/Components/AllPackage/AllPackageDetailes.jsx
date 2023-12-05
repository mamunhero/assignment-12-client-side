import { useLoaderData } from "react-router";
import Container from "../../Shared/Container";

const AllPackageDetailes = () => {
  const allPackage = useLoaderData();
  console.log(allPackage);
  return (
    <div className="mt-10 mb-10">
      <Container>
        <div className="grid grid-cols-7 gap-4"> 
          <div className="col-span-4"> 
            <img className="object-cover max-w-md h-auto border overflow-hidden mb-5 border-black rounded-md" width="400px" height="200px" src={allPackage.image} alt="image" />
            <p className="font-semibold text-justify">{allPackage.description}</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AllPackageDetailes;
