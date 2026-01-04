import { useMutation } from "@tanstack/react-query";
import api from "../../api";
import { toast } from "react-toastify";

const useSignup = () => {
    const mutate = useMutation({
        mutationFn: async (data) => {
            const response = await api.post('/auth/signup', data)
            return response.data;
        },
        onSuccess: (data) => {
            toast(data.message, {
                position: "top-right",
                autoClose: 5000,
                type:'success'
            });

        },
        onError: (data) => {
            toast(data.response.data.message, {
                position: "top-right",
                autoClose: 5000,
                type:'error'
            });
        }

    })

    return mutate;

}

export default useSignup;