// chat-app/layout.tsx

import React, { ReactNode } from 'react';
import { ChatProvider } from './context/ChatContext';
import { UserProvider } from './context/UserContext';
import { FormProvider } from './context/FormContext';
import { GlobalChatProvider } from './context/GlobalChatContext';
import { RequestMetadataProvider } from './context/RequestMetadataContext';
import { SettingsProvider } from './context/SettingsContext';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <UserProvider>
            <ChatProvider>
                <FormProvider>
                    <GlobalChatProvider>
                        <RequestMetadataProvider>
                            <SettingsProvider>
                                <div>
                                    <header>Chat App</header>
                                    <main>{children}</main>
                                </div>
                            </SettingsProvider>
                        </RequestMetadataProvider>
                    </GlobalChatProvider>
                </FormProvider>
            </ChatProvider>
        </UserProvider>
    );
};

export default Layout;
