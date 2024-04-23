import React from 'react'
import styles from './footer.module.css'
import face from '../../public/facebook.png'
import pin from '../../public/pinterest.png'
import yout from '../../public/youtube.png'
import twit from '../../public/twitter.png'
import insta from '../../public/instagram.png'

const Footer = () => {
    return (
        <div className={styles.container6}>
            <div className={styles.footerUp}>
                <div className={styles.leftFooter}>
                    <div className={styles.company} >
                        InstruRentals
                    </div>
                    <div className={styles.l}>
                        Customer Care
                    </div>
                    <div className={styles.l}>
                        About Us
                    </div>
                    <div className={styles.l}>
                        Privacy Policy
                    </div>
                    <div className={styles.links}>
                        <div><img src={face} alt="" /></div>
                        <div><img src={insta} alt="" /></div>
                        <div><img src={twit} alt="" /></div>
                        <div><img src={yout} alt="" /></div>
                        <div><img src={pin} alt="" /></div>
                    </div>
                </div>
                <div className={styles.rightFooter}>
                    <div>
                        Get latest updates on the go. <br />
                        <span className={styles.blue}>Subscribe to our newsletter</span>. <br />
                        <div className={styles.newsletter}>
                            <input type="text" placeholder="Email" />
                            <button>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>

            <hr />

            <div className={styles.footerDown}>
                <div className={styles.li}>
                    <div className={styles.f}>
                        Website Terms
                    </div>
                    <div className={styles.f}>
                        Privacy Policy
                    </div>
                    <div className={styles.f}>
                        Accessibility Statement
                    </div>
                </div>
                <div className={styles.copyright}>
                    @2024 InstruRentals, LLC. All Rights Reserved
                </div>
            </div>
        </div>
    )
}

export default Footer