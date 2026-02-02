import { useRouter } from "next/navigation";

const useChat = ()=>{
    const router = useRouter();

      const handleRouteToChatPage = () => {
      router.push('/chat');
  }

  return {handleRouteToChatPage};
}

export default useChat;
