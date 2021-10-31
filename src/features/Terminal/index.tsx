import styles from "@/styles/Terminal.module.css";
import { KeyboardEvent, useState } from "react";
// import { useLogin } from "./hooks/useLogin";

export default function Terminal() {
    const [chat,setChat] = useState<string>("");
    const updateChat = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        const newChat = (event.target as HTMLInputElement).value;
        const recommend =  (newChat[0] == "/") ?
            searchCommand(newChat) :
            newChat;
        setChat(recommend);
    }

    const searchCommand = (toSearch: string) => {
        const commands = ["/start","/reply","/like","/react","/dislike"];
        const searched = commands.filter(command =>
            command.slice(0, toSearch.length) == toSearch
        )
        return searched.length > 0 ? searched[0] : toSearch
    }
    // const { formMethods, submit, error, loading } = useLogin();
    // const { register, handleSubmit } = formMethods;

    return (
        <div className={styles.container}>
            <textarea
                className={styles.chat}
                defaultValue={chat}
                onKeyUpCapture={updateChat}
            ></textarea>
            <textarea
                value={chat}
                className={styles.glass}
            ></textarea>
        </div>
    );
}
