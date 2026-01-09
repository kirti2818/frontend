import { toast } from "react-toastify";
import useVerifyOtp from "../../hooks/mutations/useVerifyOtp";
import { useState } from "react";
import { useRouter } from "next/navigation";

const VerifyOtp = () => {
    const { mutate: verifyOTP } = useVerifyOtp()
    const [otp, setOtp] = useState('')
    const router = useRouter()

    const handleChange = (event) => {
        setOtp(event)
        // console.log(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("OTP Verified", event.target.value);
        if (otp.length < 4) {
            return toast('Please Enter Otp!', {
                position: 'top-right',
                autoClose: 3000,
                type: 'error'
            })

        }
        verifyOTP({ otp },{
            onSuccess:()=>{
                   router.push('/')
            }
        })

    };

    return { handleSubmit, handleChange,otp };
}
export default VerifyOtp;