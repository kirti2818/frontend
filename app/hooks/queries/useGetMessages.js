import { useQuery } from "@tanstack/react-query"
import api from "../../api"

const useGetMessages = (chatId, options = {}) => {

    const query = useQuery({
        queryKey: ["/messages", chatId],
        queryFn: async () => {
            const response = await api.get(`/messages/${chatId}`)
            return response?.data?.data
        },
         enabled: !!chatId && options.enabled !== false, 

    })

    return query;

}

export default useGetMessages;