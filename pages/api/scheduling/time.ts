import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Array<String>>
) {
    if (req.method !== 'POST') {
        res.status(405).end();
        return;
    }
    if (req.headers['content-type']?.toLowerCase() !== "application/json" && !req.body["date"]) {
        res.status(400).end();
        return;
    }
    res.status(200).json([
        "10:00",
        "10:30",
        "11:00",
        "11:30",
        "13:00",
        "13:30",
        "14:00",
        "14:30",
        "15:00",
        "15:30",
        "16:00",
        "16:30",
        "17:00",
        "17:30",
        "18:00",
        "18:30"
    ]);
}