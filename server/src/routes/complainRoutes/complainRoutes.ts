
import { createNewComplainController, getAllComplainController } from '../../controllers/complainController/complainController';
import express from 'express';

export default (router: express.Router) => {
    router.post("/express/createComplainRoute", createNewComplainController);
    router.post("/express/getAllComplainRoute", getAllComplainController);
}