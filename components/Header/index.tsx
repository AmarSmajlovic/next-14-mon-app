'use client'

import auth from '@/services/auth'
import Link from 'next/link'
import { useRouter } from 'next/navigation'


const Header = () => {
  const router = useRouter()
  const user = JSON.parse(localStorage.getItem('user')!);


  const handleLogout = () => {
    auth.logout()
   return router.push('/login')
  }
  return (
    <div className='flex justify-between'>
    
        <div className='flex gap-4'>
          <Link href='/'>DASHBOARD</Link>
          <Link href='/products'>PRODUCTS</Link>
        </div>
     
      <div className='flex gap-4'>
       <span>{user.username}</span>
       <span>{user.id}</span>
      <button onClick={handleLogout}>logout</button>
      </div>
    </div>
  )
}

export default Header