// /chat-app/context/UserContext.tsx
'use client';
import React, { createContext, useState, ReactNode } from 'react';

interface UserInfo {
    username: string;
    isAuthenticated: boolean;
    userToken: string; // Adding userToken to the UserInfo interface
}

interface UserContextType {
    userInfo: UserInfo;
    updateUserSettings: (info: UserInfo) => void;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
    children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [userInfo, setUserInfo] = useState<UserInfo>({
        username: 'defaultUser',
        isAuthenticated: false,
        userToken: 'defaultToken' // Provide a default or initial token if appropriate
    });

    const updateUserSettings = (info: UserInfo) => {
        setUserInfo(info);
    };

    return (
        <UserContext.Provider value={{ userInfo, updateUserSettings }}>
            {children}
        </UserContext.Provider>
    );
};
