import express from 'express';
import allUsersRoute from './usersRouter/allUsersRoutes';
import oneUserRoute from './usersRouter/oneUserRoutes';
import mainHomeRoute from './mainHomeRoutes/mainHomeRoutes';
import createSeatBookRoute from './seatBookRoutes/createSeatBookRoutes';
import getSeatBookListRoute from './seatBookRoutes/getSeatBookListRoutes';
import complainRoutes from './complainRoutes/complainRoutes';



const router = express.Router();

export default (): express.Router => {

    // / home route 
    mainHomeRoute(router)

    // user route 
    allUsersRoute(router);
    oneUserRoute(router);

    // seat book route 
    createSeatBookRoute(router);
    getSeatBookListRoute(router);

    // complain route
    complainRoutes(router);

    return router;
};