import { Message, Log, History, HistoryRecordType } from "@/components/@types"
import { useState } from "react"
import { RunCommand } from "../commands/@types"

export default function useMessage() {
    const [history, setHistory] = useState<History[]>([])
    const [logs, setLogs] = useState<Log[]>([])
    const [messages,setMessages] = useState<Message[]>([])

    
    function send(content: string) {
        const newMessage = {
            user: "arian",
            content,
            createdAt: new Date(),
        };
        setMessages((prevState: Message[]) => [
            ...(prevState as [Message]),
            newMessage
        ] as Message[]);
        updateHisttory({
            record: newMessage,
            type: HistoryRecordType.Message
        })
    };


    function log(command: RunCommand) {
        const newLog = {
            command: command,
            createdAt: new Date(),
        };
        setLogs((prevState: Log[]) => [
            ...(prevState as [Log]),
            newLog,
        ] as Log[]);
        updateHisttory({
            record: newLog,
            type: HistoryRecordType.Log
        })
    };


    function updateHisttory(newHistory: History) {
        setHistory((prevState: History[]) => [
            ...(prevState as History[]),
            newHistory,
        ] as History[])
    }


    return {
        messages,
        logs,
        history,
        send,
        log,
    };
}