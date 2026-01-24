import React from 'react'

const mockPeople = [
  { id: 1, name: 'Alice Johnson', status: 'Online' },
  { id: 2, name: 'Bob Smith', status: 'Offline' },
  { id: 3, name: 'Charlie', status: 'Away' },
  { id: 4, name: 'Dana Lee', status: 'Online' },
]

const Page = () => {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <div className="w-full border-b border-gray-200/40 dark:border-gray-700/40 bg-white/60 dark:bg-black/40 backdrop-blur sticky top-0 z-10">
        <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-6 py-3 flex items-center gap-3">
          <span className="font-semibold text-sm sm:text-base">Search</span>
          <div className="flex-1" />
          <div className="flex items-center w-full max-w-xl rounded-lg border border-gray-300 dark:border-gray-700 px-3 py-2">
            <svg className="h-4 w-4 text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm10 2-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            <input className="ml-2 w-full bg-transparent outline-none text-sm" placeholder="Search people and conversations" readOnly />
          </div>
        </div>
      </div>

      <main className="flex-1 mx-auto w-full max-w-7xl px-3 sm:px-4 lg:px-6 py-4">
        <section>
          <h2 className="text-sm font-semibold mb-2">People</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {mockPeople.map(p => (
              <div key={p.id} className="flex items-center gap-3 p-3 rounded-lg border border-gray-200/40 dark:border-gray-700/40 hover:bg-gray-100/60 dark:hover:bg-gray-800/60 cursor-default">
                <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-sm font-medium">
                  {p.name.split(' ').map(w => w[0]).slice(0,2).join('')}
                </div>
                <div className="min-w-0">
                  <div className="font-medium text-sm truncate">{p.name}</div>
                  <div className="text-xs text-gray-500">{p.status}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-6">
          <h2 className="text-sm font-semibold mb-2">Recent conversations</h2>
          <div className="space-y-2">
            {[1,2,3,4].map(id => (
              <div key={id} className="flex items-center gap-3 p-3 rounded-lg border border-gray-200/40 dark:border-gray-700/40 hover:bg-gray-100/60 dark:hover:bg-gray-800/60 cursor-default">
                <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700" />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-sm truncate">Conversation {id}</span>
                    <span className="text-xs text-gray-500 ml-auto">Yesterday</span>
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 truncate">Last message preview for conversation {id}…</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )}

export default Page
