import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Hiking from "../Components/Type/Hiking";

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
        path: "/hiking",
        element: <Hiking></Hiking>
      }
    ]
  }
])

export default Route;

