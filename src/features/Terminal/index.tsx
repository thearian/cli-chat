import Chats from "@/components/Chats";
import HelpBar from "@/components/HelpBar";
import NewMessage from "@/components/NewMessage";
import styles from "@/styles/Terminal.module.css";
import { KeyboardEvent, useRef } from "react";
import useMessage from "./hooks/useMessage";
import useSearch from "./hooks/useSearch";

export default function Terminal() {
    const {message, updateMessage, help} = useSearch();
    const newMessageRef = useRef<HTMLTextAreaElement>(null)

    const {send, messages} = useMessage();

    const focusNewChat = () => {
        newMessageRef.current?.focus()
    }

    const handleChatChange = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        updateMessage(event, send)
    }

    return (
        <div className={styles.container} onClick={focusNewChat}>

            <Chats messages={messages} />

            <div className={styles.newChat}>
                <NewMessage
                    value={message}
                    handleChatChange={handleChatChange}
                    newMessageRef={newMessageRef}
                />
                <HelpBar struct={help} />
            </div>
        </div>
    );
}
