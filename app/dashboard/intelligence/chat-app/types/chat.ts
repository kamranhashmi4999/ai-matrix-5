// chat-app/types/chat.ts
import { ReactNode } from 'react';
import {
    AIModelSettings,
    BrokerData,
    ControlSettings,
    RequestSettings,
    ResponseData,
    VariablesData,
    ChatSettings
} from "./settings";

export interface ChatRequest {
    eventName: string;
    userToken: string;
    task: string;
    requestMetadata: RequestMetadata;
    recipeId: string;
    promptData: PromptData[];
    formResponses: FormResponse[];
    customInputs: CustomInput[];
    settings: RequestSettings;
    variablesData: VariablesData;
    responseData: ResponseData;
    brokerData: BrokerData;
    modelData: AIModelSettings;
    controls: ControlSettings;
    activeChatId: string | null;
}

export interface RequestMetadata {
    requestId: string;
    requestIndex: number;
    uid: string;
    requestTimestamp: string;
    requestType: string;
    requestSource: string;
    requestChannel: string;
}

export interface PromptData {
    role: string;
    message: string;
    formResponses: FormResponse[];
    customInputs: CustomInput[];
}

// Custom Input
export interface CustomInput {
    name: string;
    value: string;
}

export interface FormResponse {
    question: string;
    response: string;
}


// Chat Context
export interface ChatContextProps {
    chatData: ChatRequest;
    chatHistory: ChatHistoryChat[];
    updateChatData: (newData: Partial<ChatRequest>) => void;
    updateChatHistory: (newHistory: ChatHistoryChat[]) => void;
}

export interface ChatProviderProps {
    children: ReactNode;
}

// Chat History
export interface ChatHistoryEntry {
    role: string;
    message: string;
}

export interface ChatHistoryChat {
    chatId: string;
    chatHistoryEntries: ChatHistoryEntry[];
}

export interface ChatMessage {
    chatId: string | null;
    user: string;
    role: string;
    message: string;
    timestamp: Date;
}

// Chat Context Type
export interface ChatContextType {
    messages: ChatMessage[];
    responses: string[];
    settings: ChatSettings;
    history: ChatHistoryChat[];
    sendMessage: (message: string) => void;
    updateSettings: (key: string, value: any) => void;
}





// Form
export interface FormData {
    promptData: PromptData[];
    formResponses: FormResponse[];
    customInputs: CustomInput[];
}

export interface FormContextProps {
    formData: FormData;
    updateFormData: (data: Partial<FormData>) => void;
}

export interface FormProviderProps {
    children: ReactNode;
}

// Global Chat
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
    children: ReactNode;
}



export interface RequestMetadataProviderProps {
    children: React.ReactNode;
}

export interface ChatProviderProps {
    children: React.ReactNode;
}

// Question and Response Data
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

