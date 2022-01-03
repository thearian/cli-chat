import { FullCommand, JoinConversationProps } from "@/features/Terminal/commands/@types"


// chat types


export type Conversation = {
    id: string,
    title: string,
    link: string,
    member_count: number,
    mute_status?: string,
    mute_date?: Date,
    submit_data: Date,
    delete_date?: Date,
    last_message_date?: Date,

    messages?: Message[]
}

export type Message = {
    id: string,
    conversation_id: string,
    content: string,
    submit_date: Date,
    last_edit_date?: Date,
    delete_date?: Date
    
    parent?: Message,
    sender: User,
}

export type User = {
    id: string,
    username: string,
    join_date: Date,
    last_login_date?: Date,
}


// command line types


export type Log = {
    command: FullCommand,
    description?: string | string[],
    status?: CommandStatus,
    createdAt: Date,
}

export type CommandStatus = {
    success: boolean,
    error?: string,
}

export enum HistoryRecordType {
    Message,
    Log,
}

export type History = {
    record: Message | Log,
    type: HistoryRecordType
}

export type ListedConversations = {
    data?: GetConversationsData
}

type GetConversationsData = {
    getConversations?: Conversation[]
}

export type AddedConversations = {
    data?: AddedConversationsData
}

type AddedConversationsData = {
    addConversation?: Conversation
}

export type JoinedConversation = {
    data?: JoinedConversationData,
}

type JoinedConversationData = {
    joinConversation?: Conversation
}