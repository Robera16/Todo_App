import { useState } from "react"
import { projectAuth } from "../firebase/config"
import { useAuthContext } from "./useAuthContext"

export const useSignup = () => {
    const[error, setError] = useState(null)
    const[isPending, setIsPending] = useState(false)
    const {dispatch} = useAuthContext()

    const signup = async (displayName, email, password) => {
        // reset the error every time we try to signup
        setError(null)
        setIsPending(true)

        try {
            // signup user
            const res = await projectAuth.createUserWithEmailAndPassword(email, password)
            console.log(res.user)
            if(!res){ // bad connection
                throw new Error('Could not complete signup')
            }

            // add name to user
            await res.user.updateProfile({displayName})
           
            // dispatch login action
            dispatch({type: "LOGIN", payload: res.user})

            setIsPending(false)
            setError(null)

        }catch(err){ // email is already taken, password is too short
            console.log(err.message)
            setError(err.message)
            setIsPending(false)
        }
    }

    return { error, isPending, signup } 
}