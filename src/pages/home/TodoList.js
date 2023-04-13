import { useFirestore } from '../../hooks/useFirestore'
import styles from './Home.module.css'

export default function TodoList({ todos }) {
    const {deleteDocument, response } = useFirestore('todos')

    console.log(response)
    return (
    <ul className={styles.todos}>
        {todos.map((todo) => (
            <li key={todo.id}>
                <p className={styles.title}>{todo.title}</p>
                <p className={styles.description}>${todo.description}</p>
                <button onClick={() => deleteDocument(todo.id)}>X</button>
            </li>
        ))}
    </ul>
  )
}
