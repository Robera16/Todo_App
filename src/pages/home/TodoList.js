import { useFirestore } from '../../hooks/useFirestore'
import styles from './Home.module.css'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useCollection  } from '../../hooks/useCollection'

export default function TodoList() {

    const {user} = useAuthContext()
    const {documents, error} = useCollection(
        'todos',
        ['uid', '==', user.uid],
        ["createdAt", "desc"]
     )

    const {deleteDocument, response } = useFirestore('todos')
    return (
    <ul className={styles.todos}>
         {documents && (
              <>
        {documents.map((todo) => (
            <li key={todo.id}>
                <p className={styles.title}>{todo.title}</p>
                <p className={styles.description}>{todo.description}</p>
                <button onClick={() => deleteDocument(todo.id)}>X</button>
            </li>
        ))}
        </>)}

        {!documents && (
              <>
                <p>Loading...</p> 
              </>)}

    </ul>
  )
}