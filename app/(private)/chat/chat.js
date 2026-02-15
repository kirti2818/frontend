import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import socket from "../../socket";
import { useSelector } from "react-redux";
import useGetChatList from "../../hooks/queries/useGetChatList";
import { useQueryClient } from "@tanstack/react-query";

const useChat = () => {
  const queryClient = useQueryClient()
  const router = useRouter();
  const [message, setMessage] = useState('')
  const chatUser = useSelector((state) => state.chat.chatUser)
  const [chatWith, setChatWith] = useState({ name: '', status: 'Online', logo: '' })
  const { data: allChat, isPending: allChatLoading } = useGetChatList()
  const [chatList, setChatList] = useState([])
  const timeout = useRef(null)


  useEffect(() => {
    if (!socket.connected) {
      socket.connect();
    }
    socket.on("receive_message", (data) => {
      console.log("Message received:", data);
       queryClient.invalidateQueries("/chatList")
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
  }, [])

  useEffect(() => {
    if (chatUser) {
      let name = chatUser.name?.charAt(0).toUpperCase() + chatUser?.name?.slice(1)
      let logo = chatUser?.name?.trim().split(" ").map((el) => el.charAt(0).toUpperCase()).slice(0, 2).join("")
      setChatWith({ name, logo, status: "Online" })

    }

  }, [chatUser])

  useEffect(() => {
    if (!allChatLoading && allChat?.length) {
      const chats = allChat.map((el) => {
        const name = el.participant_details[0].name.charAt(0).toUpperCase() + el.participant_details[0].name.slice(1)
        return (!el.is_group_chat ? { ...el, name, last_message: el.last_message_detail[0].message, last_message_created: new Date(el.last_message_detail[0].createdAt).toLocaleDateString() } : el)
      })
      setChatList(chats);
    }
  }, [allChat, allChatLoading]);

  const handleRouteToChatPage = () => {
    router.push('/chat');
  }

  const sendMessage = (event) => {
    event.preventDefault();
    socket.emit("send_message", { content: message, to: chatUser?._id });
    if(timeout.current) clearTimeout(timeout)
    timeout.current = setTimeout(() => {
      queryClient.invalidateQueries("/chatList")
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



  return { handleRouteToChatPage, sendMessage, handleTypeMessage, message, chatWith, chatList, allChatLoading };
}

export default useChat;
