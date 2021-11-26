import { Conversation } from "@/components/@types";
import Chats from "@/components/Chats";
import HelpBar from "@/components/HelpBar";
import NewMessage from "@/components/NewMessage";
import styles from "@/styles/Terminal.module.css";
import { KeyboardEvent, useRef, useState } from "react";
import useCommand from "./hooks/useCommand";
import useMessage from "./hooks/useMessage";
import useSearch from "./hooks/useSearch";


export default function Terminal() {
    const [conversation, setConversation] = useState<Conversation>({
        id: "master",
        title: "master",
        link: "master",
        member_count: 1,
        submit_data: new Date(),
    });
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
        newMessageAsMe({ content, conversation });
    }

    const handleChatChange = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        updateMessage(event, handleSendMessage)
    }

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
