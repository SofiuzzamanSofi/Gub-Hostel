import express from "express";
import { oneUser } from '../../controllers/users/oneUser';



export default (router: express.Router) => {
    router.post("/express/oneUserRoute", oneUser);
}