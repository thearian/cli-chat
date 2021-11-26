import styles from "@/styles/NewMessage.module.css";
import { RefObject, KeyboardEvent, useRef, LegacyRef, MutableRefObject } from "react";
import { Conversation } from "../@types";
import QuickInfo from "../QuickInfo";

type Props = {
    value: string,
    handleChatChange: (event: KeyboardEvent<HTMLTextAreaElement>) => void,
    newMessageRef:  RefObject<HTMLTextAreaElement>,
    conversation: Conversation,
    user: string,
}

export default function NewMessage(props: Props) {
    const glass = useRef<HTMLTextAreaElement>(null)

    const oneRem = 16 //parseFloat(window.getComputedStyle(document.documentElement).fontSize)

    const autoResize = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        const self = (event.target as HTMLTextAreaElement)
        self.rows = self.scrollHeight / oneRem
        if(glass.current) glass.current.rows = self.rows
    }

    if (props.newMessageRef.current) props.newMessageRef.current.rows = 1

    return <div className={styles.container}>
        <QuickInfo conversation={props.conversation} user={props.user} />
        <div className={styles.textareas}>
            <textarea
                className={styles.chat}
                defaultValue={props.value}
                onKeyPress={autoResize}
                onKeyDownCapture={props.handleChatChange}
                onKeyUpCapture={props.handleChatChange}
                autoFocus={true}
                ref={props.newMessageRef}
            ></textarea>
            <textarea
                value={props.value}
                className={styles.glass}
                ref={glass}
            ></textarea>
        </div>
    </div>
}