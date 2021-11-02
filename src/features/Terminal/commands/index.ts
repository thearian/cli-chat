type CommandInfo = {
    struct: string,
    info: string
}

type CommandsMap = Record<string,CommandInfo>;

export const commandsMap: CommandsMap = {
    new: {
        struct: "/new GROUPE_NAME @MEMBER1 @MEMBER2 @...",
        info: "Creates new groupe with including users",
    },
    join: {
        struct: "/join GROUPE_NAME",
        info: "Joins you to the groupe"
    }
}