import { Conversation } from "@/components/@types";
import Chats from "@/components/Chats";
import HelpBar from "@/components/HelpBar";
import NewMessage from "@/components/NewMessage";
import { GET_CONVERSATIONS_BY_LINK } from "@/graphql/conversation";
import styles from "@/styles/Terminal.module.css";
import { useQuery } from "@apollo/client";
import { KeyboardEvent, useRef, useState } from "react";
import useCommand from "./hooks/useCommand";
import useMessage from "./hooks/useMessage";
import useSearch from "./hooks/useSearch";


export default function Terminal() {
    const masterConversation = useQuery(GET_CONVERSATIONS_BY_LINK,{
        variables: { link: "master" }
    })
    const [conversation, setConversation] = useState<Conversation>();
    const newMessageRef = useRef<HTMLTextAreaElement>(null)
    const {message, updateMessage, help} = useSearch();
    const {
        newMessage,
        newMessageAsMe,
        newLog,
        clearHistory,
        history
    } = useMessage();
    const commandProvider = useCommand(newLog);


    const focusNewChat = () => {
        newMessageRef.current?.focus()
    }
    const updateConversation = (conversation: Conversation) => {
        clearHistory()
        setConversation(conversation)
        conversation.messages?.forEach(newMessage);
    }
    const handleSendMessage = (content: string) => {
        if (content[0] == "/") return commandProvider(content, updateConversation)
        if (!conversation) return;
        newMessageAsMe({ content, conversation });
    }
    const handleChatChange = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        updateMessage(event, handleSendMessage)
    }

    
    if (masterConversation.loading) return (
        <div className={styles.container}>
            <div className="p-5 text-yellow-300">
                Loading...
            </div>
        </div>
    )
    if (masterConversation.error) return (
        <div className={styles.container}>
            <div className="p-5 text-red-400">
                Some error has happened
            </div>
        </div>
    )
    if (masterConversation.data && !conversation)
        updateConversation(masterConversation.data.getConversationByLink)


    return (
        <div className={styles.container} onClick={focusNewChat}>

            <Chats history={history} />

            <div className={styles.newChat}>
                <NewMessage
                    conversation={conversation}
                    user={"arian"}
                    value={message}
                    handleChatChange={handleChatChange}
                    newMessageRef={newMessageRef}
                />
                <HelpBar def={help} />
            </div>
        </div>
    );
}
