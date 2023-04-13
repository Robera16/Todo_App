import { useState, useEffect } from "react"
import { useFirestore } from "@/hooks/useFirestore"

export default function TodoForm({uid}){
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const { addDocument , response } = useFirestore('todos') 

    const handleSubmit = (e) => {
        e.preventDefault()
        addDocument({ 
            uid,
            title,  
            description
          })
        
        setTitle('')
        setDescription('')
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
                    <span>Description:</span>
                    <textarea
                        type = 'text'
                        required
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                    />
                </label>
                <button>Add Todo</button>
            </form>
        </>
    )
}