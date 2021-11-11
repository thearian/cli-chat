export type Command = {
    struct: string,
    info: string
    expression: string,
}

export type RunCommand = {
    commandName: Command,
    words: string[]
}

export type CommandsMap = Record<string,Command>;

// Resolvers Props
export type NewConversationProps = {
    command: RunCommand,
    addConversation: Function,
}

export type JoinConversationProps = {
    command: RunCommand,
    joinConversation: Function,
}

export type GotoConversationProps = {
    command: RunCommand,
    setConversation: Function,
}

export type listConversationsProps = {
    listConversations: Function
}