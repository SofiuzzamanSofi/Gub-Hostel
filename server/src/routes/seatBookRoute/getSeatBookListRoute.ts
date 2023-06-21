
import { allSeatBookList } from '../../controllers/seatBook/allSeatBookList';
import express from 'express';



export default (router: express.Router) => {
    router.post("/express/getSeatBookListRoute", allSeatBookList)
}