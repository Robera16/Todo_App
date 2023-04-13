import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuthContext } from '../hooks/useAuthContext'; 
import HomePage from '../pages/home/Home'

export default function Home() {
  const router = useRouter()
  const { authIsReady, user } = useAuthContext()
  
  useEffect(() => {
    // redirect to login page if user is not logged in
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);

  return (
    <>
    {user && (
      <HomePage/>
      )}
    </>
  )
}
