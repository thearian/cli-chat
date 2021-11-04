import styles from "@/styles/QuickInfo.module.css"

type Props = {
    conversation: string,
    user: string,
}

export default function QuickInfo(props: Props) {
    return <div className={styles.container}>
        <div className={styles.info}>
            { props.conversation }@{ props.user }
        </div>
        <div className={styles.newMessageType}>
            $
        </div>
    </div>
}