import express from 'express';
import { connectToMongoDB } from './../../lib/mongodb';
import User from './../../models/user';
import { hash } from 'bcryptjs';
import { UserTypes } from '../../types/types';
import mongoose from 'mongoose';

const router = express.Router();

router.post("/", async (req, res) => {
    connectToMongoDB().catch(error => {
        return res.status(500).send(error);
    });

    if (!req.body) return res.status(400).json({ error: "Data is missing" })

    const { fullName, email, password } = req.body

    const userExists = await User.findOne({ email })

    if (userExists) {
        return res.status(409).json({ error: "User Already exists" })
    }
    else {
        if (password.length < 6)
            return res.status(409).json({ error: "Password should be 6 characters long" })

        const hashedPassword = await hash(password, 12)

        User.create({
            fullName,
            email,
            password: hashedPassword
        }, (error: unknown, data: UserTypes) => {
            if (error && error instanceof mongoose.Error.ValidationError) {
                //mongo db will return array
                // but we only want to show one error at a time

                for (let field in error.errors) {
                    const msg = error.errors[field].message
                    return res.status(409).json({ error: msg })
                }
            }

            const user = {
                email: data.email,
                fullName: data.fullName,
                _id: data._id
            }

            return res.status(201).json({
                success: true,
                user
            })
        })
    }
});

export default router;
