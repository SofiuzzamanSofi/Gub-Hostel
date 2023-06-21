import express from 'express';
import allUsersRoute from './usersRouter/allUsersRoute';
import oneUserRoute from './usersRouter/oneUserRoute';
import mainHomeRoute from './mainHomeRoute/mainHomeRoute';
import createSeatBookRoute from './seatBookRoute/createSeatBookRoute';
import getSeatBookListRoute from './seatBookRoute/getSeatBookListRoute';



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

    return router;
};