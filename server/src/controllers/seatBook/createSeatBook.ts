
import express from 'express';
import { createSeatBookOne } from '../../model/seatBookSchema';


export const createSeatBook = async (req: express.Request, res: express.Response) => {

    const { handleSeatBookingData } = req.body;
    if (!handleSeatBookingData) {
        return res.status(400).json({
            success: false,
            message: "Body is empty line 12:",
        })
    }
    try {

        // console.log("Body is line 17:", handleSeatBookingData)


        // check booking is availabel -- 


        const createSeatBookDataRes = await createSeatBookOne(handleSeatBookingData)
        return res.status(200).json(createSeatBookDataRes).end();
    } catch (error) {
        console.log("error from createSeatBook catch blokc line 21:", error)
        return res.status(400).json({
            success: false,
            message: "error from createSeatBook catch blokc line 24:",
        })
    }
}