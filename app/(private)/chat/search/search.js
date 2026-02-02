import useGetSearchedUser from "../../../hooks/queries/useGetSearchedUser";
import { useSelector } from "react-redux";

const useSearch = ()=>{
    const searchQuery = useSelector((state)=>state.search.searchQuery)
    const {data : searchUser, isPending:searchUserLoading} = useGetSearchedUser(searchQuery)

    return {searchUser,searchUserLoading,searchQuery}

}

export default useSearch;