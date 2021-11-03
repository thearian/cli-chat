import { Message } from "@/components/@types"
import { useState } from "react"

export default function useMessage() {
    const [messages,setMessages] = useState<Message[]>([])

    function send(content: string) {
        setMessages((prevState: Message[]) => {
            const newMessage = {
                user: "arian",
                content,
                createdAt: new Date(),
            };
            return [
                ...(prevState as [Message]),
                newMessage
            ] as Message[]
        });
    };

    return {messages, send};
}