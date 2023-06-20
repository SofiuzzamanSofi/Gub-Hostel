import express from 'express';
import allUsersRoute from './usersRouter/allUsersRoute';
import oneUserRoute from './usersRouter/oneUserRoute';
import mainHomeRoute from './mainHomeRoute/mainHomeRoute';



const router = express.Router();

export default (): express.Router => {
    mainHomeRoute(router)
    allUsersRoute(router);
    oneUserRoute(router);
    return router;
};