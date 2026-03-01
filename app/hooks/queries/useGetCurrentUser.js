import { useQuery } from "@tanstack/react-query"
import api from "../../api"

const useGetCurrentUser = ()=>{
    const query = useQuery({
        queryKey : ["/me"],
        queryFn : async()=>{
            const response = await api.get("/user/me")
            return response?.data?.data
        }
    })
    return query
}

export default useGetCurrentUser;