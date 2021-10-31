import styles from "@/styles/Terminal.module.css";
import { useState } from "react";
// import { useLogin } from "./hooks/useLogin";

export default function Terminal() {
    // const [chat,setChat] = useState<string>("");
    // cosnt updateChat = (e) => {

    // }
    // const { formMethods, submit, error, loading } = useLogin();
    // const { register, handleSubmit } = formMethods;

    return (
        <div className={styles.container}>
            <textarea className={styles.chat}>/sta</textarea>
            <textarea className={styles.glass}>/start</textarea>
        </div>
    );
}
