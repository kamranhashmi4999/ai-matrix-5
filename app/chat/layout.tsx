"use client";
import React, { ReactNode } from 'react'
import { MainLayout } from '@/layout';
import { ChatProvider } from '@/context/chatContext';

type Props = {
    children: ReactNode;
};

export default function ChatLayout({ children }: Props) {
    return <MainLayout><ChatProvider>{children}</ChatProvider></MainLayout>
}