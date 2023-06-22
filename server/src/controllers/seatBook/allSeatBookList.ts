
import express from 'express';
import { getSeatBookingList } from '../../model/seatBookSchema';


export const allSeatBookList = async (req: express.Request, res: express.Response) => {
    try {
        const allSeatBookListData = await getSeatBookingList();
        return res.status(200).json(allSeatBookListData).end();
    } catch (error) {
        console.log("error from allSeatBookingList catch blokc line 11:", error)
        return res.status(400).json({
            success: false,
            message: "error from allSeatBookingList catch blokc line 14:",
        })
    }
}