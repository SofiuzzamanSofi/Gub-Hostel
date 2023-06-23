
import { createSeatBook } from '../../controllers/seatBookController/createSeatBookController';
import express from 'express';



export default (router: express.Router) => {
    router.post("/express/createSeatBookRoute", createSeatBook)
}