import { createBrowserRouter } from "react-router-dom";
import Header from "./Conponent/shear/Header/Header";
import Footer from "./Conponent/shear/Footer/Footer";
import MainLayout from "./Conponent/MinLayout/MainLayout";
import Hero from "./Conponent/WebBody/Hero/Hero";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <div>Error</div>,
    children: [
      {
        path: "/",
        element: <Hero></Hero>,
      },
    ],
  },
]);

export default router;
