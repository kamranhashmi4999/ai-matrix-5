// chat-app/types/chat.ts
import { ReactNode } from 'react';

export interface RequestMetadata {
    requestId: string;
    requestIndex: number;
    uid: string;
    requestTimestamp: string;
    requestType: string;
    requestSource: string;
    requestChannel: string;
}


export interface ChatSettings {
    userSettings: Record<string, any>;
    aiSettings: Record<string, any>;
    chatSettings: Record<string, any>;
    pageSettings: Record<string, any>;
    matrixSettings: Record<string, any>;
    clientSettings: Record<string, any>;
    agencySettings: Record<string, any>;
}

export interface SettingsContextProps {
    settings: ChatSettings;
    updateSettings: (updates: Partial<ChatSettings>) => void;
}

export interface SettingsProviderProps {
    children: ReactNode;
}


export interface ChatRequest {
    eventName: string;
    userToken: string;
    task: string;
    requestMetadata: {
        requestId: string;
        requestIndex: number;
        uid: string;
        requestTimestamp: string;
        requestType: string;
        requestSource: string;
        requestChannel: string;
    };
    recipeId: string;
    promptData: any[];
    formResponses: FormResponse[];
    customInputs: CustomInput[];
    settings: ChatSettings;
    variablesData: Record<string, any>;
    responseData: Record<string, any>;
    brokerData: Record<string, any>;
    modelData: Record<string, any>;
    controls: Record<string, any>;
    activeChatId: string | null;
}

export interface ChatHistoryChat {
    chatId: string;
    chatHistoryEntries: {
        role: string;
        message: string;
    }[];
}
export interface ChatContextProps {
    chatData: ChatRequest;
    chatHistory: ChatHistoryChat[];
    updateChatData: (newData: Partial<ChatRequest>) => void;
    updateChatHistory: (newHistory: ChatHistoryChat[]) => void;
}

export interface ChatProviderProps {
    children: ReactNode;
}

export interface RequestMetadataProviderProps {
    children: React.ReactNode;
}

export interface GlobalChatData {
    eventName: string;
    userToken: string;
    task: string;
    recipeId: string;
}

export interface GlobalChatContextProps {
    globalChatData: GlobalChatData;
    updateGlobalChatData: (data: Partial<GlobalChatData>) => void;
}

export interface GlobalChatProviderProps {
    children: React.ReactNode;
}

export interface FormResponse {
    question: string;
    response: string;
}

export interface FormContextProps {
    formData: FormData;
    updateFormData: (data: Partial<FormData>) => void;
}

export interface FormProviderProps {
    children: ReactNode;
}

export interface FormData {
    promptData: PromptData[];
    formResponses: FormResponse[];
    customInputs: CustomInput[];
}

export interface CustomInput {
    name: string;
    value: string;
}

export interface ChatProviderProps {
    children: React.ReactNode;
}

export type Question = {
    question: string;
    type: string;
    answer: string | number | string[];
    options?: string[];
    range?: {
        min?: number;
        max?: number;
        value?: number;
        label?: string;
    };
    step?: number;
};

export type RespondData = {
    questions: Question[];
};


export type ChatHistoryEntry = {
    role: string;
    message: string;
};

export type ChatHistoryChat = {
    chatId: string;
    chatHistoryEntries: ChatHistoryEntry[];
};

export interface ChatContextProps {
    chatData: ChatRequest;
    chatHistory: ChatHistoryChat[];
    updateChatData: (newData: Partial<ChatRequest>) => void;
    updateChatHistory: (newHistory: ChatHistoryChat[]) => void;
}

export interface ChatMessage {
    chatId: string | null;
    user: string;
    role: string;
    message: string;
    timestamp: Date;
}


export interface ChatContextType {
    messages: ChatMessage[];
    responses: string[];
    settings: ChatSettings;
    history: ChatHistoryChat[];
    sendMessage: (message: string) => void;
    updateSettings: (key: string, value: any) => void;
}

export interface PromptData {
    role: string;
    message: string;
}

