import React, { useState } from 'react'
import NavigationBar from '../NavigationBar'
import styles from './shop.module.css'
import data from '../../assets/products.json'
import Footer from '../Footer'

const Shop = () => {
    const [category, setCategory] = useState('')

    const handleCategory = (category) => {
        setCategory(category)
    }

    return (
        <div className={styles.main}>
            <div className={styles.container1}>
                <NavigationBar />
                {category === '' && (
                    <div className={styles.nothing}>
                        Welcome to our Store. <br />
                        Please select a category to continue
                    </div>
                )}
                <div className={styles.sele}>
                    <div className={styles.select}>
                        Select Your Instrument to Rent:
                    </div>
                    <select onChange={(e) => handleCategory(e.target.value)}>
                        <option value="">Select category</option>
                        <option value="string">Strings</option>
                        <option value="wind">Wind</option>
                        <option value="percussion">Percussion</option>
                        <option value="keyboard">Keyboard</option>
                        <option value="speakers">Speakers</option>
                        <option value="amplifiers">Amplifiers</option>
                        <option value="mics">Mics</option>
                    </select>
                </div>
                <div className={styles.productsContainer}>
                    <div className={styles.products}>
                        {data[category] &&
                            data[category].map((item, index) => (
                                <div className={styles.product} key={index}>
                                    <div className={styles.itemName}>
                                        <div>{item.name}</div>
                                        <div className={styles.buttons}>
                                            <button className={styles.white}>
                                                Rent Now
                                            </button>
                                            <button>Buy Now</button>
                                        </div>
                                    </div>
                                    <div>
                                        <img src={item.imageLink} alt="" />
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Shop
