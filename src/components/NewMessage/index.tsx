import styles from "@/styles/NewMessage.module.css";
import { RefObject, KeyboardEvent } from "react";

type Props = {
    value: string,
    handleChatChange: (event: KeyboardEvent<HTMLTextAreaElement>) => void,
    newMessageRef:  RefObject<HTMLTextAreaElement>
}

export default function NewMessage(props: Props) {
    return <div className="flex flex-row">
        <span className={styles.dollarSign}>$</span>
        <div className="flex flex-col">
            <textarea
                className={styles.chat}
                defaultValue={props.value}
                onKeyDownCapture={props.handleChatChange}
                onKeyUpCapture={props.handleChatChange}
                rows={1}
                autoFocus={true}
                ref={props.newMessageRef}
            ></textarea>
            <textarea
                value={props.value}
                className={styles.glass}
                rows={1}
            ></textarea>
        </div>
    </div>
}