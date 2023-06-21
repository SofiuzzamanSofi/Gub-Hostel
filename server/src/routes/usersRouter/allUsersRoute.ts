
import { allUsers } from '../../controllers/users/allUsers';
import express from 'express';

// import 


export default (router: express.Router) => {
    router.post("/express/allUsersRoute", allUsers);
}