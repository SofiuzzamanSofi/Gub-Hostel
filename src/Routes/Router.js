import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Admission from "../Components/pages/Admission/Admission";
import Faq from "../Components/pages/Faq/Faq";
import HallFacilities from "../Components/pages/HallFacilities/HallFacilities";
import Location from "../Components/pages/Location/Location";
import RoomFacilities from "../Components/pages/RoomFacilities/RoomFacilities";
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
            {
                path: '/hallfacilities',
                element: <HallFacilities />
            },
            {
                path: '/roomfacilities',
                element: <RoomFacilities />
            }
        ]
    }
])

export default router;