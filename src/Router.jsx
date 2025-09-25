import { createBrowserRouter } from "react-router-dom";
import Header from "./Conponent/shear/Header/Header";
import Footer from "./Conponent/shear/Footer/Footer";
import MainLayout from "./Conponent/MinLayout/MainLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <div>Error</div>,
        children: [
            {
                path: "/",
                element: <div>body content</div>,
            },
        ]
    }
]);

export default router;

