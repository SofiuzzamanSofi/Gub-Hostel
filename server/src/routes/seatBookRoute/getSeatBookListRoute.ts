import { allSeatBookList } from '../../controllers/seatBook/allSeatBooklist';
import express from 'express';



export default (router: express.Router) => {
    router.post("/express/getSeatBookListRoute", allSeatBookList)
}