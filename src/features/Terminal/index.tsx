import styles from "@/styles/Terminal.module.css";
import useSearch from "./hooks/useSearch";

export default function Terminal() {
    const {chat, updateChat} = useSearch();

    return (
        <div className={styles.container}>
            <textarea
                className={styles.chat}
                defaultValue={chat}
                onKeyDownCapture={updateChat}
            ></textarea>
            <textarea
                value={chat}
                className={styles.glass}
            ></textarea>
        </div>
    );
}
