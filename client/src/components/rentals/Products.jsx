import React from 'react'
import data from '../../assets/allProfucts.json'
import NavigationBar from '../NavigationBar';
import styles from './products.module.css'
import Footer from '../Footer';
import { Link } from 'react-router-dom';

const Products = () => {
    console.log(data.instruments);
  return (
    <div className={styles.main}>
        <NavigationBar></NavigationBar>
        <div className={styles.container}>
        {data.instruments.pianos.map((item,index)=>{
            return(
                <div key={index} className={styles.card}>
                    <div>
                        <img src={item.imageLink} alt="" />
                    </div>
                    <div className={styles.details}>
                        <div className={styles.companyDetails}>
                            <p className={styles.name}>{item.name}</p>
                            <div className={styles.aom}>
                                <p className={styles.companyName}>{item.company}</p>
                                <p>{item.type}</p>
                            </div>
                        </div>
                        <p className={styles.prices}>Rent price : <span className={styles.p}>{item.rentPrice}</span></p>
                        <p className={styles.prices}>Buy now Price :<span className={styles.p}>{item.buyNowPrice}</span></p>
                        <div className={styles.buttons}>
                            <div>
                                <Link to='/cart'>
                                    <button>Rent Now</button>
                                </Link>
                            </div>
                            <div>
                                <button>Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })} 
       </div>
       <Footer></Footer>
    </div>
  )
}

export default Products