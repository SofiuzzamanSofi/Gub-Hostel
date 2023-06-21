
import { createSeatBook } from '../../controllers/seatBook/createSeatBook';
import express from 'express';



export default (router: express.Router) => {
    router.post("/express/createSeatBookRoute", createSeatBook)
}