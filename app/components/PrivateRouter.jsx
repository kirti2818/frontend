'use client';
import { jwtDecode } from 'jwt-decode';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import useGetCurrentUser from '../hooks/queries/useGetCurrentUser';
import { useDispatch } from 'react-redux';
import { setUserDetail } from '../slices/user.slice';

const PrivateRouter = ({ children, token }) => {
    const { data: me, isPending: meLoading, isError: meError } = useGetCurrentUser()
    const [cookie, setCookie] = useState(token)
    const router = useRouter()
    const path = usePathname()
    const dispatch = useDispatch()

    useEffect(() => {

        if (!me || meLoading) return;
        dispatch(setUserDetail(me))

    }, [meLoading, me])

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