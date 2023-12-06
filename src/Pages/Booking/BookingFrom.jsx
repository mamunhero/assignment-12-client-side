import { useEffect, useState } from "react";
import { getBooking } from "../../Api/fetch";
import { useParams } from "react-router";

const BookingFrom = () => {
  const { id } = useParams();
  const [booking, setBooking] = useState([]);
  useEffect(() => {
    getBooking(id).then((data) => setBooking(data));
  }, [id]);
  console.log(booking);

  return (
    <div className="mt-10  mb-10">
      <h2 className="text-center text-orange-600 font-bold text-2xl">Booking From</h2>
      <form>
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
      </form>
    </div>
  );
};

export default BookingFrom;
