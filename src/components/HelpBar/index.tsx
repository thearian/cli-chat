import styles from "@/styles/HelpBar.module.css";

type Props = {
    struct?: string,
}

export default function HelpBar({ struct }: Props) {
    return <div className={styles.container}>
        { struct }
    </div>
}