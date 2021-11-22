import { AddedConversations, Conversation, JoinedConversation, ListedConversations } from "@/components/@types";

export type CommandDef= {
    struct: string,
    info: string
    expression: string,
}

export type FullCommand = {
    commandName: CommandDef,
    words: string[]
}

export type CommandsMap = Record<string,CommandDef>;

// Resolvers Props
export type NewConversationProps = {
    command: FullCommand,
    addConversation: Function,
    addedConvertsations: AddedConversations,
    setConversation: Function,
}

export type JoinConversationProps = {
    command: FullCommand,
    joinConversation: Function,
    joinedConversation: JoinedConversation,
    setConversation: Function,
}

export type GotoConversationProps = {
    command: FullCommand,
    setConversation: Function,
    listConversations: Function
    listedConversations: ListedConversations,
}

export type listConversationsProps = {
    listConversations: Function
}