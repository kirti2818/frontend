'use client';
import { jwtDecode } from 'jwt-decode';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const PrivateRouter = ({ children, token }) => {
    const [cookie, setCookie] = useState(token)
    const router = useRouter()
    const path = usePathname()

    useEffect(() => {
        setCookie(token)
    }, [token])

    useEffect(() => {
        if (!cookie) {
            return router.push('/login')
        }
        const decodeCookie = cookie ? jwtDecode(cookie) : {}

        if (path !== '/verify-otp' && !decodeCookie.is_email_verified) return router.push('/verify-otp')
        if (path === '/verify-otp' && decodeCookie.is_email_verified) return router.push('/chat')
        if (path === '/verify-otp' && !decodeCookie.is_email_verified) return;


    }, [path, cookie])

    return children
}

export default PrivateRouter;