import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import AllPackageDetailes from "../Components/AllPackage/AllPackageDetailes";
import { getOnePackage } from "../Api/fetch";
import PrivateRoute from './PrivateRoute';
import BookingFrom from "../Pages/Booking/BookingFrom";




const Route = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/packages/:id",
        element: <PrivateRoute><AllPackageDetailes></AllPackageDetailes></PrivateRoute>,
        loader: ({params})=> getOnePackage(params.id)
      },
      {
        path: "/booking/:id",
        element: <BookingFrom></BookingFrom>
      }
    ]
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>
  }
])

export default Route;

