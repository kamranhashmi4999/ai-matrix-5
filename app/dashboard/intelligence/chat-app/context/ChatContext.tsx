// chat-app/context/ChatContext.tsx
'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { ChatRequest, ChatContextProps, ChatProviderProps, ChatHistoryChat } from '../types/chat';
import { loadChatHistory } from '../utils/loadChatHistory';
import { UserContext } from './UserContext';
import { defaultChatRequest } from '../utils/defaults';

export const ChatContext = createContext<ChatContextProps>({
    chatData: defaultChatRequest,
    chatHistory: [],
    updateChatData: () => {
    },
    updateChatHistory: () => {
    }
});

export const ChatProvider: React.FC<ChatProviderProps> = ({children}) => {
    const [chatData, setChatData] = useState<ChatRequest>(defaultChatRequest);
    const [chatHistory, setChatHistory] = useState<ChatHistoryChat[]>([]);

    const userContext = useContext(UserContext);

    useEffect(() => {
        async function loadAndTransformChatHistory() {
            if (userContext && userContext.userData.isAuthenticated) {
                try {
                    const loadedHistory = await loadChatHistory(userContext.userData.userId, userContext.userData);
                    setChatHistory(loadedHistory.chatHistory);
                } catch (error) {
                    console.error("Failed to load and transform chat history", error);
                }
            }
        }

        loadAndTransformChatHistory();
    }, [userContext?.userData]);

    const updateChatData = (newData: Partial<ChatRequest>) => {
        setChatData(prev => ({...prev, ...newData}));
    };

    const updateChatHistory = (newHistory: ChatHistoryChat[]) => {
        setChatHistory(newHistory);
    };

    return (
        <ChatContext.Provider value={{
            chatData,
            chatHistory,
            updateChatData,
            updateChatHistory
        }}>
            {children}
        </ChatContext.Provider>
    );
};

export const useChat = (): ChatContextProps => {
    const context = useContext(ChatContext);
    if (!context) {
        throw new Error('useChat must be used within a ChatProvider');
    }
    return context;
};
