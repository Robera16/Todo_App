import { useAuthContext } from '../../hooks/useAuthContext'
import { useCollection  } from '../../hooks/useCollection'
import styles from './Home.module.css'

import TodoForm from './TodoForm'
import TodoList from './TodoList'

export default function Home(){
    const {user} = useAuthContext()
    const {documents, error} = useCollection(
        'todos',
        ['uid', '==', user.uid],
        ["createdAt", "desc"]
     )

    return (
        <div className={styles.container}>
            <div className={styles.content}>
            {error && <p>{error}</p>}
            {documents && <TodoList/>}
            </div>
            <div className={styles.sidebar}>
                <TodoForm/>
            </div>
        </div>
    )
}