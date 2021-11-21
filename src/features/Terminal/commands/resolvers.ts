import { Conversation, Log } from "@/components/@types"
import { useEffect } from "react"
import { NewConversationProps, JoinConversationProps, GotoConversationProps, listConversationsProps } from "./@types"


export const CommandResolvers: Record<string, Function> = {
    "new": newConversation,
    "join": joinConversation,
    "goto": gotoConversation,
    "list": listConversations,
}


async function newConversation({ command, addConversation}: NewConversationProps) {
    const newConversationTitle = command.words[1]

    await addConversation({
        variables: {title: newConversationTitle}
    })
}

async function joinConversation({ command, joinConversation}: JoinConversationProps) {
    const conversationTitle = command.words[1]
    joinConversation({
        variables: {title: conversationTitle}
    })
}

async function gotoConversation({
    command,
    setConversation,
    listConversations,
    listedConversations
}: GotoConversationProps) {
    const conversationTitle = command.words[1]
    await listConversations()
    const userConversations = listedConversations.data?.getConversations?.map(
        conversation => conversation.title
    )
    if (userConversations?.includes(conversationTitle)) setConversation(conversationTitle)
}

async function listConversations({ listConversations }: listConversationsProps) {
    await listConversations()
}