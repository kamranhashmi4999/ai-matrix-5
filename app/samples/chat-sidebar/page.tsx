// app/sample/page.tsx
'use client';

import React from 'react';
import AmeChatHistoryEntry from './AmeChatHistoryEntry';
import AmeMenu from './AmeMenu';
import { Stack } from '@mantine/core';
import { BsThreeDotsVertical } from "react-icons/bs";

const ChatSidebarSample = () => {
    return (
        <Stack
            h={300}
            bg="var(--mantine-color-body)"
            align="stretch"
            justify="flex-start"
            gap="xs"
        >
            <AmeChatHistoryEntry placeholder='sample item 1' />
            <AmeChatHistoryEntry placeholder='sample item 2' />
            <AmeChatHistoryEntry placeholder='sample item 3' />
            <AmeChatHistoryEntry placeholder='What is the capital of the United States?' />
            <AmeMenu>
                <AmeMenu.Target>
                    <BsThreeDotsVertical size={16} />
                </AmeMenu.Target>
            </AmeMenu>
        </Stack>
    );
};

export default ChatSidebarSample;
