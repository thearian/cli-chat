import { Message } from "../@types"
import styles from "../../styles/Chats.module.css"
import ChatMessage from "../ChatMessage"

type Props = {
    messages: Message[]
}
export default function Chats({ messages }: Props) {
    return <div className={styles.container}>
        {
            messages.map(message => {
                return <ChatMessage data={message} />
            })
        }
    </div>
}