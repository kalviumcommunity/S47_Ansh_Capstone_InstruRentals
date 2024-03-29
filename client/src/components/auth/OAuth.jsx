import React from 'react'
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth'
import {app} from '../../firebase.js'
import { useDispatch } from 'react-redux'
import { signInSuccess } from '../../redux/user/userSlice.js'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const OAuth = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleGoogleClick = async() =>{
        try{
            const provider = new GoogleAuthProvider()
            const auth = getAuth(app)
            const result = await signInWithPopup(auth,provider);
            // const res = await fetch('http://localhost:3000/api/auth/google', {
            //     method : "POST",
            //     headers:{
            //         "Content-Type" : "application.json"
            //     },
            //     body :JSON.stringify({
            //         name : result.user.displayName,
            //         email : result.user.email,
            //     })
            // })
            // const data = await res.json();
            const data = await axios.post('http://localhost:3000/api/auth/google',{
                name : result.user.displayName,
                email : result.user.email
            })
            dispatch(signInSuccess(data));
            navigate('/signin')
        }catch(error){
            console.error("Could not login with google",error);
        }
    }

  return (
    <button type='button' onClick={handleGoogleClick} >
        Continue with google
    </button>

  )
}

export default OAuth