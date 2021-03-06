import { CommandsMap } from "./@types"

export const commandsMap: CommandsMap = {
    new: {
        expression: "new",
        struct: "/new GROUPE_NAME @MEMBER1 @MEMBER2 @...",
        info: "Creates new groupe with including users",
    },
    join: {
        expression: "join",
        struct: "/join GROUPE_NAME",
        info: "Joins you to the groupe"
    },
    goto: {
        expression: "goto",
        struct: "/goto GROUPE_NAME",
        info: "Changes the current chat"
    },
    list: {
        expression: "list",
        struct: "/list",
        info: "Shows all your conversations"
    }
}