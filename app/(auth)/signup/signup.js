import { useState } from "react";
import useSignup from "../../hooks/mutations/useSignup";

const Signup = ()=>{
      const [showPassword, setShowPassword] = useState(false);
      const [formData, setFormData] = useState({name : {value : '',error : false},user_name : {value : '',error : false}, email : {value : '',error : false}, password : {value : '',error : false}});
      const {mutate : userCreate} = useSignup()
     
      const handleFormData = (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        setFormData((prev)=>({...prev, [name] : {value : value, error : !value}}));
        
      }
      const handleSubmit = (e) => {
         e.preventDefault();
        if(!formData.name.value || !formData.user_name.value|| !formData.email.value || !formData.password.value){
          setFormData({
            name : {...formData.name, error : !formData.name.value},
            email : {...formData.email, error : !formData.email.value},
            user_name : {...formData.user_name, error : !formData.user_name.value},
            password : {...formData.password, error : !formData.password.value},
          })
          return;
        }
        userCreate({name : formData.name.value, user_name : formData.user_name.value, email : formData.email.value, password : formData.password.value})
      }

      return {showPassword, setShowPassword, handleFormData, handleSubmit, formData};
  
}

export default Signup;