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

      <hr />

      <div className={styles.container3}>
        <div className={styles.oute}>
          <div className={styles.p}>
            Our Equipments
          </div>
          <div className={styles.eu}>
            <div className={styles.equip}>
              <div>
                <img src="../../public/guitar.png" alt="" />
              </div>
              <div>
                Guitar
              </div>
            </div>
            <div className={styles.equip}>
              <div>
                <img src="../../public/piano-keyboard.png" alt="" />
              </div>
              <div>
                Piano
              </div>
            </div>

            <div className={styles.equip}>
              <div>
                <img src="../../public/mic.png" alt="" />
              </div>
              <div>
                Mics
              </div>
            </div>
            <div className={styles.equip}>
              <div>
                <img src="../../public/amplifier.png" alt="" />
              </div>
              <div>
                Amplifiers
              </div>
            </div>
            <div className={styles.equip}>
              <div>
                <img src="../../public/equalizer.png" alt="" />
              </div>
              <div>
                Effect Pedals
              </div>
            </div>
            <div className={styles.equip}>
              <div>
                <img src="../../public/speaker.png" alt="" />
              </div>
              <div>
                Speakers
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className={styles.container4a}>
        <div className={styles.he}>
          Our Customers
        </div>
        <div className={styles.review}>
          <div className={styles.custImage}>
            <img src="../../public/instrurentals-high-resolution-logo-transparent.png" alt="" />
          </div>
          <div className={styles.custDetails}>
            <div className={styles.custName}>
              Customer Name
            </div>
            <div className={styles.custReview}>
              At InstruRentals, we have helped countless customers find the perfect instrument for their needs. From beginners to professionals, our customers trust us to provide them with high-quality instruments and exceptional service.
            </div>
            <div className={styles.seemore}>
              See more Reviews
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container4b}>
        <div className={styles.k}>
          <div className={styles.more}>
            Join our Community
          </div>
          <div className={styles.more}>
            Make Lessons
          </div>
          <div className={styles.more}>
            Perform
          </div>
        </div>
      </div>

      <hr />


      <div className={styles.container5}>
        <div className={styles.rent}>
          <div className={styles.renthead}>
            Rent An Instrument
          </div>
          <div className={styles.sub}>
            Ready to start your musical journey? <br />
            Create an account.
          </div>
          <div className={styles.form}>
            <form>
              <div>
                <label>Name</label><br />
                <input type="text" placeholder="Name" />  
              </div>
              <div>
                <label>Email</label><br />
                <input type="email" placeholder="Email"/>
              </div>
              <div>
                <label >Password</label><br />
                <input type="password" placeholder="Password"/>
              </div>
              <div>
                <label >About</label><br />
                <textarea  cols="40" rows="10" placeholder="About"></textarea>
              </div>
              <button type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <hr />

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
            @2022 InstruRentals, LLC. All Rights Reserved
          </div>
        </div>
      </div>

    </div> 

  );
};

export default LandingPage;
