import { gql } from "@apollo/client";

export const ADD_CONVERSATION = gql`
  mutation addConversation($title: String!) {
    addConversation(title: $title) {
      id
      title
      link
      member_count
      messages {
        id
        conversation_id
        sender {
          id
          username
          join_date
          last_login_date
        }
        parent {
          id
          conversation_id
          sender {
            id
            username
            join_date
            last_login_date
          }
          content
          submit_date
          last_edit_date
          delete_date
        }
        content
        submit_date
        last_edit_date
        delete_date
      }
      mute_status
      mute_date
      submit_date
      delete_date
      last_message_date
    }
  }
`;


export const JOIN_CONVERSATION = gql`
  mutation joinConversation($id: ID!) {
    joinConversation(id: $id) {
      id
      title
      link
      member_count
      messages {
        id
        conversation_id
        sender {
          id
          username
          join_date
          last_login_date
        }
        parent {
          id
          conversation_id
          sender {
            id
            username
            join_date
            last_login_date
          }
          content
          submit_date
          last_edit_date
          delete_date
        }
        content
        submit_date
        last_edit_date
        delete_date
      }
      mute_status
      mute_date
      submit_date
      delete_date
      last_message_date
    }
  }
`;

export const GET_CONVERSATIONS = gql`
  query getConversations {
    getConversations {
      id
      title
      link
      member_count
      mute_status
      mute_date
      submit_date
      delete_date
      last_message_date
    }
  }
`;