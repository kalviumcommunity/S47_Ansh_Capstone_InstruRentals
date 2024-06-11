import React from 'react'
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth'
import {app} from '../../firebase.js'
import { useDispatch } from 'react-redux'
import { signInSuccess } from '../../redux/user/userSlice.js'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import styles from '../authStyles/signin.module.css'

const OAuth = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleGoogleClick = async() =>{
        try{
            const provider = new GoogleAuthProvider()
            const auth = getAuth(app)
            const result = await signInWithPopup(auth,provider);
            const data = await axios.post('https://s47-ansh-capstone-instrurentals-3.onrender.com/api/auth/google',{
                name : result.user.displayName,
                email : result.user.email
            })
            dispatch(signInSuccess(data));
            navigate('/shop')
        }catch(error){
            console.error("Could not login with google",error);
        }
    }

  return (
    <button type='button' onClick={handleGoogleClick} className={styles.googleButton}>
        Continue with google
    </button>

  )
}

export default OAuth