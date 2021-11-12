import { RunCommand } from "@/features/Terminal/commands/@types"

export type Message = {
    user: string,
    content: string,
    createdAt: Date,
}

export type Log = {
    command: RunCommand,
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