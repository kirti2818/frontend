import { useQuery } from "@tanstack/react-query"
import api from "../../api";

const useGetChatList = ()=>{
    const query = useQuery({
        queryKey : ['/chatList'],
        queryFn : async()=>{
            const response = await api("/chat/all")
            return response?.data?.data

        }
    })

    return query;
}

export default useGetChatList;