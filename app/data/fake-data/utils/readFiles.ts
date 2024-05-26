// pages/api/read-files.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import { readMultipleFiles } from './serverUtils';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { fileNames } = req.body;
        try {
            const fileContents = readMultipleFiles(fileNames);
            res.status(200).json(fileContents);
        } catch (error) {
            res.status(500).json({ error: 'Failed to read files' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
