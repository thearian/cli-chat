import { RunCommand } from "@/features/Terminal/commands/@types"

export type Message = {
    user: string,
    content: string,
    createdAt: Date,
}

export type Log = {
    command: RunCommand,
    description: string | string[],
    createdAt: Date,
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