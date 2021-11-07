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
