import { NextApiRequest, NextApiResponse } from 'next';

type User = {
    id: number;
    name: string;
    email: string;
};

const users: User[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
];

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'GET') {
        // Retrieve all users
        res.status(200).json(users);
    } else if (req.method === 'POST') {
        // Create a new user
        const { name, email } = req.body;

        if (!name || !email) {
            res.status(400).json({ error: 'Name and email are required' });
            return;
        }

        const newUser: User = {
            id: users.length + 1,
            name,
            email,
        };

        users.push(newUser);

        res.status(201).json(newUser);
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
