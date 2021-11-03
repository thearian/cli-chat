import Chats from "@/components/Chats";
import HelpBar from "@/components/HelpBar";
import styles from "@/styles/Terminal.module.css";
import { KeyboardEvent, useRef } from "react";
import useMessage from "./hooks/useMessage";
import useSearch from "./hooks/useSearch";

export default function Terminal() {
    const {chat, updateChat, help} = useSearch();
    const newChat = useRef<HTMLTextAreaElement>(null)

    const {send, messages} = useMessage();

    const focusNewChat = () => {
        newChat.current?.focus()
    }

    const handleChatChange = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        updateChat(event, send)
    }

    return (
        <div className={styles.container} onClick={focusNewChat}>

            <Chats messages={messages} />

            <div className={styles.newChat}>
                <div className="flex flex-row">
                    <span className={styles.dollarSign}>$</span>
                    <div className="flex flex-col">
                        <textarea
                            className={styles.chat}
                            defaultValue={chat}
                            onKeyDownCapture={handleChatChange}
                            onKeyUpCapture={handleChatChange}
                            rows={1}
                            autoFocus={true}
                            ref={newChat}
                        ></textarea>
                        <textarea
                            value={chat}
                            className={styles.glass}
                            rows={1}
                        ></textarea>
                    </div>
                </div>
                <HelpBar struct={help} />
            </div>
        </div>
    );
}
