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
                    <Link to='/signin'>
                        <button>LogIn</button>
                    </Link>
                </div>
                <div className={styles.signup}>
                    <Link to='/signup'>
                        <button>SignUp</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavigationBar