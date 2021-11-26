import { Message, Log, History, HistoryRecordType, CommandStatus, Conversation } from "@/components/@types"
import { ADD_MESSAGE } from "@/graphql/message"
import { useLazyQuery, useMutation } from "@apollo/client"
import { useState } from "react"
import { FullCommand } from "../commands/@types"

export default function useMessage() {
    const [history, setHistory] = useState<History[]>([])
    const [logs, setLogs] = useState<Log[]>([])
    const [messages,setMessages] = useState<Message[]>([])
    const [addMessage, addedMessage] = useMutation(ADD_MESSAGE)

    
    function newMessage(newMessage: Message) {
        setMessages((prevState: Message[]) => [
            ...(prevState as Message[]),
            newMessage
        ] as Message[]);
        updateHisttory({
            record: newMessage,
            type: HistoryRecordType.Message
        })
    };


    type NewMessageAsMeProps = {
        content: string,
        conversation: Conversation
    }

    async function newMessageAsMe({ content, conversation }: NewMessageAsMeProps) {
        await addMessage({
            variables: {
                conversation_id: conversation.id,
                content,
            }
        })
        if (!addedMessage.data) return console.log(addedMessage.data);
        
        newMessage(addedMessage.data.addMessage)
    }


    function newLog(command: FullCommand, description?: string, status?: CommandStatus) {
        if (!command) return;
        const newLog: Log = {
            command,
            description,
            status,
            createdAt: new Date(),
        };
        setLogs((prevState: Log[]) => [
            ...(prevState as Log[]),
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


    function clearHistory() {
        setHistory([])
    }


    return {
        messages,
        logs,
        history,
        newMessageAsMe,
        newMessage,
        newLog,
        clearHistory,
    };
}