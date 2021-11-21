import { RunCommand } from "../commands/@types";
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
    const [currentCommand, setCurrentCommand] = useState<RunCommand>()

    const provider = async ( expression: string, setConversation: Function) => {
        const words = expression.split(" ");
        const commandName = commandsMap[
            words[0].split("/")[1]
        ];
        const runCommand: RunCommand = {
            commandName,
            words,
        }

        const allProps = {
            command: runCommand,
            addConversation,
            joinConversation,
            setConversation,
            listConversations,
            listedConversations,
        }
        const action = CommandResolvers[runCommand.commandName.expression]
        await action(allProps)
        setCurrentCommand(runCommand)
    }
    
    useEffect(() => {
        if (currentCommand) logCommand()
    })

    function getDesc() {
        const description = listedConversations.data?.getConversations?.map(
            (conversation: Conversation) => conversation.title
        )
        
        listedConversations.data = null
        return description
    }

    function logCommand() {
        const description = listedConversations.data ? getDesc() : undefined;
        log(currentCommand, description)
        setCurrentCommand(undefined)
    }
    
    
    return provider
}
