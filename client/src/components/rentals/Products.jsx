import React from 'react'
import data from '../../assets/allProfucts.json'
import NavigationBar from '../NavigationBar';
import styles from './products.module.css'
import Footer from '../Footer';

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
                        <div>
                            {item.name} <br />
                            <div className={styles.aom}>
                                <p>{item.company}</p>
                                <p>{item.type}</p>
                            </div>
                        </div>
                        <p>Rent price : {item.rentPrice}</p>
                        <p>Buy now Price : {item.buyNowPrice}</p>
                        <div className={styles.buttons}>
                            <div>
                                <button>Rent Now</button>
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