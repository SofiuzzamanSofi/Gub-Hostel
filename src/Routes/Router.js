import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Admission from "../Components/pages/Admission/Admission";
import Faq from "../Components/pages/Faq/Faq";
import Location from "../Components/pages/Location/Location";
import Main from "../layouts/Main/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/admission',
                element: <Admission />
            },
            {
                path: '/faq',
                element: <Faq />
            },
            {
                path: '/location',
                element: <Location />
            },
        ]
    }
])

export default router;