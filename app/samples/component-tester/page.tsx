'use client';

import React, { useState } from 'react';
import { Select } from '@mantine/core';
import dynamic from 'next/dynamic';
import { ComponentType } from 'react';
import AIResponse from "@/app/chat/response/AIResponse";
import ChatHistoryMenu from "@/app/chat/sidebar/ChatHistoryMenu";
import AmeHoverMenuChat from "@/app/samples/chat-sidebar/AmeChatHistoryEntry";

// Define prop types
interface AIResponseProps {
    message: { id: string; content: string };
}

interface ChatHistoryMenuProps {
    // Add the expected props for ChatHistoryMenu
}

interface AmeHoverMenuChatProps {
    // Add the expected props for AmeHoverMenuChat
}

// Define a map for components and their props types
const componentMap: { [key: string]: ComponentType<any> } = {
    AIResponse: dynamic(() => import('@/app/chat/response/AIResponse')),
    ChatHistoryMenu: dynamic(() => import('@/app/chat/sidebar/ChatHistoryMenu')),
    AmeHoverMenuChat: dynamic(() => import('@/app/samples/chat-sidebar/AmeChatHistoryEntry')),
};

// Define a map for component props
const componentPropsMap: { [key: string]: any } = {
    AIResponse: { message: { id: '1', content: 'Sample AI response message' } },
    ChatHistoryMenu: {}, // Add the props for ChatHistoryMenu if needed
    AmeHoverMenuChat: {}, // Add the props for AmeHoverMenuChat if needed
};

const componentOptions = Object.keys(componentMap).map((componentName) => ({
    label: componentName,
    value: componentName,
}));

const TestPage: React.FC = () => {
    const [selectedComponent, setSelectedComponent] = useState<string | null>(null);

    const handleComponentChange = (value: string | null) => {
        setSelectedComponent(value);
    };

    const RenderedComponent = selectedComponent ? componentMap[selectedComponent] : null;
    const componentProps = selectedComponent ? componentPropsMap[selectedComponent] : {};

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <div style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
                <Select
                    data={componentOptions}
                    value={selectedComponent}
                    onChange={handleComponentChange}
                    placeholder="Select a component"
                />
            </div>
            <div style={{ flex: 1, padding: '20px' }}>
                {RenderedComponent ? <RenderedComponent {...componentProps} /> : <div>Select a component to display</div>}
            </div>
        </div>
    );
};

export default TestPage;
