"use client";
import Link from 'next/link'
import useChatCommon from '../(private)/chat';

const ChatHeader = () => {
  const {handleRouteToChatPage,isSearchPage,handleRouteToSearchPage,handleSearchInput} = useChatCommon()
  return (
    <header className="w-full border-b border-gray-200/40 dark:border-gray-700/40 bg-white/60 dark:bg-black/40 backdrop-blur sticky top-0 z-10" style={{ height: 'var(--header-h)' }}>
      <div className="mx-auto max-w-7xl h-full px-3 sm:px-4 lg:px-6 flex items-center gap-3">
        <div onClick={handleRouteToChatPage} className="flex items-center gap-2 cursor-pointer">
          <div className="h-8 w-8 rounded bg-gray-900 dark:bg-gray-100 text-white dark:text-black flex items-center justify-center text-sm">C</div>
          <span className="font-semibold text-sm sm:text-base">ChatterBox</span>
        </div>

        <div className="flex-1" />

        <div className="hidden md:flex md:flex-1 max-w-md md:mx-6">
          <div className="flex items-center w-full rounded-lg border border-gray-300 dark:border-gray-700 px-3 py-2">
            <svg className="h-4 w-4 text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm10 2-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            <input
              className="ml-2 w-full bg-transparent outline-none text-sm"
              placeholder={isSearchPage ? 'Search people' : 'Search conversations'}
              // defaultValue={isSearchPage ? (params.get('q') ?? '') : ''}
              onChange={handleSearchInput}
            />
          </div>
        </div>

        <nav className="flex items-center gap-2">
          <Link href="/" className="hidden sm:inline text-xs px-3 py-1.5 rounded border border-gray-300 dark:border-gray-700">Home</Link>
          {!isSearchPage && (
            <button
              type="button"
              aria-label="Search"
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={handleRouteToSearchPage}
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm10 2-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            </button>
          )}
        </nav>

        <div className="flex items-center gap-3 ml-2">
          {/* Notification icon */}
          <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800" aria-label="Notifications" type="button">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 6a4 4 0 0 0-4 4v3.764c0 .387-.124.764-.354 1.076l-.631.856c-.62.842-.036 2.048.998 2.048h9.974c1.034 0 1.618-1.206.998-2.048l-.631-.856a2 2 0 0 1-.354-1.076V10a4 4 0 0 0-4-4m0 0V4m-4 15a4 4 0 0 0 8 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
          </button>
          {/* Settings icon */}
          <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800" aria-label="Settings" type="button">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.325 4.317c.709-1.226 2.641-1.226 3.35 0l.176.304c.254.439.764.684 1.275.588l.348-.066c1.374-.262 2.595.959 2.333 2.333l-.066.348a1.5 1.5 0 0 0 .588 1.275l.304.176c1.226.709 1.226 2.641 0 3.35l-.304.176a1.5 1.5 0 0 0-.588 1.275l.066.348c.262 1.374-.959 2.595-2.333 2.333l-.348-.066a1.5 1.5 0 0 0-1.275.588l-.176.304c-.709 1.226-2.641 1.226-3.35 0l-.176-.304a1.5 1.5 0 0 0-1.275-.588l-.348.066c-1.374.262-2.595-.959-2.333-2.333l.066-.348a1.5 1.5 0 0 0-.588-1.275l-.304-.176c-1.226-.709-1.226-2.641 0-3.35l.304-.176a1.5 1.5 0 0 0 .588-1.275l-.066-.348c-.262-1.374.959-2.595 2.333-2.333l.348.066a1.5 1.5 0 0 0 1.275-.588l.176-.304ZM12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" stroke="currentColor" strokeWidth="2"/></svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default ChatHeader
