// api/chat-history.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import loadChatHistory from '@/app/data/fake-data/fake-chat-history/fake-chat-history';
import { MongoClient } from 'mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        const userId = req.query.userId as string;
        const authToken = req.headers.authorization; // Placeholder for token extraction

        // Authentication and authorization logic can be added here
        // For example, validate authToken...

        const knownUserIds = ['armaniuid', 'natalieuid'];

        try {
            if (knownUserIds.includes(userId)) {
                const chatHistories = await loadChatHistory();
                const userHistory = chatHistories.find(history => history.userId === userId);
                if (userHistory) {
                    res.status(200).json(userHistory);
                } else {
                    res.status(404).json({ error: 'User not found' });
                }
            } else {
                const client = new MongoClient("your-mongodb-connection-string-here");
                await client.connect();
                const db = client.db("your-db-name");
                const collection = db.collection("chatHistories");
                const userHistory = await collection.findOne({ userId: userId });

                if (userHistory) {
                    res.status(200).json(userHistory);
                } else {
                    res.status(404).json({ error: 'User not found in database' });
                }
                await client.close();
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Failed to load chat history' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
