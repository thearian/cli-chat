import { RunCommand } from "./@types"

export function newConversation(command: RunCommand,setConversation: Function) {
    setConversation(command.words[1])
}

export function joinConversation(command: RunCommand, setConversation: Function) {
    setConversation(command.words[1])
}

export function gotoConversation(command: RunCommand, setConversation: Function) {
    setConversation(command.words[1])
}