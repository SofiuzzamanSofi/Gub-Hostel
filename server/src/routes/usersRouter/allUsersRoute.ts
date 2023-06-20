
import express from 'express';

// import 
import { allUsers } from './../../controllers/allUsers';

export default (router: express.Router) => {
    router.post("/express/allUsersRoute", allUsers);
}