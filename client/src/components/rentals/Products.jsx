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
                    {item.company}
                    {item.rentPrice}
                </div>
            )
        })} 
       </div>
       <Footer></Footer>
    </div>
  )
}

export default Products