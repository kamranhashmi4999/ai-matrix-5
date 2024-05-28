import React, { ReactNode } from 'react';
import { Text, Space } from '@mantine/core';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <main>{children}</main>
            <Space h="xl" />
            <footer>Cool App Footer</footer>
        </div>
    );
};

export default Layout;
