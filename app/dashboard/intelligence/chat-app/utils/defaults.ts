// chat-app/utils/defaults.ts
import { ChatRequest } from '../types/chat';
import { ChatSettings, RequestSettings } from '../types/settings';

export const defaultChatSettings: ChatSettings = {
    aiPreferencesMain: "default",
    aiPreferencesSecond: "assistant",
    makeSmallTalk: true,
    quickAnswer: false,
    improveQuestions: true,
    submitOnEnter: true
};

export const defaultRequestSettings: RequestSettings = {
    chatSettings: defaultChatSettings,
    variablesData: {},
    responseData: {},
    brokerData: {},
    aiModelSettings: {},
    controlSettings: {},
    pageSettings: {},
    userSettings: {},
    matrixSettings: {},
    clientSettings: {},
    agencySettings: {}
};

export const defaultChatRequest: ChatRequest = {
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
    settings: defaultRequestSettings,
    variablesData: {},
    responseData: {},
    brokerData: {},
    modelData: {},
    controls: {},
    activeChatId: null
};
