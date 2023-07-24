import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Colleges from "../Pages/Colleges/Colleges";
import Admission from "../Pages/Admission/Admission";
import MyCollege from "../Pages/MyCollege/MyCollege";
import CollegeDetails from "../Pages/Colleges/CollegeDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "colleges",
        element: <Colleges></Colleges>,
      },
      {
        path: "colleges/collegeDetails/:id",
        element: <CollegeDetails></CollegeDetails>,
      },
      {
        path: "admission",
        element: <Admission></Admission>,
      },
      {
        path: "myCollege",
        element: <MyCollege></MyCollege>,
      },
    ],
  },
]);

export default router;
