// chat-app/components/ChatResponse.tsx
'use client';

import React, { useEffect } from 'react';
import { useAiResponse } from '../context/AiResponseContext';
import { handleDynamicElements } from '../utils/dynamicSocketHandler';

const ChatResponse: React.FC = () => {
    const { setRespondData } = useAiResponse();

    useEffect(() => {
        const userToken = 'your-user-token'; // Replace with actual user token
        const message = 'your-message'; // Replace with the actual message to be sent

        const { close } = handleDynamicElements(userToken, message, (streamBuffer) => {
            const response = JSON.parse(streamBuffer);
            if (response.form) {
                setRespondData(response.form);
            }
            // Handle the end of the stream here
        });

        return () => {
            close();
        };
    }, [setRespondData]);

    return (
        <div>
            {/* Render AI responses here */}
            <p>Listening for AI responses...</p>
        </div>
    );
};

export default ChatResponse;
