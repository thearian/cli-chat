import { RunCommand } from "../commands/@types";
import { commandsMap } from "../commands/map";
import * as Resolvers from "../commands/resolvers"


export default function useCommand(expression: string, setConversation: Function) {
    const words = expression.split(" ");
    const commandName = commandsMap[
        words[0].split("/")[1]
    ];
    const runCommand: RunCommand = {
        commandName,
        words,
    }

    switch (runCommand.commandName.expression) {
        case "new":
            Resolvers.newConversation(runCommand,setConversation);
        break;
        case "join":
            Resolvers.joinConversation(runCommand, setConversation);
        break;
        case "goto":
            Resolvers.gotoConversation(runCommand, setConversation);
        break;
    }

}
