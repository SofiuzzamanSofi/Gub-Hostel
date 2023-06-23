import { oneUser } from "../../controllers/userController/oneUserController";
import express from "express";


export default (router: express.Router) => {
    router.post("/express/oneUserRoute", oneUser);
}