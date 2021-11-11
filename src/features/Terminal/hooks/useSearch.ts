import { KeyboardEvent, useState } from "react";
import { commandsMap } from "../commands/map";
import { Command } from "../commands/@types";

export default function useSearch() {
    const [message,setMessage] = useState<string>("");
    const [help,setHelp] = useState<string>("");

    const updateMessage = (event: KeyboardEvent<HTMLTextAreaElement>, send: Function) => {
        const newChat = (event.target as HTMLInputElement).value;
        const recommend = searchPresets(newChat);
        if (event.key == 'Tab') {
            event.preventDefault();
            if (recommend)
                (event.target as HTMLInputElement).value = "/" + recommend.expression;
        }
        if (event.key == 'Enter') {
            if (newChat.length == 0) return;
            event.preventDefault();
            (event.target as HTMLInputElement).value = '';
            setMessage('');
            send(newChat);
            return;
        }
        if (recommend) {
            setMessage("/" + recommend.expression);
            setHelp(recommend.struct)
        }
        else {
            setMessage(newChat)
            setHelp("")
        }
    }
    
    const searchPresets = (text: string): Command | null => {
        let foundCommand = null;
        if (text[0] == "/") {
            foundCommand = searchCommand(text);
        }
        // if (text.includes("@")) {
        //     recommend = searchUserAsFlag(recommend)
        // }
        return foundCommand;
    }

    const searchCommand = (expression: string): Command | null => {
        const word = expression.split("/")[1];
        if (!word) return null;

        const searched = Object.keys(commandsMap).filter(command =>
            command.slice(0, word.length) == word
        )
        const isFound = searched.length > 0;
        
        if (isFound) return commandsMap[searched[0]];
        return null;
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

    return {message, updateMessage, help};
}