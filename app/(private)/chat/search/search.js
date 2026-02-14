import { useRouter } from "next/navigation";
import useGetSearchedUser from "../../../hooks/queries/useGetSearchedUser";
import { useDispatch, useSelector } from "react-redux";
import { addChatUser } from "../../../slices/chat.slice";

const useSearch = ()=>{
    const searchQuery = useSelector((state)=>state.search.searchQuery)
    const router = useRouter()
    const dispatch = useDispatch()
    const {data : searchUser, isPending:searchUserLoading} = useGetSearchedUser(searchQuery)

    const handleStartConversation = (user)=>{
        dispatch(addChatUser(user))
        router.replace('/chat')

    }

    return {searchUser,searchUserLoading,searchQuery,handleStartConversation}

}

export default useSearch;