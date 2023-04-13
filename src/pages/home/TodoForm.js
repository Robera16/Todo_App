import { useState } from "react"

export default function TodoForm(){
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({
            title, description
        })
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