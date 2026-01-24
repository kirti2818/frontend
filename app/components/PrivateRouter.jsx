'use client';
import { jwtDecode } from 'jwt-decode';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';

const PrivateRouter = ({ children, token }) => {
    console.log(token, "TOKEN...")
    const [cookie, setCookie] = useState(token)
    const router = useRouter()
    const path = usePathname()

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        console.log("IN", cookie,storedToken)
        if (!cookie && !storedToken) {
            return router.push('/login')
        }
        const decodeCookie = cookie ? jwtDecode(cookie) : jwtDecode(storedToken)
        console.log(decodeCookie, "DECODE COOKIE...");

        if (path !== '/verify-otp' && !decodeCookie.is_email_verified) return router.push('/verify-otp')
        if (path === '/verify-otp' && decodeCookie.is_email_verified) return router.push('/')
        if (path === '/verify-otp' && !decodeCookie.is_email_verified) return;


    }, [path])

    useEffect(() => {
        console.log("THIS USEEFFECT IS FOR CHANGING TOKEN")
        setCookie(token)

    }, [token])

    return children
}

export default PrivateRouter;