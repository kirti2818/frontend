import { useRouter } from "next/navigation"
import useLogout from "../../hooks/mutations/useLogout"

const useSettings = ()=>{
    const {mutate : logout , ispen} = useLogout()
    const router = useRouter()
    const handleLogout = async()=>{
        logout({},{
            onSuccess : ()=>{
                localStorage.removeItem("token")
                router.refresh()
            }
        })

    }

    return {handleLogout}
}

export default useSettings;