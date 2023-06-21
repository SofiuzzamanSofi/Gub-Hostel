import { oneUser } from "../../controllers/users/oneUser";
import express from "express";


export default (router: express.Router) => {
    router.post("/express/oneUserRoute", oneUser);
}