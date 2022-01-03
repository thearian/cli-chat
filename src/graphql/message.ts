import { gql } from "@apollo/client";

export const ADD_MESSAGE = gql`
  mutation addMessage($conversation_id: ID!, $content: String!) {
    addMessage(conversation_id:$conversation_id, content: $content) {
        id
        conversation_id
        sender {
            id
            username
            join_date
            last_login_date
        }
        # parent {
        #     id
        #     conversation_id
        #     sender {
        #         id
        #         username
        #         join_date
        #         last_login_date
        #     }
        #     content
        #     submit_date
        #     last_edit_date
        #     delete_date
        # }
        content
        submit_date
        last_edit_date
        delete_date
    }
  }
`