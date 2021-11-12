import { History, HistoryRecordType, Log, Message } from "../@types"
import styles from "../../styles/Chats.module.css"
import ChatMessage from "../ChatMessage"
import ChatLog from "../ChatLog"

type Props = {
    history: History[]
}
export default function Chats({ history }: Props) {
    return <div className={styles.container}>
        {
            history.map(item => {
                if (item.type == HistoryRecordType.Message) {
                    return <ChatMessage data={item.record as Message} />
                }
                if (item.type == HistoryRecordType.Log) {
                    return <ChatLog data={item.record as Log} />
                }
            })
        }
    </div>
}