"use client"
import ChatSidebar from '../../components/ChatSidebar'
import ChatConversation from '../../components/ChatConversation'
import useChat from './chat'

const Page = () => {
  const { chatList, allChatLoading, onSelectChat, sendMessage, handleTypeMessage, message, chatWith, chatFetched, fetchMsgsLoading, fetchMsgsError, currentUserDetail } = useChat()
  return (
    <div className="h-full w-full">
      <main className="h-full w-full mx-auto max-w-7xl flex flex-col md:flex-row overflow-hidden min-h-0">
        <ChatSidebar chatList = {chatList} allChatLoading = {allChatLoading} onSelectChat = {onSelectChat} />
        <ChatConversation sendMessage = {sendMessage} handleTypeMessage = {handleTypeMessage} message = {message} chatWith = {chatWith} chatFetched = {chatFetched} fetchMsgsLoading = {fetchMsgsLoading} fetchMsgsError = {fetchMsgsError} currentUserDetail = {currentUserDetail} />
      </main>
    </div>
  )
}

export default Page