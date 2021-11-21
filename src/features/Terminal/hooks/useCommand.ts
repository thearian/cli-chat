import { FullCommand } from "../commands/@types";
import { commandsMap } from "../commands/map";
import { CommandResolvers } from "../commands/resolvers";
import { ADD_CONVERSATION, GET_CONVERSATIONS, JOIN_CONVERSATION } from "@/graphql/conversation"
import { useLazyQuery, useMutation } from "@apollo/client"
import { useEffect, useState } from "react";
import { Conversation } from "@/components/@types";


export default function useCommand(log: Function) {
    const [addConversation, addedConversation] = useMutation(ADD_CONVERSATION);
    const [joinConversation, joinedConversation] = useMutation(JOIN_CONVERSATION);
    const [listConversations, listedConversations] = useLazyQuery(GET_CONVERSATIONS);
    const [currentCommand, setCurrentCommand] = useState<FullCommand>()


    const provider = async ( expression: string, setConversation: Function) => {
        const words = expression.split(" ");
        const commandName = commandsMap[
            words[0].split("/")[1]
        ];
        const FullCommand: FullCommand = {
            commandName,
            words,
        }

        const allProps = {
            command: FullCommand,
            addConversation,
            joinConversation,
            setConversation,
            listConversations,
            listedConversations,
        }
        const action = CommandResolvers[FullCommand.commandName.expression]
        await action(allProps)
        setCurrentCommand(FullCommand)
    }
    

    useEffect(() => {
        if (currentCommand) logCommand()
    })

    
    function logCommand() {
        if (!currentCommand) return;
        const description = commandDescription(currentCommand, listedConversations.data?.getConversations)
        log(currentCommand, description)
        setCurrentCommand(undefined)
    }
    
    
    function commandDescription(command: FullCommand, data?: any[]) {
        if (!data) return undefined;
        let description = null
        switch (command.commandName.expression) {
            case "list":
                description = (data as Conversation[]).map( conversation => conversation.title )
                listedConversations.data = null
            break;
        }
        return description
    }


    return provider
}
