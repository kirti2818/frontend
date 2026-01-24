'use client'
import { usePathname, useRouter } from "next/navigation"
import { useEffect } from "react"

const AuthRouter = ({children,token}) => {
    const router = useRouter()
    const path = usePathname()

    useEffect(()=>{
        if(token){
            console.log("token",token);
            
            if(path === '/login' || path === '/signup') return router.push('/')

        }

    },[token])
  return (
    children
  )
}

export default AuthRouter