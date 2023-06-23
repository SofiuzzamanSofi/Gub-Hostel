
import { allSeatBookList } from '../../controllers/seatBookController/allSeatBookListController';
import express from 'express';



export default (router: express.Router) => {
    router.post("/express/getSeatBookListRoute", allSeatBookList)
}