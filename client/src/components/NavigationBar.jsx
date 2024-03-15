import React from 'react'
import styles from './Nav.module.css'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
  return (
    <div className={styles.main}>
        <div className={styles.container}>
            <div className={styles.navs}>
                <div className={styles.l}>Home
                </div>
                <div className={styles.l}>Client</div>
                <div className={styles.l}>Studios</div>
            </div>
            <div className={styles.buttons}>
                <div className={styles.login}>
                    <button>LogIn</button>
                </div>
                <div className={styles.signup}>
                    <button>SignUp</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavigationBar