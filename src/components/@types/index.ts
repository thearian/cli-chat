import { FullCommand, JoinConversationProps } from "@/features/Terminal/commands/@types"

export type Message = {
    user: string,
    content: string,
    createdAt: Date,
}

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