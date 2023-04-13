import Link from "next/link"
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

import styles from './Navbar.module.css'

export default function Home() {
    const { logout } = useLogout()
    const { user } = useAuthContext()

    return (
        <nav className={styles.navbar}>
        <ul >
            <li className={styles.title}><Link href="/">TODO</Link></li>
            
            {!user && (
              <>
                <li>
                    <Link href="/login">
                        Login
                    </Link>
                </li>
                <li>
                    <Link href="/signup">
                        Signup
                    </Link>
                </li>
              </>
            )}

            {user && (
              <>
                <li>hello, {user.displayName}</li>
                <li>
                  <button className='btn' onClick={logout}>Logout</button>
                </li>
              </>
            )}
        </ul>
    </nav>
    )
  }