import { GET_CONVERSATIONS_BY_LINK } from "@/graphql/conversation";
import { useQuery } from "@apollo/client";

export default function useConversation() {
    const {loading, error, data} = useQuery(GET_CONVERSATIONS_BY_LINK)

    if (loading) return;

    return data.getConversationByLink
}