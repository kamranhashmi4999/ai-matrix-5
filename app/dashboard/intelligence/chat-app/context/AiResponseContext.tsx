// chat-app/context/AiResponseContext.tsx

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { RespondData } from '../types/chat';

interface AiResponseContextType {
    respondData: RespondData | null;
    setRespondData: (data: RespondData | null) => void;
}

const AiResponseContext = createContext<AiResponseContextType | undefined>(undefined);

export const AiResponseProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [respondData, setRespondData] = useState<RespondData | null>(null);

    return (
        <AiResponseContext.Provider value={{ respondData, setRespondData }}>
            {children}
        </AiResponseContext.Provider>
    );
};

export const useAiResponse = (): AiResponseContextType => {
    const context = useContext(AiResponseContext);
    if (!context) {
        throw new Error('useAiResponse must be used within an AiResponseProvider');
    }
    return context;
};
