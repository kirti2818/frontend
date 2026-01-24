import { cookies } from 'next/headers'
import AuthRouter from '../components/AuthRouter'

const layout = async({children}) => {
    const cookie = await cookies();
    const token = cookie.get('token')?.value ?? ''
  return (
    <AuthRouter token ={token}>{children}</AuthRouter>
  )
}

export default layout