import styles from "@/styles/NewMessage.module.css";
import { RefObject, KeyboardEvent, useRef, LegacyRef, MutableRefObject } from "react";
import QuickInfo from "../QuickInfo";

type Props = {
    value: string,
    handleChatChange: (event: KeyboardEvent<HTMLTextAreaElement>) => void,
    newMessageRef:  RefObject<HTMLTextAreaElement>,
    conversation: string,
    user: string,
}

export default function NewMessage(props: Props) {
    const glass = useRef<HTMLTextAreaElement>(null)

    const oneRem = parseFloat(getComputedStyle(document.documentElement).fontSize)

    const autoResize = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        const self = (event.target as HTMLTextAreaElement)
        console.log(self.scrollHeight / oneRem);
        
        self.rows = self.scrollHeight / oneRem
        if(glass.current) glass.current.rows = self.scrollHeight / oneRem
    }

    return <div className={styles.container}>
        <QuickInfo conversation={props.conversation} user={props.user} />
        <div className={styles.textareas}>
            <textarea
                className={styles.chat}
                defaultValue={props.value}
                onKeyPress={autoResize}
                onKeyDownCapture={props.handleChatChange}
                onKeyUpCapture={props.handleChatChange}
                // rows={1}
                autoFocus={true}
                ref={props.newMessageRef}
            ></textarea>
            <textarea
                value={props.value}
                className={styles.glass}
                // rows={1}
                ref={glass}
            ></textarea>
        </div>
    </div>
}