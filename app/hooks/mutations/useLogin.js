import { useMutation } from "@tanstack/react-query";
import api from "../../api";
import { toast } from "react-toastify";
import socket from "../../socket";

const useLogin = () => {
    const mutate = useMutation({
        mutationFn: async (data) => {
            const response = await api.post('/auth/login', data)
            return response.data;
        },
        onSuccess: (data) => {
            if (data?.token) localStorage.setItem('token', data.token)
            socket.auth = { token: data.token };
            toast(data.message, {
                position: 'top-right',
                type: 'success',
                autoClose: 5000,

            })
        },
        onError: (data) => {
            toast(data.response.data.message, {
                position: 'top-right',
                type: 'error',
                autoClose: 5000,

            })
        }
    })
    return mutate;
 
}

export default useLogin;
