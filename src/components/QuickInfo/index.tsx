import styles from "@/styles/QuickInfo.module.css"
import { Conversation } from "../@types"

type Props = {
    conversation: Conversation,
    user: string,
}

export default function QuickInfo(props: Props) {
    return <div className={styles.container}>
        <div className={styles.info}>
            { props.conversation.title }@{ props.user }
        </div>
        <div className={styles.newMessageType}>
            $
        </div>
    </div>
}