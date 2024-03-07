import React from 'react'
import styles from './Nav.module.css'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
  return (
    <div className={styles.main}>
        <div className={styles.container}>
            <div className={styles.logo}>
                <img src="../../public/instrurentals-high-resolution-logo-black.png" alt="" />
            </div>
            <div className={styles.navs}>
                <div>Home</div>
                <div>Client</div>
                <div>Studios</div>
            </div>
            <div className={styles.links}>
                <a href="">
                    <i class="fi fi-brands-instagram"></i>
                </a>
                <a href="">
                    <i class="fi fi-brands-facebook"></i>
                </a>
                <a href="">
                    <i class="fi fi-brands-twitter"></i>
                </a>
                <a href="">
                    <i class="fi fi-brands-youtube"></i>
                </a>
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