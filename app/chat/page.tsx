"use client"

import React from 'react'
import Chat from '@/components/Chat'
import { ChatProvider } from '@/context/chatContext'

const page = () => {
    return (
        <ChatProvider>
            <Chat />
        </ChatProvider>
    )
}

export default page