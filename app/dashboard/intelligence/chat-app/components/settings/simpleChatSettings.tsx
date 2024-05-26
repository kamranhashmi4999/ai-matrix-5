// chat-app/components/settings/simpleChatSettings.tsx
'use client';

import React from 'react';
import { Select } from '@mantine/core';
import { aiPreferencesMainOptions, aiPreferencesSecondOptions } from '@/app/data/chatSettingsOptions';
import AmeFieldset from '@/ui/fieldset/AmeFieldset';
import AmeCheckbox from '@/ui/checkbox/AmeCheckbox';
import { SettingsProps } from '../../types/settings';
import { ChatSettings } from '../../types/chat';

export interface SimpleChatSettingsProps {
    settings: ChatSettings;
    onChange: (field: keyof SettingsProps, value: boolean | string) => void;
    onSubmit: () => void;
}

const SimpleChatSettings: React.FC<SimpleChatSettingsProps> = ({ settings, onChange, onSubmit }) => {
    const chatSettings = settings.chatSettings as SettingsProps;

    return (
        <AmeFieldset
            legend="Settings"
            layout="quad"
            fieldsetWidth="95%"
            showButton={false}
        >
            <AmeCheckbox
                label="Submit on Enter"
                checked={chatSettings.submitOnEnter}
                onChange={(e) => onChange('submitOnEnter', e.currentTarget.checked)}
            />
            <AmeCheckbox
                label="Make Small Talk"
                checked={chatSettings.makeSmallTalk}
                onChange={(e) => onChange('makeSmallTalk', e.currentTarget.checked)}
            />
            <AmeCheckbox
                label="Quick Answer"
                checked={chatSettings.quickAnswer}
                onChange={(e) => onChange('quickAnswer', e.currentTarget.checked)}
            />
            <AmeCheckbox
                label="Improve Questions"
                checked={chatSettings.improveQuestions}
                onChange={(e) => onChange('improveQuestions', e.currentTarget.checked)}
            />
            <Select
                label="AI Preferences"
                data={aiPreferencesMainOptions}
                value={chatSettings.aiPreferencesMain}
                onChange={(value) => onChange('aiPreferencesMain', value || '')}
            />
            <Select
                label="Secondary Preference"
                data={aiPreferencesSecondOptions}
                value={chatSettings.aiPreferencesSecond}
                onChange={(value) => onChange('aiPreferencesSecond', value || '')}
            />
        </AmeFieldset>
    );
};

export default SimpleChatSettings;
