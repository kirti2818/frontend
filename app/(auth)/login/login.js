import { useState } from "react";

const Login = ()=>{
    // const [formData,setFormData] = useState({email : {value : '', error : false}, password : {value : '', error : false}});
    const [showPassword, setShowPassword] = useState(false);

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
        console.log("FORM SUBMITTED : ", formData);
    }
    
    return {showPassword, setShowPassword,onSubmit};

}

export default Login;