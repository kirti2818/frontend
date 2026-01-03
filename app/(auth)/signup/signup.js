import { useState } from "react";

const Signup = ()=>{
      const [showPassword, setShowPassword] = useState(false);
      const [formData, setFormData] = useState({name : {value : '',error : false}, email : {value : '',error : false}, password : {value : '',error : false}});
     
      const handleFormData = (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        console.log(name,value)
        setFormData((prev)=>({...prev, [name] : {value : value, error : !value}}));
        console.log(formData);
        
      }
      const handleSubmit = (e) => {
         e.preventDefault();
        console.log(formData)
        if(!formData.name.value || !formData.email.value || !formData.password.value){
          setFormData({
            name : {...formData.name, error : !formData.name.value},
            email : {...formData.email, error : !formData.email.value},
            password : {...formData.password, error : !formData.password.value},
          })
          return;
        }
        console.log("Form submitted", formData);
      }

      return {showPassword, setShowPassword, handleFormData, handleSubmit, formData};
  
}

export default Signup;