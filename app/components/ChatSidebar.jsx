'use client';
import React from 'react'

const mockConversations = [
  { id: 1, name: 'Alice Johnson', last: 'See you soon!', time: '2m', unread: 2 },
  { id: 2, name: 'Bob Smith', last: 'Thanks!', time: '10m', unread: 0 },
  { id: 3, name: 'Charlie', last: 'Let’s catch up tomorrow.', time: '1h', unread: 1 },
  { id: 4, name: 'Dana Lee', last: 'Sent the files.', time: '3h', unread: 0 },
  { id: 5, name: 'Evan', last: '👍', time: 'Yesterday', unread: 0 },
  { id: 6, name: 'Alice Johnson', last: 'See you soon!', time: '2m', unread: 2 },
  { id: 8, name: 'Bob Smith', last: 'Thanks!', time: '10m', unread: 0 },
  { id: 9, name: 'Charlie', last: 'Let’s catch up tomorrow.', time: '1h', unread: 1 },
  { id: 10, name: 'Dana Lee', last: 'Sent the files.', time: '3h', unread: 0 },
  { id: 11, name: 'Evan', last: '👍', time: 'Yesterday', unread: 0 },
  { id: 12,name: 'Alice Johnson', last: 'See you soon!', time: '2m', unread: 2 },
  { id: 13, name: 'Bob Smith', last: 'Thanks!', time: '10m', unread: 0 },
  { id: 14, name: 'Charlie', last: 'Let’s catch up tomorrow.', time: '1h', unread: 1 },
  { id: 15, name: 'Dana Lee', last: 'Sent the files.', time: '3h', unread: 0 },
  { id: 16, name: 'Evan', last: '👍', time: 'Yesterday', unread: 0 },
]

const ChatSidebar = ({ onSelect }) => {
  return (
    <aside className="h-full w-full md:w-80 lg:w-96 border-r border-gray-200/40 dark:border-gray-700/40 bg-white/50 dark:bg-black/30 overflow-y-scroll">
      <div className="p-3 sm:p-4">
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center w-full rounded-lg border border-gray-300 dark:border-gray-700 px-3 py-2">
            <svg className="h-4 w-4 text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm10 2-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            <input className="ml-2 w-full bg-transparent outline-none text-sm" placeholder="Search people" readOnly />
          </div>
        </div>

        <div className="space-y-1">
          {mockConversations.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => onSelect && onSelect(c)}
              className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100/60 dark:hover:bg-gray-800/60 cursor-pointer text-left"
            >
              <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-sm font-medium">
                {c.name.split(' ').map(w => w[0]).slice(0,2).join('')}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-sm truncate">{c.name}</span>
                  <span className="ml-auto text-xs text-gray-500">{c.time}</span>
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400 truncate">{c.last}</div>
              </div>
              {c.unread > 0 && (
                <span className="px-2 py-1 rounded-full text-xs bg-blue-600 text-white">{c.unread}</span>
              )}
            </button>
          ))}
        </div>
      </div>
    </aside>
  )
}

export default ChatSidebar
