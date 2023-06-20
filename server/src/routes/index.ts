import express from 'express';
import allUsersRoute from './usersRouter/allUsersRoute';
import oneUserRoute from './usersRouter/oneUserRoute';



const router = express.Router();

export default (): express.Router => {
    allUsersRoute(router);
    oneUserRoute(router);
    return router;
};