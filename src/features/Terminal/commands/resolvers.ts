import { CommandStatus, Conversation, Log } from "@/components/@types"
import { useEffect } from "react"
import { NewConversationProps, JoinConversationProps, GotoConversationProps, listConversationsProps } from "./@types"


export const CommandResolvers: Record<string, Function> = {
    "new": newConversation,
    "join": joinConversation,
    "goto": gotoConversation,
    "list": listConversations,
}


async function newConversation({
    command,
    addConversation,
    addedConvertsations,
    setConversation
}: NewConversationProps) {
    const newConversationTitle = command.words[1]

    await addConversation({
        variables: {title: newConversationTitle}
    })

    const newConversation = addedConvertsations.data?.addConversation
    setConversation(newConversation)
}


async function joinConversation({
    command,
    joinConversation,
    joinedConversation,
    setConversation,
}: JoinConversationProps) {
    const conversationTitle = command.words[1]
    await joinConversation({
        variables: {title: conversationTitle}
    })

    const newConversation = joinedConversation.data?.joinConversation
    setConversation(newConversation)
}


async function gotoConversation({
    command,
    setConversation,
    listConversations,
    listedConversations
}: GotoConversationProps) {
    const conversationTitle = command.words[1]
    await listConversations()

    if (!listedConversations.data) return {
        success: false,
        error: "No data were found"
    }

    const conversationsWithTheTitle = listedConversations.data?.getConversations?.filter(
        conversation => conversation.title == conversationTitle
    )
    if (conversationsWithTheTitle && conversationsWithTheTitle.length > 0) {
        setConversation(conversationsWithTheTitle[0])
        return {
            success: true,
        }
    }
    console.log(conversationsWithTheTitle, listedConversations);
    
    return {
        success: false,
        error: conversationTitle + " is not a joined conversation"
    }
}


async function listConversations({ listConversations }: listConversationsProps) {
    await listConversations()
}