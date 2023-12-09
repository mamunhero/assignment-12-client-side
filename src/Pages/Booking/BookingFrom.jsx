import { useEffect, useState } from "react";
import { getAddBooking, getBooking } from "../../Api/fetch";
import { useParams } from "react-router";
import useAuth from './../../Hooks/useAuth';
import { imageUpload } from "../../Api/image";
import Swal from "sweetalert2";

const BookingFrom = () => {
  const { id } = useParams();
  const [booking, setBooking] = useState([]);
  useEffect(() => {
    getBooking(id).then((data) => setBooking(data));
  }, [id]);
  const {user} = useAuth();
  
  const handleBookingFrom = async event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const price = form.price.value;
    const guide = form.guide.value;
    const title = form.title.value;
    const image = form.image.files[0];
    const image_url =  await imageUpload(image)
    const bookingFromData = { name, email, price, guide, title,  image:image_url?.data?.display_url}

    try{
      const addBookingData = await getAddBooking(bookingFromData)
      console.log(addBookingData);
      // navigate
      Swal.fire({
        title: "Good job!",
        text: "Tour Booking SuccessFully",
        icon: "success"
      });
    }
    catch(error){
      console.log(error);
      Swal.fire({
        title: "Error!",
        text: "No booking",
        icon: "error"
      });
    }
   
  }



  return (
    <div className="mt-10  mb-10">
      <h2 className="text-center text-orange-600 font-bold text-2xl">Booking From</h2>
      <form onSubmit={handleBookingFrom}>
        <div className="flex mb-8">
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Tourist Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                required
                placeholder=" Tourist Name"
                className="input input-bordered w-full"
                value={user?.displayName || " "}
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Tourist Email</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="email"
                required
                placeholder="Tourist Email"
                className="input input-bordered w-full"
                value={user?.email || " "}
              />
            </label>
          </div>
        </div>
        <div className="flex mb-8">
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="price"
                required
                placeholder="Price"
                className="input input-bordered w-full"
                value={booking?.price}
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Tour Guide</span>
            </label>
            <select name="guide" className="input input-bordered w-full">
              <option value="disabled">Select a Guide </option>
              <option value="Aisha">Aisha</option>
              <option value="Ayesha">Ayesha</option>
              <option value="Rahim">Rahim</option>
              <option value="Kamal">Kamal</option>
              <option value="Nadia">Nadia</option>
              <option value="Riyaad">Riyaad</option>
              <option value="Fatima">Fatima</option>
              <option value="Farhan">Farhan</option>
            </select>
          </div>
        </div>
        <div className="flex mb-8">
          <div className="form-control w-full ml-4">
            <label className="label">
              <span className="label-text">Select Image</span>
            </label>
            <input required type="file" name="image" accept="image/*" />
          </div>
          <div className="form-control w-full ml-4">
            <label className="label">
              <span className="label-text">Tour Title</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="title"
                required
                placeholder="Tour Title"
                className="input input-bordered w-full"
                value={booking?.tripTitle}
              />
            </label>
          </div>
        </div>
        <div>
      <input type="submit" value="Reserve" className=" border-2 block  font-Rancho font-normal text-lg  w-full  bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-teal-300" />
    </div>
      </form>
    </div>
  );
};



export default BookingFrom;


