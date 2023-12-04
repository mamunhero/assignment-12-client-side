import { useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";
import { imageUpload } from "../../Api/image";
import useAuth from "../../Hooks/useAuth";
import {  saveUser } from "../../Api/auth";
import Swal from "sweetalert2";



const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {createUser, updateUserProfile} = useAuth();
  const navigate = useNavigate();
  const handleSignUp = async event  => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.files[0];
    try{
      // image
      const imageData = await imageUpload(image)
      // createUser
      const result = await createUser(email, password)
      // updateprofile
      await updateUserProfile(name, imageData?.data?.display_url)
      console.log(result);
      // data fetch for put
      const dbResponse = await saveUser(result?.user)
      console.log(dbResponse);
      navigate("/")
      Swal.fire({
        title: "Good job!",
        text: "Sign up Successfully!",
        icon: "success"
      });
    }
    catch(error){
      console.log(error);
      Swal.fire({
        title: "Error!",
        text: "There was an error signing up. Please try again.",
        icon: "error"
      });
    }
  }
  return (
    <div>
      <form onSubmit={handleSignUp} className="md:w-3/4 lg:w-1/2 mx-auto mt-5 mb-5">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Sign Up now!</h1>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" name="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Select Image</span>
          </label>
          <input
                required
                type='file'
                name='image'
                accept='image/*'
              />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <div className="flex justify-center items-center w-full">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="password"
              name="password" 
              className="input input-bordered w-full"
              required
            />
            <span onClick={() => setShowPassword(!showPassword)} className='text-red-500 -ml-10'>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <div className="mt-4">
            <input type="checkbox" name="terms" className="mr-5" />
            <span className="">Accept Our terms and conditions</span>
          </div>
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary w-full">Register</button>
        </div>
      </form>
      <p className="text-center mt-5 text-2xl mb-5">Already Have An Account ? <Link className="text-blue-500 font-bold text-2xl" to="/login">Please Login</Link></p>
    </div>
  );
};

export default SignUp;


