import { RunCommand } from "../commands/@types";
import { commandsMap } from "../commands/map";
import { CommandResolvers } from "../commands/resolvers";
import { ADD_CONVERSATION, GET_CONVERSATIONS, JOIN_CONVERSATION } from "@/graphql/conversation"
import { useLazyQuery, useMutation } from "@apollo/client"
import { useEffect, useState } from "react";
import { Log } from "@/components/@types";


export default function useCommand() {
    const [addConversation, addedConversation] = useMutation(ADD_CONVERSATION);
    const [joinConversation, joinedConversation] = useMutation(JOIN_CONVERSATION);
    const [listConversations, listedConversations] = useLazyQuery(GET_CONVERSATIONS);

    const provider = ( expression: string, setConversation: Function, log: Function) => {
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
        }
        const action = CommandResolvers[runCommand.commandName.expression]
        action(allProps)
        
        log(runCommand)
    }
    
    return provider
}
