import { KeyboardEvent, useState } from "react";
import { commandsMap } from "../commands";

export default function useSearch() {
    const [chat,setChat] = useState<string>("");

    const updateChat = (event: KeyboardEvent<HTMLTextAreaElement>, send: Function) => {
        const newChat = (event.target as HTMLInputElement).value;
        const recommend = searchPresets(newChat);
        if (event.key == 'Tab') {
            event.preventDefault();
            (event.target as HTMLInputElement).value = recommend;
        }
        if (event.key == 'Enter') {
            if (newChat.length == 0) return;
            event.preventDefault();
            (event.target as HTMLInputElement).value = '';
            setChat('');
            send(newChat);
            return;
        }
        setChat(recommend);
    }
    
    const searchPresets = (text: string): string => {
        let recommend = text;
        if (text[0] == "/") {
            recommend = searchCommand(recommend);
        }
        if (text.includes("@")) {
            recommend = searchUserAsFlag(recommend)
        }
        return recommend;
    }

    const searchCommand = (expression: string): string => {
        const word = expression.split("/")[1];
        if (!word) return expression;
        const commands = commandsMap;

        const searched = Object.keys(commands).filter(command =>
            command.slice(0, word.length) == word
        )
        
        return searched.length > 0 ?
            "/"+searched[0] :
            expression
    }

    const searchUserAsFlag = (expression: string): string => {
        const word = expression.split("@")[1]
                    .split(" ")[0];
        if (!word) return expression;
        const testUsers = ["arian","nobody"];

        const searched = testUsers.filter(user => 
            user.slice(0, word.length) == word
        )
        
        return searched.length > 0 ?
            expression + searched[0].slice(word.length, searched[0].length) :
            expression
    }

    return {chat, updateChat};
}