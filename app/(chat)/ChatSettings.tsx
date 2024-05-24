"use client";

import { Checkbox, MenuDropdown } from '@mantine/core';
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
    const [aiPreferencesMainOption, setAIPreferencesMainOption] = useState<string>(aiPreferencesMain);
    const [aiPreferencesSecondOption, setAIPreferencesSecondOption] = useState<string>(aiPreferencesSecond);
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
        <div className='w-full mt-4 text-sm flex items-start'>
            <button className='mt-[0.1rem] mr-4 text-[#898989]' onClick={handleToggleSettings}></button>
            {showSettings && (
                <div className="w-full transition-all duration-300">
                    <div className="w-full flex flex-wrap justify-start items-center text-nowrap">
                        <div className='flex items-center mr-5 mb-2'>
                            <Checkbox checked={isMakeSmallTalk} onChange={() => setMakeSmallTalk(!isMakeSmallTalk)} />
                        </div>
                        <div className='flex items-center mr-5 mb-2'>
                            <Checkbox checked={isQuickAnswer} onChange={() => setAnswerQuickly(!isQuickAnswer)} />
                        </div>
                        <div className='flex items-center mr-5 mb-2'>
                            <Checkbox checked={isImproveQuestions} onChange={() => setImproveQuestion(!isImproveQuestions)} />
                        </div>
                        <div className='flex items-center mr-5 mb-2'>
                            <Checkbox checked={isSubmitOnEnter} onChange={() => setSubmitOnEnter(!isSubmitOnEnter)} />
                        </div>
                        <div className='flex items-center mr-5 mb-2'>
                            <Checkbox onChange={() => setShowFormSample(!showFormSample)} />
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-between items-start mt-2">
                    </div>
                </div>
            )}
        </div>
    );
}

export default ChatBotSettings