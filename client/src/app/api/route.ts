import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
    name: string;
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    console.log('route .ts page ');
    res.status(200).json({ name: 'This is index.ts file ROUTE. TS' });
}
