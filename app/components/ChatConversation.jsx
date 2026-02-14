'use client';
import useChat from "../(private)/chat/chat";

const mockMessages = [
  { id: 1, from: 'them', text: 'Hey! How are you?' },
  { id: 2, from: 'me', text: "I'm good, thanks!" },
  { id: 3, from: 'them', text: 'Want to meet later?' },
  { id: 4, from: 'me', text: 'Sure, sounds great.' },
  { id: 5, from: 'them', text: 'See you at 6.' },
  { id: 6, from: 'them', text: 'Hey! How are you?' },
  { id: 7, from: 'me', text: "I'm good, thanks!" },
  { id: 8, from: 'them', text: 'Want to meet later?' },
  { id: 9, from: 'me', text: 'Sure, sounds great.' },
  { id: 10, from: 'them', text: 'See you at 6.' },
  { id: 11, from: 'them', text: 'Hey! How are you?' },
  { id: 12, from: 'me', text: "I'm good, thanks!" },
  { id: 13, from: 'them', text: 'Want to meet later?' },
  { id: 14, from: 'me', text: 'Sure, sounds great.' },
  { id: 15, from: 'them', text: 'See you at 6.' },
  { id: 16, from: 'them', text: 'Hey! How are you?' },
  { id: 17, from: 'me', text: "I'm good, thanks!" },
  { id: 18, from: 'them', text: 'Want to meet later?' },
  { id: 19, from: 'me', text: 'Sure, sounds great.' },
  { id: 20, from: 'them', text: 'See you at 6.' },
  { id: 21, from: 'them', text: 'Hey! How are you?' },
  { id: 22, from: 'me', text: "I'm good, thanks!" },
  { id: 23, from: 'them', text: 'Want to meet later?' },
  { id: 24, from: 'me', text: 'Sure, sounds great.' },
  { id: 25, from: 'them', text: 'See you at 6.' },
]

const ChatConversation = () => {
  const { sendMessage, handleTypeMessage, message, chatWith } = useChat()
  
  if (!chatWith?.name) {
    return (
      <section className="flex-1 min-h-0 flex flex-col bg-white/40 dark:bg-black/20 overflow-hidden items-center justify-center">
        <div className="text-center">
          <div className="text-gray-400 dark:text-gray-600 text-lg">Start conversation here</div>
        </div>
      </section>
    )
  }
  
  return (
    <section className="flex-1 min-h-0 flex flex-col bg-white/40 dark:bg-black/20 overflow-hidden">
      {/* Conversation top bar */}
      <div className="sticky top-0 z-10 flex items-center gap-3 px-3 sm:px-4 py-3 border-b border-gray-200/40 dark:border-gray-700/40 bg-white/70 dark:bg-black/50 backdrop-blur">
        <div className="h-9 w-9 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-xs font-medium">{chatWith?.logo || 'UU'}</div>
        <div className="min-w-0">
          <div className="font-medium text-sm sm:text-base truncate">{chatWith?.name || 'Unknown User'}</div>
          <div className="text-xs text-gray-500">{chatWith?.status || 'Online'}</div>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <button className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800" aria-label="Call" type="button">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.32 2.318a2 2 0 0 1 2.56-.082l2.03 1.523a2 2 0 0 1 .594 2.5l-.732 1.464a2 2 0 0 0 .173 2.012l3.082 4.229a2 2 0 0 0 1.86.785l1.61-.206a2 2 0 0 1 2.14 1.315l.782 2.216a2 2 0 0 1-1.217 2.567c-2.125.77-7.16 1.78-12.832-3.893C2.928 10.247 1.92 5.214 2.69 3.089a2 2 0 0 1 2.568-1.217l1.062.446Z" stroke="currentColor" strokeWidth="2" /></svg>
          </button>
          <button className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800" aria-label="Info" type="button">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 17v-4m0-4h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-3 sm:px-4 py-4 space-y-2">
        {mockMessages.map(m => (
          <div key={m.id} className={`flex ${m.from === 'me' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[75%] sm:max-w-[60%] rounded-2xl px-3 py-2 text-sm shadow-sm ${m.from === 'me' ? 'bg-blue-600 text-white rounded-br-sm' : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-bl-sm'}`}>
              {m.text}
            </div>
          </div>
        ))}
      </div>

      {/* Composer */}
      <div className="px-3 sm:px-4 py-3 border-t border-gray-200/40 dark:border-gray-700/40">
        <form onSubmit={(e) => sendMessage(e)} className="flex items-center gap-2">
          <button className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800" aria-label="Add" type="button">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
          </button>
          <input className="flex-1 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent outline-none text-sm" placeholder="Type a message" onChange={handleTypeMessage} value={message} />
          <button type="submit" className={`px-3 py-2 rounded-lg bg-blue-600 text-white text-sm ${!message ? 'opacity-20 cursor-not-allowed' : ''}`} disabled={!message} aria-label="Send">Send</button>
        </form>
      </div>
    </section>
  )
}

export default ChatConversation
