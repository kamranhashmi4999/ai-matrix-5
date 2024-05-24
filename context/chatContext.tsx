import { eRoleType, iChat } from "@/utils/types";
import {
    createContext,
    ReactNode,
    useContext,
    useState,
} from "react";


const ChatContext = createContext<{
    chatHistory: iChat[];
    setChatHistory: React.Dispatch<
        React.SetStateAction<iChat[]>
    >;
}>({
    chatHistory: [],
    setChatHistory: () => { }
});

export const ChatProvider = ({ children }: { children: ReactNode }) => {
    const [chatHistory, setChatHistory] = useState<iChat[]>([
        {
            title: "Chat 1",
            msgArr: [
                { role: eRoleType.USER, content: "Hello" },
                { role: eRoleType.ASSISTANT, content: "Hi there!" },
                { role: eRoleType.USER, content: "How are you?" },
                { role: eRoleType.ASSISTANT, content: "I'm doing well, thanks!" },
            ],
        },
        {
            title: "Chat 2",
            msgArr: [
                { role: eRoleType.USER, content: "What's the weather like today?" },
                { role: eRoleType.ASSISTANT, content: "It's sunny and warm." },
                { role: eRoleType.USER, content: "Great! Any plans for the weekend?" },
                { role: eRoleType.ASSISTANT, content: "I'm thinking of going hiking." },
            ],
        },
        {
            title: "Chat 3",
            msgArr: [
                { role: eRoleType.USER, content: "What's your favorite color?" },
                { role: eRoleType.ASSISTANT, content: "My favorite color is blue." },
                { role: eRoleType.USER, content: "Why blue?" },
                { role: eRoleType.ASSISTANT, content: "Blue represents trust and harmony." },
            ],
        }
    ]);
    // useEffect(() => {
    //     const handledata = async () => {
    //         const result = await axios.get('https://aimatrix-api.vercel.app/api/aichat', {
    //             params: {
    //                 user_id: user?.uid
    //             }
    //         })

    //         const chatData = result.data;

    //         if (chatData) {
    //             setIndex(chatData._id)
    //             if (chatData?.history) {
    //                 setChatHistory(chatData?.history);
    //                 if (chatData?.history.length > 0) {
    //                     setCurrentChat(0);
    //                 }
    //             }
    //         }
    //     }

    //     handledata();
    // }, [])

    return (
        <ChatContext.Provider
            value={{
                chatHistory,
                setChatHistory
            }}
        >
            {children}
        </ChatContext.Provider>
    );
};
export const useChat = () => {
    const context = useContext(ChatContext);

    if (context === undefined) {
        throw new Error("useChat must be used within a ChatProvider");
    }
    return context;
};

