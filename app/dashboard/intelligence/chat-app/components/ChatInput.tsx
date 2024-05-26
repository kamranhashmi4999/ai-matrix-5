// chat-app/components/ChatInput.tsx
'use client';
import React, { useState, useContext } from 'react';
import { ChatContext } from '../context/ChatContext';
import { UserContext } from '../context/UserContext';
import { emitEvent } from '../utils/socket'; // Ensure you import the socket utility functions

const ChatInput = () => {
    const [input, setInput] = useState('');
    const chatContext = useContext(ChatContext);
    const userContext = useContext(UserContext);

    if (!chatContext || !userContext) {
        return <div>Error: Chat or User context is not available</div>;
    }

    const { chatData, updateChatData } = chatContext;
    const { userInfo } = userContext;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!input.trim()) return; // Prevent empty submissions

        const newPromptData = {
            role: 'user',
            message: input
        };

        const chatRequest = {
            ...chatData, // Spread existing data to maintain other properties
            promptData: [...chatData.promptData, newPromptData], // Update prompt data with new message
            userToken: userInfo.userToken, // Now correctly using userInfo.userToken
            task: 'streaming_chat', // Define task or other dynamic data based on your application needs
        };

        // Send the message through the WebSocket
        emitEvent('socket_event', chatRequest, (response) => {
            console.log('Received response:', response);
            // Handle response, update context or state as necessary
        });

        setInput('');
        updateChatData({ promptData: chatRequest.promptData });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={input} onChange={handleInputChange} />
            <button type="submit">Send</button>
        </form>
    );
};

export default ChatInput;
