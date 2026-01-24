import { cookies } from 'next/headers'
import PrivateRouter from '../components/PrivateRouter'

const layout = async({children}) => {
    const cookieStore = await cookies();
    const token = cookieStore.get('token')?.value ?? '';
    
  return (
    <PrivateRouter token = {token}>{children}</PrivateRouter>
  )
}

export default layout