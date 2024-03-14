import React from 'react'
import styles from './footer.module.css'

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
                        <div><img src="../../public/facebook.png" alt="" /></div>
                        <div><img src="../../public/instagram.png" alt="" /></div>
                        <div><img src="../../public/twitter.png" alt="" /></div>
                        <div><img src="../../public/youtube.png" alt="" /></div>
                        <div><img src="../../public/pinterest.png" alt="" /></div>
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