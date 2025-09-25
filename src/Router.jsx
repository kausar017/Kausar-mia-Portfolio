import { createBrowserRouter } from "react-router-dom";
import Header from "./container/shear/Header";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Header />,
    },
]);

export default router;

