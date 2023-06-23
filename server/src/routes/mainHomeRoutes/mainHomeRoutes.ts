
import express from 'express';

export default (router: express.Router) => {
    router.get(
        "/",
        async (req: express.Request, res: express.Response) => {
            try {
                return res.status(200).json({
                    success: true,
                    name: "express Typescript gup hostel server",
                    details: "this is main home page",
                }).end();
            } catch (error) {
                console.log(error)
                return res.sendStatus(400);
            }
        }
    );
}