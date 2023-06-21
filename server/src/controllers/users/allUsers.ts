import express from 'express';
import { getUsers } from '../../schemas/usersSchema';




export const allUsers = async (req: express.Request, res: express.Response) => {
    try {
        const allUsersData = await getUsers();
        return res.status(200).json(allUsersData).end();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}