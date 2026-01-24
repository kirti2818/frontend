import { useState } from "react";
import useLogin from "../../hooks/mutations/useLogin";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setToken } from "../../slices/auth.slice";

const Login = ()=>{
    // const [formData,setFormData] = useState({email : {value : '', error : false}, password : {value : '', error : false}});
    const [showPassword, setShowPassword] = useState(false);
    const {mutate : loginUser} = useLogin()
    const router =  useRouter()
    const dispatch = useDispatch()

    // const handleFormData = (e)=>{
    //      e.preventDefault();
    //     const {name, value} = e.target;
    //     setFormData((prev)=>({...prev, [name] : {value : value, error : !value }}))
    // }

    const onSubmit = (formData)=>{
        // e.preventDefault();
        // if(!formData.email.value || !formData.password.value){
        //     return setFormData({email : {...formData.email , error : !formData.email.value}, password : {...formData.password, error : !formData.password.value}})
        // }
        loginUser(formData,{
            onSuccess : (data)=>{
                let token = data.token;
                localStorage.setItem('token', JSON.stringify({
                    token,
                    expiry: (new Date()).getTime() + 60 * 1000 // 1 minute
                }))
                dispatch(setToken(data.token))
                router.push('/verify-otp')

            }
        })
    }
    
    return {showPassword, setShowPassword,onSubmit};

}

export default Login;