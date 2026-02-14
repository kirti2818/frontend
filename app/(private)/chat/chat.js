import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import socket from "../../socket";
import { useSelector } from "react-redux";

const useChat = () => {
  const router = useRouter();
  const [message, setMessage] = useState('')
  const chatUser = useSelector((state)=>state.chat.chatUser)
  const [chatWith, setChatWith] = useState({name : '', status : 'Online', logo : ''})


  useEffect(()=>{
    if(!socket.connected) {
      socket.connect();
    }
    socket.on("receive_message", (data) => {
      console.log("Message received:", data);
    });


    return () => {
      socket.off("receive_message");
      socket.disconnect();
    };
  } ,[])

  useEffect(()=>{
    if(chatUser){
      let name = chatUser.name?.charAt(0).toUpperCase() + chatUser?.name?.slice(1)
      let logo = chatUser?.name?.trim().split(" ").map((el)=>el.charAt(0).toUpperCase()).slice(0,2).join("")
      setChatWith({name, logo, status : "Online" })

    }

  },[chatUser])

  const handleRouteToChatPage = () => {
    router.push('/chat');
  }

  const sendMessage = (event) => {
    event.preventDefault();
    console.log("Message Sent", message);
    socket.emit("send_message", { content: message, to: "receiver_user_id" });
    setMessage('')
  }

  const handleTypeMessage = (event) => {
    console.log("Typing Message", event.target.value);
    setMessage(event.target.value)
  }



  return { handleRouteToChatPage, sendMessage, handleTypeMessage, message,chatWith };
}

export default useChat;
