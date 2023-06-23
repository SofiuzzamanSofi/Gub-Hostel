
import { allUsers } from '../../controllers/userController/allUserController';
import express from 'express';

// import 


export default (router: express.Router) => {
    router.post("/express/allUsersRoute", allUsers);
}