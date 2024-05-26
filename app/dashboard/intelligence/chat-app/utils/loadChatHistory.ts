// chat-app/utils/loadChatHistory.ts
import axios from 'axios';

interface UserContext {
    userId: string;
    isAuthenticated: boolean;
    userToken: string;
}

export const loadChatHistory = async (
    userId: string,
    userContext: UserContext
): Promise<any> => {
    try {
        const response = await axios.get(`/api/chat-history?userId=${userId}`, {
            headers: {
                Authorization: `Bearer ${userContext.userToken}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching chat history:', error);
        return {};
    }
};

export default loadChatHistory;
