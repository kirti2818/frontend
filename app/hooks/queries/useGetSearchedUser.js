import { useQuery } from "@tanstack/react-query";
import api from "../../api";

const useGetSearchedUser = (search)=>{
    const searchQuery = search
    const query = useQuery({
        queryKey : ["/getSearchUser",searchQuery],
        queryFn : async()=>{
           const response = await api.get(`user/all?search=${searchQuery}`)
           console.log(response.data?.data)
           return response?.data?.data
        },
        enabled : !!searchQuery
    })

    return query;
    
}

export default useGetSearchedUser;