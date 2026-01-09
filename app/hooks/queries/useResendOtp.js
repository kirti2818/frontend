import { useQuery, useQueryClient } from "@tanstack/react-query"
import api from "../../api"

const useResendOtp = ()=>{
    const query = useQuery({
        // queryKey : ['']
        queryFn : async()=>{
            const response = await api.get('/auth/resend-otp')
            return response.data;

        },
        enabled : false
    })
    return query

}

export default useResendOtp;