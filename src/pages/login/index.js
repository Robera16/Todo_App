import { useState } from 'react'
import { useLogin } from '../../hooks/useLogin'
import { useRouter } from 'next/router';
import { Router } from 'next/router';
import styles from './Login.module.css'
import { useAuthContext } from '../../hooks/useAuthContext'; 

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login, isPending, error } = useLogin()
    const router = useRouter();
    const { user, authIsReady } = useAuthContext()


    if (user) {
      router.replace('/');
      return null;
    }
    
    const handleSubmit = async(e) => {
      e.preventDefault()
      await login(email, password)
      router.push('/');
    }

    return (
      <>
      {!user && (
        <>
      <form onSubmit = {handleSubmit} className={styles['login-form']}>

        <h2>Login</h2>
        <label> 
          <span>email:</span>
          <input
            type='email'
            onChange={(e) => setEmail(e.target.value)} 
            value={email}
          />
        </label>

        <label> 
          <span>password:</span>
          <input
            type='password'
            onChange={(e) => setPassword(e.target.value)} 
            value={password} 
          />
        </label>
        {!isPending && <button className="btn">Login</button>}
        {isPending && <button className='btn' disabled>loading</button>}
        {error && <p>{error}</p>}     
      </form>
      </>
      )}
      </>
    )
  }