import React from 'react'
import ChatHeader from '../../components/ChatHeader'
import ChatSidebar from '../../components/ChatSidebar'
import ChatConversation from '../../components/ChatConversation'

const Page = () => {
  return (
    <div className="h-full w-full">
      <main className="h-full w-full mx-auto max-w-7xl flex flex-col md:flex-row overflow-hidden min-h-0">
        <ChatSidebar />
        <ChatConversation />
      </main>
    </div>
  )
}

export default Page