import { useState } from "react";
import useLogin from "../../hooks/mutations/useLogin";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setToken } from "../../slices/auth.slice";
import socket from "../../socket";
import { toast } from "react-toastify";

const Login = () => {
    // const [formData,setFormData] = useState({email : {value : '', error : false}, password : {value : '', error : false}});
    const [showPassword, setShowPassword] = useState(false);
    const { mutate: loginUser } = useLogin()
    const router = useRouter()

    // const handleFormData = (e)=>{
    //      e.preventDefault();
    //     const {name, value} = e.target;
    //     setFormData((prev)=>({...prev, [name] : {value : value, error : !value }}))
    // }

    const onSubmit = (formData) => {
        // e.preventDefault();
        // if(!formData.email.value || !formData.password.value){
        //     return setFormData({email : {...formData.email , error : !formData.email.value}, password : {...formData.password, error : !formData.password.value}})
        // }
        loginUser(formData, {
            onSuccess: () => {
                router.push('/verify-otp')
                if (!socket.connected) socket.connect();
                socket.on("connect_error", (err) => {
                    toast.error('Socket not connected !')
                    console.log("Socket error:", err.message);
                });

            }
        })
    }

    return { showPassword, setShowPassword, onSubmit };

}

export default Login;