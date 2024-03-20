import React from 'react'
import styles from './signup.module.css'
import NavigationBar from '../NavigationBar'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className={styles.main}>
      <form className={styles.form}>
        <input
          type="text"
          placeholder='Username'
          required
          name='username' />
        <input
          type="email"
          placeholder='Email'
          required
          name='email' />
        <input
          type="password"
          placeholder='Password'
          required
          name='password' />
        <button>
          Sign Up
        </button>
      </form>

      <div>
        <p>Have an account?</p>
        <Link><span>Sign In</span></Link>
      </div>
    </div>
  )
}

export default Signup