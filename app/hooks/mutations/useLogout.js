import { useMutation } from "@tanstack/react-query"
import api from "../../api"
const useLogout = ()=>{
    const mutate = useMutation({
        mutationFn : async()=>{
            const response = await api.post("/auth/logout")
            return response.data
        }
    })

    return mutate;
}

export default useLogout;