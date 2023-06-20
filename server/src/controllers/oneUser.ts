import express from 'express';
import { getUserByEmail } from './../schemas/usersSchema';



export const oneUser = async (req: express.Request, res: express.Response) => {

    const { email } = req.body;
    if (!email) {
        return res.sendStatus(400);
    }
    try {
        const oneUserData = await getUserByEmail(email);
        return res.status(200).json(oneUserData).end();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}