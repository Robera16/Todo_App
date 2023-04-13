import { useState } from 'react'
import styles from './Signup.module.css'
import { useRouter } from 'next/router';
import { useSignup } from '../../hooks/useSignup'
import { useAuthContext } from '../../hooks/useAuthContext'; 

export default function Signup() {
    const[name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter();
    const { user } = useAuthContext()

    const { signup, isPending, error } = useSignup()


    if (user) {
      router.replace('/');
      return null;
    }

    const handleSubmit = async(e) => {
      e.preventDefault()
      try{
        await signup(name, email, password)
        router.push('/');
      }
      catch (error) {
          console.log(error);
        }
    }

    return (
      <>
      {!user && (
        <>
      <form onSubmit = {handleSubmit} className={styles['signup-form']}>

        <h2>Signup</h2>

        <label> 
          <span>name:</span>
          <input
            type='text'
            onChange={(e) => setName(e.target.value)} 
            value={name}
          />
        </label>

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
        { !isPending && <button className="btn">Sign up</button>}
        {isPending && <button className='btn' disabled>loading</button>}
        { error && <p>{error}</p>}     
      </form>
      </>
      )}
      </>
    )
  }