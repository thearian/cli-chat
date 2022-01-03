import { Message } from "../@types"
import styles from "../../styles/ChatMessage.module.css"

type Props = {
    data: Message
};

export default function ChatMessage({ data }: Props) {
    return <div className={styles.container} key={data.id}>
        <div className={styles.user}>[{ data.sender.username }]</div>
        <div className={styles.content}>{ data.content }</div>
        <div className={styles.date}>{ data.submit_date.toLocaleString() }</div>
    </div>
}