import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import socket from "../../socket";
import { useDispatch, useSelector } from "react-redux";
import useGetChatList from "../../hooks/queries/useGetChatList";
import { useQueryClient } from "@tanstack/react-query";
import { addChatUser, setAllChats, setChatId } from "../../slices/chat.slice";
import useGetMessages from "../../hooks/queries/useGetMessages";

const useChat = () => {
  const queryClient = useQueryClient()
  const router = useRouter();
  const [message, setMessage] = useState('')
  const chatUser = useSelector((state) => state.chat.chatUser)
  const [chatWith, setChatWith] = useState({ name: '', status: 'Online', logo: '' })
  const { data: allChat, isPending: allChatLoading } = useGetChatList()
  const [chatList, setChatList] = useState([])
  const timeout = useRef(null)
  const dispatch = useDispatch()
  const { allChats: allFetchedChats, chatId } = useSelector((store) => store.chat)
  const [isChatReady, setIsChatReady] = useState(false)
  const { data: fetchMsgs, isPending: fetchMsgsLoading, isError: fetchMsgsError } = useGetMessages(chatId, { enabled: isChatReady })
  const { userDetail: currentUserDetail } = useSelector((store) => store.user)
  const [chatFetched, setChatFetched] = useState([])


  useEffect(() => {
    if (!socket.connected) {
      socket.connect();
    }
    socket.on("receive_message", (data) => {
      console.log("Message received:", data?.data);
      setChatFetched((prev) => [...prev, data?.data])
      queryClient.invalidateQueries({
        queryKey: ['/chatList'],
        exact: true
      })
      //   queryClient.setQueryData(['/chatList'], (oldData) => {
      //   if (!oldData) return oldData;

      //   return oldData.map(chat =>
      //     chat._id === data.chat_id
      //       ? {
      //           ...chat,
      //           last_message: data.content,
      //           last_message_created: new Date().toLocaleDateString()
      //         }
      //       : chat
      //   );
      // });
    });

    return () => {
      socket.off("receive_message");
      // socket.disconnect();
    };
  }, [currentUserDetail])

  useEffect(() => {
    if (chatUser) {
      let name = chatUser.name?.charAt(0).toUpperCase() + chatUser?.name?.slice(1)
      let logo = chatUser?.name?.trim().split(" ").map((el) => el.charAt(0).toUpperCase()).slice(0, 2).join("")
      setChatWith({ name, logo, status: "Online" })
      const chat_id = allFetchedChats?.find((chat) => (chat.participant_details[0]._id == chatUser._id))?._id
      dispatch(setChatId(chat_id ? chat_id : null))
      setIsChatReady(true)
    }

  }, [chatUser])

  useEffect(()=>{
    setChatFetched([])

  },[chatId])

  useEffect(() => {
    if (!allChatLoading && allChat?.length) {
      const chats = allChat.map((el) => {
        const name = el.participant_details[0].name.charAt(0).toUpperCase() + el.participant_details[0].name.slice(1)
        return (!el.is_group_chat ? { ...el, name, last_message: el.last_message_detail[0].message, last_message_created: new Date(el.last_message_detail[0].createdAt).toLocaleDateString() } : el)
      })
      setChatList(chats)
      dispatch(setAllChats(chats))
      // dispatch(addChatUser(chats[0]?.participant_details[0]))
    }
  }, [allChat, allChatLoading]);

  const handleRouteToChatPage = () => {
    router.push('/chat');
  }

  useEffect(() => {
    if (fetchMsgsLoading || !fetchMsgs.length) return;
    
    // will work on production kyuki ye 2 baar run ho rha tha strictmode ki wajah se
    // setChatFetched((prev) => {
    //   console.log(prev,"PREV")
    //   return [...prev, ...fetchMsgs]

    // })
        setChatFetched(fetchMsgs)

  }, [fetchMsgs,fetchMsgsLoading])

  const sendMessage = (event) => {
    event.preventDefault();
    socket.emit("send_message", { content: message, to: chatUser?._id });
    setChatFetched((prev) => [...prev, { _id : Date.now() + Math.random(), sender_id: chatUser?._id, user_id: currentUserDetail?._id, message }])
    if (timeout.current) clearTimeout(timeout)
    timeout.current = setTimeout(() => {
      queryClient.invalidateQueries({
        queryKey: ['/chatList'],
        exact: true
      })
    }, 1000);
    // queryClient.setQueryData(['/chatList'], (oldData) => {
    //   if (!oldData) return oldData;

    //   return oldData.map(chat =>
    //     chat._id === data.chat_id
    //       ? {
    //           ...chat,
    //           last_message: data.content,
    //           last_message_created: new Date().toLocaleDateString()
    //         }
    //       : chat
    //   );
    // });
    setMessage('')
  }

  const handleTypeMessage = (event) => {
    console.log("Typing Message", event.target.value);
    setMessage(event.target.value)
  }


  const onSelectChat = (chat) => {
    if (!chat.is_group_chat) {
      dispatch(addChatUser(chat?.participant_details[0]))
    }
  }



  return { handleRouteToChatPage, sendMessage, handleTypeMessage, message, chatWith, chatList, allChatLoading, onSelectChat, chatFetched, fetchMsgsLoading, fetchMsgsError, currentUserDetail };
}

export default useChat;
