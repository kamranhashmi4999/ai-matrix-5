// chat-app/components/settings/ChatSettings.tsx
'use client';

import React, { useContext } from 'react';
import { SettingsContext } from '../../context/SettingsContext';
import settingsComponents from './SettingsRegistry';
import { SettingsProps } from '../../types/settings';

const ChatSettings = () => {
    const { settings, updateSettings } = useContext(SettingsContext);
    const chatType = 'simpleChat'; // This should be dynamically determined based on the chat type
    const SettingsComponent = settingsComponents[chatType];

    const handleChange = (field: keyof SettingsProps, value: boolean | string) => {
        const updatedChatSettings = { ...settings.chatSettings, [field]: value };
        updateSettings({ ...settings, chatSettings: updatedChatSettings });
    };

    const handleSubmit = () => {
        // Handle submit logic if needed
    };

    if (!SettingsComponent) {
        return <div>No settings available for this chat type.</div>;
    }

    return (
        <SettingsComponent
            settings={settings}
            onChange={handleChange}
            onSubmit={handleSubmit}
        />
    );
};

export default ChatSettings;
