import { CommandDef } from "@/features/Terminal/commands/@types";
import styles from "@/styles/HelpBar.module.css";

type Props = {
    def?: CommandDef | null,
}

export default function HelpBar({ def }: Props) {
    return <div className={styles.container}>
        <div> { def?.info } </div>
        <div> { def?.struct.split(" ").map(item => 
            <span className={styles.structItem}>{ item }</span>
        ) } </div>
    </div>
}