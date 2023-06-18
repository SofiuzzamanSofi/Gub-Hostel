import { connectToMongoDB } from "lib/mongodb";
import User from "models/user";
import { NextApiRequest, NextApiResponse } from "next";
import { hash } from "bcryptjs";

import mongoose from "mongoose";
import { UserTypes } from './../../src/workArea/types/allCommonTypes';


const handler = async (
    req: NextApiRequest,
    res: NextApiResponse,
) => {

    console.log("request is hitted on line 13 src/app/api/auth/sighup.ts");
    connectToMongoDB().catch((err) => res.json(err));

    if (req.method === "POST") {
        if (!req.body) return res.status(400).json({ error: "Data is missing" });

        const { fullName, email, password } = req.body;

        const userExists = await User.findOne({ email: email })

        if (userExists) {
            return res.status(409).json({ error: "User already exists" });
        }
        else {
            if (password.length < 5) {
                return res.status(400).json({ error: "Password too short need at least 6 character long." });
            };

            const hassedPassword = await hash(password, 12)

            User.create(
                {
                    fullName,
                    email,
                    password: hassedPassword,
                },
                (error: unknown, data: UserTypes) => {
                    if (error && error instanceof mongoose.Error.ValidationError) {


                        // mongodb return Array of error erro = [];  so loop through
                        // we only want to show one error at a time 
                        for (let field in error.errors) {

                            const msg = error.errors[field].message;
                            return res.status(409).json({ error: msg });
                        }
                    }

                    // create API also returns the password but we don't want to show the password 
                    const user = {
                        fullName: data.fullName,
                        email: data.email,
                        _id: data._id,
                    };

                    // send successfully create user on db ---
                    return res.status(2001).json({
                        success: true,
                        user,
                    })
                });
        }
    }
    else {
        res.status(405).json({ error: "Method not allowed" })
    }
}

export default handler;