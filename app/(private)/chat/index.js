import { usePathname, useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../../slices/search.slice";

const useChatCommon = () => {
    const pathname = usePathname()
    const router = useRouter()
    const isSearchPage = pathname === '/chat/search'
    const timeRef = useRef()
    const dispatch = useDispatch()
    const handleRouteToChatPage = () => {
        router.push("/chat")
    }

    const handleRouteToSearchPage = ()=>{
        router.push("/chat/search")
    }

    const handleSearchInput = (event)=>{
        const value = event.target.value
        if(timeRef.current){
            clearTimeout(timeRef.current)
        }

        timeRef.current = setTimeout(() => {
            dispatch(setSearchQuery(event.target.value))

        }, 2000);

    }

    return { handleRouteToChatPage, isSearchPage,handleRouteToSearchPage,handleSearchInput }


}

export default useChatCommon;