// chat-app/context/SettingsContext.tsx
'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ChatSettings, SettingsContextProps, SettingsProviderProps } from '../types/chat';

const defaultSettings: ChatSettings = {
    userSettings: {},
    aiSettings: {},
    chatSettings: {},
    pageSettings: {},
    matrixSettings: {},
    clientSettings: {},
    agencySettings: {},
};

export const SettingsContext = createContext<SettingsContextProps>({
    settings: defaultSettings,
    updateSettings: () => {}
});

export const SettingsProvider: React.FC<SettingsProviderProps> = ({ children }) => {
    const [settings, setSettings] = useState<ChatSettings>(defaultSettings);

    const updateSettings = (updates: Partial<ChatSettings>) => {
        setSettings(prev => ({ ...prev, ...updates }));
    };

    return (
        <SettingsContext.Provider value={{ settings, updateSettings }}>
            {children}
        </SettingsContext.Provider>
    );
};

export const useSettings = () => useContext(SettingsContext);
