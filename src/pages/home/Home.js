import styles from './Home.module.css'
import TodoForm from './TodoForm'

export default function Home(){
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                todo list
            </div>
            <div className={styles.sidebar}>
                <TodoForm/>
            </div>
        </div>
    )
}