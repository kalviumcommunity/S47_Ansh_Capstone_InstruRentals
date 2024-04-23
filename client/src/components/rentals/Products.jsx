import React, { useEffect, useState } from 'react'
import data from '../../assets/allProfucts.json'
import NavigationBar from '../NavigationBar';
import styles from './products.module.css'
import Footer from '../Footer';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Products = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const equipment = queryParams.get('equipment');
    const [instrument, setInstrument] = useState('pianos');
    const navigate = useNavigate()
    const [requiredData,setRequiredData] = useState({})
    useEffect(() =>{
        setInstrument(equipment);
    },[])


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://s47-ansh-capstone-instrurentals-1.onrender.com/instruments");
                // Assuming response.data.data is an array of instruments
                console.log(response)
                setRequiredData(response.data.data[0].instruments);
                console.log(requiredData)
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);


    const handleInstrments = (instrument) => {
        setInstrument(instrument)
    }

    const handleAddToCart = (id,image,productName, price,type) => {
        const existingCartItems = JSON.parse(localStorage.getItem('cart')) || [];

        // Add the new item to the cart
        const newItem = {id,image, productName, price, quantity: 1 ,type:type};
        const updatedCartItems = [...existingCartItems, newItem];

        // Update local storage with the updated cart items
        localStorage.setItem('cart', JSON.stringify(updatedCartItems));

        // Optionally, you can notify the user that the item has been added to the cart
        alert('Item added to cart!');

    };

    return (
        <div className={styles.main}>
            <NavigationBar></NavigationBar>

            <select id="instrumentGroupSelect" onChange={(e) => handleInstrments(e.target.value)}>
                <option value="" disabled selected>Select an instrument group...</option>
                <option value="pianos">Pianos</option>
                <option value="keyboards">Keyboards</option>
                <option value="organs">Organs</option>
                <option value="synthesisers">Synthesisers</option>
                <option value="electricGuitars">Electric Guitars</option>
                <option value="acousticGuitars">Acoustic Guitars</option>
                <option value="violins">Violins</option>
                <option value="cellos">Cellos</option>
                <option value="dynamicMics">Dynamic Microphones</option>
                <option value="condenserMics">Condenser Microphones</option>
                <option value="wirelessMics">Wireless Microphones</option>
                <option value="bassAmplifiers">Bass Amplifiers</option>
                <option value="guitarAmplifiers">Guitar Amplifiers</option>
                <option value="paSpeakers">PA Speakers</option>
                <option value="monitorSpeakers">Monitor Speakers</option>
                <option value="effectPedals">Effect Pedals</option>
            </select>

            <div className={styles.container}>
                {requiredData[instrument] && requiredData[instrument].map((item, index) => {
                    return (
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
                                    <div className={styles.buttons}>
                                        <button onClick={() => handleAddToCart(item.productId,item.imageLink,item.name, parseFloat(item.rentPrice.replace(/^\D+/g, '')),'Renting')}>
                                            Rent Now
                                        </button>
                                    </div>
                                    <div className={styles.buttons}>
                                        <button onClick={() => handleAddToCart(item.productId,item.imageLink,item.name, parseFloat(item.buyNowPrice.replace(/[^\d.]/g, '')),'Purchase')}>Add to Cart</button>
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