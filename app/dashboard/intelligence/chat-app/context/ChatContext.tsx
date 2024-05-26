// chat-app/context/ChatContext.tsx
'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { ChatRequest, ChatSettings, ChatContextProps, ChatProviderProps, ChatHistoryChat } from '../types/chat';
import { transformChatHistory } from '../utils/transformChatHistory';

const defaultChatSettings: ChatSettings = {
    userSettings: {},
    aiSettings: {},
    chatSettings: {},
    pageSettings: {},
    matrixSettings: {},
    clientSettings: {},
    agencySettings: {},
};

const defaultChatRequest: ChatRequest = {
    eventName: "",
    userToken: "",
    task: "",
    requestMetadata: {
        requestId: "",
        requestIndex: 1,
        uid: "",
        requestTimestamp: "",
        requestType: "chat",
        requestSource: "chat_app_main",
        requestChannel: "chat"
    },
    recipeId: "",
    promptData: [],
    formResponses: [],
    customInputs: [],
    settings: defaultChatSettings,
    variablesData: {},
    responseData: {},
    brokerData: {},
    modelData: {},
    controls: {},
    activeChatId: null
};

export const ChatContext = createContext<ChatContextProps>({
    chatData: defaultChatRequest,
    chatHistory: [],
    updateChatData: () => {},
    updateChatHistory: () => {}
});

export const ChatProvider: React.FC<ChatProviderProps> = ({ children }) => {
    const [chatData, setChatData] = useState<ChatRequest>(defaultChatRequest);
    const [chatHistory, setChatHistory] = useState<ChatHistoryChat[]>([]);

    useEffect(() => {
        async function loadAndTransformChatHistory() {
            const history = await transformChatHistory();
            setChatHistory(history);
        }
        loadAndTransformChatHistory();
    }, []);

    const updateChatData = (newData: Partial<ChatRequest>) => {
        setChatData(prev => ({ ...prev, ...newData }));
    };

    const updateChatHistory = (newHistory: ChatHistoryChat[]) => {
        setChatHistory(newHistory);
    };

    return (
        <ChatContext.Provider value={{ chatData, chatHistory, updateChatData, updateChatHistory }}>
            {children}
        </ChatContext.Provider>
    );
};

export const useChat = () => useContext(ChatContext);
