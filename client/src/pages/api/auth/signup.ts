import { connectToMongoDB } from "@/workArea/nextAuth/lib/mongodb";

import { NextApiRequest, NextApiResponse } from "next";
import { hash } from "bcryptjs";
import mongoose from "mongoose";
import User from "@/workArea/nextAuth/models/user";

const handler = async (
    req: NextApiRequest,
    res: NextApiResponse,
) => {

    console.log("request is hit on line 13 src/app/api/auth/signup.ts");
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
                return res.status(400).json({ error: "Password too short, needs to be at least 6 characters long." });
            }

            const hashedPassword = await hash(password, 12)

            try {
                const data = await User.create({
                    fullName,
                    email,
                    password: hashedPassword,
                });

                const user = {
                    fullName: data.fullName,
                    email: data.email,
                    _id: data._id,
                };

                return res.status(201).json({
                    success: true,
                    user,
                });
            } catch (error) {
                if (error instanceof mongoose.Error.ValidationError) {
                    // MongoDB returns an array of errors, so loop through
                    // We only want to show one error at a time
                    for (let field in error.errors) {
                        const msg = error.errors[field].message;
                        return res.status(409).json({ error: msg });
                    }
                }

                return res.status(500).json({ error: "Internal server error" });
            }
        }
    } else {
        res.status(405).json({ error: "Method not allowed" });
    }
};

export default handler;
