import { useState } from 'react'
import styles from './Signup.module.css'
import { useSignup } from '../../hooks/useSignup'

export default function Signup() {
    const[name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { signup, isPending, error } = useSignup()

    const handleSubmit = (e) => {
      e.preventDefault()
      signup(name, email, password)
    }

    return (
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
    )
  }