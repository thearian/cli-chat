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

    const description = typeof data.description == 'object' ?
        data.description.map(
            descriptionItem => <span>{descriptionItem}</span>
        )
        : data.description

    return (
        <div className={styles.container} key={data.createdAt.toLocaleString()}>
            <div className={styles.colOne}>
                <div className="flex flex-row">
                    <span className={styles.commandName}>{data.command.commandName.expression}</span>
                    <span className={styles.commandWords}>{commandWords}</span>
                </div>
                <div className={styles.date}>
                    {data.createdAt.toLocaleString()}
                </div>
            </div>
            <span className={styles.description}>{description}</span>
        </div>
    )
}