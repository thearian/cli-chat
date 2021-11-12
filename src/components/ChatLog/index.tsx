import { Log } from "../@types";
import styles from "@/styles/ChatLog.module.css"

type Props = {
    data: Log
}
export default function ChatLog({ data }: Props) {
    const commandWords = data.command
        .words
        .slice(1,data.command.words.length)
        .join(" ")
    return <div className={styles.container}>
        <div className="flex flex-row">
            <span className={styles.commandName}>{data.command.commandName.expression}</span>
            <span className={styles.commandWords}>{commandWords}</span>
        </div>
        <div className={styles.date}>
            {data.createdAt.toLocaleString()}
        </div>
    </div>
}