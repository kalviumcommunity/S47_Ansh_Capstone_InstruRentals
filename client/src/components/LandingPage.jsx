import React from "react";
import NavigationBar from "./NavigationBar";
import styles from "./landing.module.css";

const LandingPage = () => {



  return (
    <div className={styles.main}>
      <NavigationBar />

      <div className={styles.container1}>
        <div className={styles.left}>
          <img
            src="../../public/instrurentals-high-resolution-logo-white-transparent.png"
            alt=""
          />
        </div>
        <div className={styles.right}>
          <div className={styles.heading}>
            Explore Boundless
            <br /> Musical Horizons.
          </div>
          <div className={styles.start}>
            <button>Start your Journey
            </button>
            <hr/>
          </div>
        </div>
      </div>


      <hr />


      <div className={styles.container2}>
        <div className={styles.content}>
            <div>
              Our Services
            </div>
            <div className={styles.circles}>
              <div className={styles.outerBox}>
                <div className={styles.circle}>
                  Rental
                </div>
                <div className={styles.text}>
                  <p>At InstruRentals, we offer a wide selection of musical instruments for rent, including guitars, drums, pianos, and more. Our rental process is easy and convenient, allowing you to rent the instrument of your choice for as long as you need it.</p>
                </div>
              </div>
              <div className={styles.outerBox}>
                <div className={styles.circle}>
                  Repair
                </div>
                <div className={styles.text}>
                  <p>We also provide repair services for your own instruments. Our experienced technicians can fix any issue and have your instrument sounding like new again.</p>
                </div>
              </div>
              <div className={styles.outerBox}>
                <div className={styles.circle}>
                  Lessons
                </div>
                <div className={styles.text}>
                  <p>Looking to improve your skills? Our music lessons are taught by professional musicians and cater to all skill levels. Whether you're a beginner or an advanced player, we have the right lesson for you.</p>
                </div>
              </div>
            </div>   
        </div>    
      </div>
    </div>
  );
};

export default LandingPage;
