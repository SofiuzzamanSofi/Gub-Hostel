import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Main from "../layouts/Main/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])

export default router;