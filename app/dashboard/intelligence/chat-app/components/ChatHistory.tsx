// chat-app/components/ChatHistory.tsx
'use client';

import React from 'react';
import { useChat } from '../hooks/useChat';

const ChatHistory = () => {
    const { chatHistory } = useChat();

    return (
        <div className="chat-history">
            {chatHistory.map((chat, chatIndex) => (
                <div key={chat.chatId} className="chat-session">
                    <h3>Chat ID: {chat.chatId}</h3>
                    {chat.chatHistoryEntries.map((entry, index) => (
                        <div key={index} className="chat-message">
                            <p><strong>Role:</strong> {entry.role}</p>
                            <p><strong>Message:</strong> {entry.message}</p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default ChatHistory;
