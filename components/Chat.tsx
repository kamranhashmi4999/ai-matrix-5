"use client";

import {
    useState,
    useEffect,
    useRef,
    useCallback,
    useLayoutEffect,
} from "react";
import { useSocketManager } from '@/lib/socket';
import { redirect } from "next/navigation";
import ChatBSettings from "@/app/chat/ChatSettings";
import ChatBotForm from "@/app/chat/ChatForm";
import ChatBotSettings from "@/app/chat/ChatSettings";
import { useChat } from "@/context/chatContext";
import { IconCircle, IconUserCircle, IconSend } from "@tabler/icons-react";
import { eRoleType, iChat } from "@/utils/types";
import { Container, Group, Paper, Text, Button, Flex, Stack, Space, Input } from '@mantine/core';


interface Settings {
    customOptions: boolean;
    aiPreferencesMain: string;
    aiPreferencesSecond: string;
    quickAnswer: boolean;
    improveQuestions: boolean;
    makeSmallTalk: boolean;
    submitOnEnter: boolean;
}


function ChatForm() {
    const [message, setMessage] = useState<string>("");
    const [msgHistory, setMsgHistory] = useState<any[]>([]);
    const [streamText, setStreamText] = useState<string>("");
    const scrollToLastItem = useRef<HTMLDivElement | null>(null);
    const lastMessageRef = useRef<HTMLLIElement>(null);
    const [isResponseLoading, setIsResponseLoading] = useState<boolean>(false);
    const [errorText, setErrorText] = useState<string>("");
    const [showFormSample, setShowFormSample] = useState<boolean>(false);
    const [formAnswers, setFormAnswers] = useState([]);

    const {
        chatHistory,
        setChatHistory,
    } = useChat();

    const sendMessageHandler = useSocketManager((response: string) => {
        setStreamText((prev) => prev + " " + response);
    });

    const getChatHistory = () => {
        let data = "";
        msgHistory.map((chat: any) => {
            data += `${chat.content}\n`;
        });
        return data;
    };

    useEffect(() => {
        if (lastMessageRef.current) {
            lastMessageRef.current.scrollIntoView({ block: 'end' });
        }
    }, [msgHistory.length, lastMessageRef])

    const displayUserMessage = (msg: string, type: any) => {
        const newMessage: any = {
            role: type,
            content: msg,
        };
        setMsgHistory((prev) => [...prev, newMessage]);
    };

    const settings: Settings = {
        customOptions: false,
        aiPreferencesMain: "Direct AI chat",
        aiPreferencesSecond: "Chat With One AI",
        quickAnswer: true,
        improveQuestions: false,
        makeSmallTalk: true,
        submitOnEnter: true
    }

    const sendMessage = (settings: Settings) => {
        const messageData = {
            message,
            answers: formAnswers ? formAnswers : [],
            history: getChatHistory(),
            settings,
            page: "react.chat.primary",
        };
    };

    const submitHandler = (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();
        if (!message) return;
        setErrorText("");
        displayUserMessage(message, eRoleType.USER);
        // sendMessage(settings);
        setMessage("")
        sendMessageHandler(streamText);
        displayUserMessage(streamText, eRoleType.ASSISTANT);
    };

    // useLayoutEffect(() => {
    //     const handleResize = () => {
    //         setIsShowSidebar(window.innerWidth <= 640);
    //     };
    //     handleResize();

    //     window.addEventListener("resize", handleResize);
    //     return () => {
    //         window.removeEventListener("resize", handleResize);
    //     };
    // }, []);

    // useEffect(() => {
    //     if (!user?.uid || !user.token) {
    //         redirect("/login");
    //     }
    // }, [user]);


    useEffect(() => {
        setMsgHistory(chatHistory[0].msgArr);
    }, [chatHistory]);

    useEffect(() => {
        if (streamText === "" || !isResponseLoading) return;

        setIsResponseLoading(false);
        // scrollToBottom();
    }, [streamText]);

    useEffect(() => {
        // scrollToBottom();
        if (msgHistory.length === 0) return;

        if (chatHistory.length === 0) {
            setChatHistory((prev) => [
                ...prev,
                {
                    title: "New Chat",
                    msgArr: msgHistory,
                },
            ]);
        } else {
            let data: iChat[] = chatHistory;

            data[0] = {
                title: chatHistory[0].title,
                msgArr: msgHistory,
            };
            setChatHistory(data);
        }
    }, [msgHistory]);

    // const toggleSidebar = useCallback((): void => {
    //     setIsShowSidebar((prev) => !prev);
    // }, []);

    return (
        <Container style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <Paper style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '16px' }}>
                <div style={{ textAlign: 'center' }}>
                    <Text size="lg">AI Matrix</Text>
                    <Text size="md">How can I help you today?</Text>
                </div>
                <Space my={16} />
                <ul style={{ flexGrow: 1, overflowY: 'auto' }}>
                    {msgHistory.map((chatMsg, idx) => (
                        <ChatMessage key={idx} chatMsg={chatMsg} idx={idx} msgHistory={msgHistory} streamText={streamText} />
                    ))}
                </ul>
            </Paper>
            <Paper style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '16px' }}>
                <ChatFormInput
                    message={message}
                    setMessage={setMessage}
                    submitHandler={submitHandler}
                    isResponseLoading={isResponseLoading}
                    errorText={errorText}
                    style={{ width: '100%' }}
                />
                <ChatBotSettings settings={settings} setShowFormSample={setShowFormSample} showFormSample={showFormSample} />
            </Paper>
        </Container>
    );
}

function ChatMessage({ chatMsg, idx, msgHistory, streamText }: any) {
    return (
        <Group>
            <Flex align="center">
                {chatMsg.role === eRoleType.USER ? (
                    <IconUserCircle size={22} style={{ marginRight: '8px' }} />

                ) : (
                    <IconCircle size={22} style={{ marginRight: '8px' }} />
                )}
                <Text>
                    {chatMsg.role === eRoleType.USER ? "You" : "AI Matrix"}
                </Text>
            </Flex>
            <Space my={16} />

            <Text>
                {idx === msgHistory.length - 1 &&
                    chatMsg.role === eRoleType.ASSISTANT &&
                    streamText.length > 0 ? (
                    streamText
                ) : (
                    chatMsg.content
                )}
            </Text>
        </Group>
    );
}

function ChatFormInput({ message, setMessage, submitHandler, isResponseLoading, errorText }: any) {
    return (
        <Container style={{ width: '100%' }}>
            <Paper>
                <form onSubmit={submitHandler}>
                    <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                        <Input
                            style={{ flex: 1, marginRight: '8px' }}
                            placeholder="Send a message"
                            value={isResponseLoading ? "Processing..." : message}
                            onChange={(e) => setMessage(e.target.value)}
                            readOnly={isResponseLoading}
                        />
                        <Button type="submit" radius="sm" style={{ height: '32px', borderRadius: '4px' }}>
                            <IconSend size={16} />
                        </Button>
                    </div>
                </form>
            </Paper>
        </Container>
    );
}

export default ChatForm;
