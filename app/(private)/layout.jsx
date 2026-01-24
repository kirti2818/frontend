import { cookies } from 'next/headers'
import PrivateRouter from '../components/PrivateRouter'
import ChatHeader from '../components/ChatHeader'

const layout = async({children}) => {
    const cookieStore = await cookies();
    const token = cookieStore.get('token')?.value ?? '';
    
  return (
    <PrivateRouter token={token}>
      <div className="min-h-screen w-full flex flex-col">
        <ChatHeader />
        <div className="h-[calc(100vh-var(--header-h))] w-full overflow-hidden">
          {children}
        </div>
      </div>
    </PrivateRouter>
  )
}

export default layout