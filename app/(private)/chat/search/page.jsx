"use client"
import useSearch from './search'

const Page = () => {
  const {searchUser,searchUserLoading,searchQuery, handleStartConversation} = useSearch()
  return (
    <div className="min-h-screen w-full flex flex-col">

      <main className="flex-1 mx-auto w-full max-w-7xl px-3 sm:px-4 lg:px-6 py-4">
        <section>
          <h2 className="text-sm font-semibold mb-2">People</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {!searchQuery && <p>Type name to find User</p> }
            {!searchUserLoading && searchUser.map(p => (
              <div onClick={()=>handleStartConversation(p)} key={p._id} className="flex items-center gap-3 p-3 rounded-lg border border-gray-200/40 dark:border-gray-700/40 hover:bg-gray-100/60 dark:hover:bg-gray-800/60 cursor-default">
                <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-sm font-medium">
                  {p.name.split(' ').map(w => w[0]).slice(0,2).join('')}
                      
                </div>
                <div className="min-w-0">
                  <div className="font-medium text-sm truncate">{p.user_name}</div>
                  <div className="text-xs text-gray-500">{p.name}</div>
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
