import { useMutation } from "@tanstack/react-query"
import api from "../../api"
import { toast } from "react-toastify"

const useVerifyOtp = ()=>{
    const mutate = useMutation({
        mutationFn : async(data)=>{
            const response = await api.post('/auth/verify-otp',data)
            return response.data;
        },
        onSuccess:(data)=>{
             toast(data.message,{
                position:'top-right',
                type:'success',
                autoClose: 5000,

            })
        },
        onError:(error)=>{
             toast(error.response.data.message,{
                position:'top-right',
                type:'error',
                autoClose: 5000,

            })
        }
    })
    return mutate;
}

export default useVerifyOtp;