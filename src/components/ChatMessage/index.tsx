import { Message } from "../@types"
import styles from "../../styles/ChatMessage.module.css"

type Props = {
    data: Message
};

export default function ChatMessage({ data }: Props) {
    return <div className={styles.container} key={data.createdAt.toLocaleString()}>
        <div className={styles.user}>[{ data.user }]</div>
        <div className={styles.content}>{ data.content }</div>
        <div className={styles.date}>{ data.createdAt.toLocaleString() }</div>
    </div>
}