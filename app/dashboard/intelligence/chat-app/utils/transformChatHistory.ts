// app/dashboard/intelligence/chat-app/utils/transformChatHistory.ts

import axios from 'axios';

export const fetchFileContents = async (fileNames: string[]): Promise<Record<string, string>> => {
    try {
        const response = await axios.post('/api/read-files', { fileNames });
        return response.data;
    } catch (error) {
        console.error('Error fetching file contents:', error);
        return {};
    }
};
