import React, { useState } from 'react'
import NavigationBar from '../NavigationBar'
import styles from './shop.module.css'
import data from '../../assets/products.json'
import Footer from '../Footer'
import { useNavigate } from 'react-router-dom'

const Shop = () => {
    const [category, setCategory] = useState('string')
    const navigate = useNavigate()

    const handleCategory = (category) => {
        setCategory(category)
        console.log(category);
    }

    const handleExplore = () =>{
        navigate('/products')
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
                <div className={styles.outerDrop}>
                    <div className={styles.sele}>
                        <div className={styles.select}>
                            Select Your Instrument to Rent:
                        </div>
                        <select onChange={(e) => handleCategory(e.target.value)}>
                            <option value="">Select category</option>
                            <option value="string">Strings</option>
                            <option value="effectPedals">Effect Pedals</option>
                            <option value="keyboard">Keyboard</option>
                            <option value="speakers">Speakers</option>
                            <option value="amplifiers">Amplifiers</option>
                            <option value="mics">Mics</option>
                        </select>
                    </div>
                </div>
                {/* <div className={styles.selectors}>
                    <div className={styles.options} onClick={()=>handleCategory("string")}>
                        Guitar
                    </div>
                    <div className={styles.options} onClick={()=>handleCategory("keyboard")}>
                        Piano
                    </div>
                    <div className={styles.options} onClick={()=>handleCategory("mics")}>
                        Mics
                    </div>
                    <div className={styles.options} onClick={()=>handleCategory("speakers")}>
                        Speakers
                    </div>
                    <div className={styles.options} onClick={()=>handleCategory("amplifiers")}>
                        Amplifiers
                    </div>
                    <div className={styles.options} onClick={()=>handleCategory("effectPedals")}>
                        Effect Pedals
                    </div>

                </div> */}
                <div className={styles.productsContainer}>
                    <div className={styles.products}>
                        {data[category] &&
                            data[category].map((item, index) => (
                                <div className={styles.product} key={index}>
                                    <div className={styles.itemName}>
                                        <div className={styles.nameOfItem}>{item.name}</div>
                                        <div className={styles.descrpitionOfItem}>{item.description}</div>
                                        <div className={styles.buttons}>
                                            <button className={styles.white} onClick={handleExplore}>
                                                Explore all the Products
                                            </button>
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
