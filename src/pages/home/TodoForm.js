import { useState, useEffect } from "react"
import { useFirestore } from "@/hooks/useFirestore"

export default function TodoForm({uid}){
    const [title, setTitle] = useState('')
    const [date, setDate] = useState("");
    const { addDocument , response } = useFirestore('todos') 

    const handleSubmit = (e) => {
        e.preventDefault()
        addDocument({ 
            uid,
            title,  
            date
          })
        
        setTitle('')
        setDate('')
    }

    return (
        <>
            <h3>Add a Todo</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Title:</span>
                    <input
                        type = 'text'
                        required
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                </label>
                <label>
                    <span>Date:</span>
                    <input
                        type="date"
                        required
                        onChange={(e) => setDate(e.target.value)}
                        value={date}
                    />
                </label>
                <button>Add Todo</button>
            </form>
        </>
    )
}