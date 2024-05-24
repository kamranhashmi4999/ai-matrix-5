"use client";

import { Button, Checkbox, Group, Menu, MenuDropdown, MenuItem, MenuLabel, Select, Space } from '@mantine/core';
import { useEffect, useState } from 'react';

interface SettingsProps {
    aiPreferencesMain: string;
    aiPreferencesSecond: string;
    makeSmallTalk: boolean;
    quickAnswer: boolean;
    improveQuestions: boolean;
    submitOnEnter: boolean;
}

const ChatBotSettings = ({ settings, setShowFormSample, showFormSample }: { settings: SettingsProps, setShowFormSample: Function, showFormSample: boolean }) => {
    const {
        aiPreferencesMain,
        aiPreferencesSecond,
        makeSmallTalk,
        quickAnswer,
        improveQuestions,
        submitOnEnter
    } = settings;
    const [showSettings, setShowSettings] = useState(false);
    const [aiPreferencesMainOption, setAIPreferencesMainOption] = useState<string | null>(aiPreferencesMain || "");
    const [aiPreferencesSecondOption, setAIPreferencesSecondOption] = useState<string | null>(aiPreferencesSecond || "");
    const [isMakeSmallTalk, setMakeSmallTalk] = useState<boolean>(makeSmallTalk);
    const [isQuickAnswer, setAnswerQuickly] = useState<boolean>(quickAnswer);
    const [isImproveQuestions, setImproveQuestion] = useState<boolean>(improveQuestions);
    const [isSubmitOnEnter, setSubmitOnEnter] = useState<boolean>(submitOnEnter);

    useEffect(() => {
        setAIPreferencesMainOption(aiPreferencesMain);
        setAIPreferencesSecondOption(aiPreferencesSecond);
        setMakeSmallTalk(makeSmallTalk);
        setAnswerQuickly(quickAnswer);
        setImproveQuestion(improveQuestions);
        setSubmitOnEnter(submitOnEnter);
    }, [showSettings]);

    const handleToggleSettings = () => {
        setShowSettings(!showSettings);
    };

    const aiPreferencesMainOptions = [
        { value: 'Direct AI chat', label: 'Direct AI chat' },
        { value: 'Ask me Some Questions', label: 'Ask me Some Questions' },
        { value: 'Give Me a Few Options', label: 'Give Me a Few Options' },
        { value: 'I wll Fill Out a Form', label: 'I wll Fill Out a Form' },
    ]

    const aiPreferencesSecondOptions = [
        { value: 'Chat With One AI', label: 'Chat With One AI' },
        { value: 'Two AIs Side by Side', label: 'Two AIs Side by Side' },
        { value: 'Lets Get a Team', label: 'Lets Get a Team' },
        { value: 'Show Me What You Can Do', label: 'Show Me What You Can Do' },
        { value: 'Unleash Infinity Matrix!', label: 'Unleash Infinity Matrix!' },
    ]

    return (
        <div>
            <Space h="md" />
            <div className="w-full transition-all duration-300">
                <Group className="flex flex-wrap justify-start items-center text-nowrap">
                    <Checkbox
                        checked={isMakeSmallTalk}
                        onChange={() => setMakeSmallTalk(!isMakeSmallTalk)}
                        label="Make Small Talk"
                    />
                    <Checkbox
                        checked={isQuickAnswer}
                        onChange={() => setAnswerQuickly(!isQuickAnswer)}
                        label="Quick Answer"
                    />
                    <Checkbox
                        checked={isImproveQuestions}
                        onChange={() => setImproveQuestion(!isImproveQuestions)}
                        label="Improve Questions"
                    />
                    <Checkbox
                        checked={isSubmitOnEnter}
                        onChange={() => setSubmitOnEnter(!isSubmitOnEnter)}
                        label="Submit on Enter"
                    />
                    <Checkbox
                        onChange={() => setShowFormSample(!showFormSample)}
                        label="Show Form Sample"
                    />
                </Group>
                <Space h="md" />
                <Group>
                    <Select
                        data={aiPreferencesMainOptions}
                        value={aiPreferencesMainOption}
                        onChange={(value) => setAIPreferencesMainOption(value)}
                        placeholder="Select Option"
                    />
                    <Select
                        data={aiPreferencesSecondOptions}
                        value={aiPreferencesSecondOption}
                        onChange={(value) => setAIPreferencesSecondOption(value)}
                        placeholder="Select Option"
                    />
                </Group>
            </div>

        </div>
    );
}

export default ChatBotSettings