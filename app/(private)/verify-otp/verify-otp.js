import { toast } from "react-toastify";
import useVerifyOtp from "../../hooks/mutations/useVerifyOtp";
import { useRouter } from "next/navigation";
import useResendOtp from "../../hooks/mutations/useResendOtp";
import { useState } from "react";

const VerifyOtp = () => {
    const { mutate: verifyOTP, isPending: verifyOTPLoading } = useVerifyOtp()
    const { mutate: resendOtp, isPending: resendOtpLoading } = useResendOtp()
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
        verifyOTP({ otp }, {
            onSuccess: () => {
                setOtp('')
                router.push('/')
            }
        })

    };

    const handleResendOtp = () => {
        resendOtp({}, {
            onSettled:()=>{
                setOtp('')
            }
        })

    };

    return { handleSubmit, handleChange, otp, handleResendOtp, verifyOTPLoading, resendOtpLoading };
}
export default VerifyOtp;