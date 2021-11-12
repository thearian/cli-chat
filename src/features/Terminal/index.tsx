import Chats from "@/components/Chats";
import HelpBar from "@/components/HelpBar";
import NewMessage from "@/components/NewMessage";
import styles from "@/styles/Terminal.module.css";
import { KeyboardEvent, useRef, useState } from "react";
import useCommand from "./hooks/useCommand";
import useMessage from "./hooks/useMessage";
import useSearch from "./hooks/useSearch";


export default function Terminal() {
    const [conversation, setConversation] = useState("master");
    const newMessageRef = useRef<HTMLTextAreaElement>(null)
    const {message, updateMessage, help} = useSearch();
    const {send, log, history} = useMessage();
    const commandProvider = useCommand();


    const focusNewChat = () => {
        newMessageRef.current?.focus()
    }

    const handleSendMessage = (content: string) => {
        if (content[0] != "/") return send(content);
        commandProvider(content, setConversation, log)
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
                <HelpBar struct={help} />
            </div>
        </div>
    );
}
