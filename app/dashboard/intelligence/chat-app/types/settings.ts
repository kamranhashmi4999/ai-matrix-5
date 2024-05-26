// chat-app/types/settings.ts

export interface SettingsProps {
    aiPreferencesMain: string;
    aiPreferencesSecond: string;
    makeSmallTalk: boolean;
    quickAnswer: boolean;
    improveQuestions: boolean;
    submitOnEnter: boolean;
}

export interface SimpleChatSettingsProps {
    settings: SettingsProps;
    onChange: (field: keyof SettingsProps, value: boolean | string) => void;
    onSubmit: () => void;
}
