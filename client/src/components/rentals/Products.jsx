import React, { useEffect, useState } from 'react'
import data from '../../assets/allProfucts.json'
import NavigationBar from '../NavigationBar';
import styles from './products.module.css'
import Footer from '../Footer';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Products = () => {
    console.log(data.instruments);
    const currency = "INR";
    const receiptId = "qwsaql";
    const order = ''
    const [instrument,setInstrument] =useState('pianos'); 
    const navigate = useNavigate()

    const paymentHandler =async (e,buyPrice) =>{
        const amount = buyPrice

        const res = await axios.post("http://localhost:3000/api/payment/order",{amount,currency,receipt : receiptId})
        console.log(res)
        var options = {
            "key": "rzp_test_jUaTi9NhyMcCla", // Enter the Key ID generated from the Dashboard
            amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency,
            "name": "InstruRentals", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": res.data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "handler": async function (response){
                const body = {
                    ...response,
                }

                const validated = await axios.post("http://localhost:3000/api/payment/order/validate",body)
                console.log(validated.data)
            },
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
                "name": "Ansh Sharma", //your customer's name
                "email": "ansh.sharma@gmail.com", 

                "contact": "9000900000"  //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };
        var rzp1 = new window.Razorpay(options);
        rzp1.on('payment.failed', function (response){
                alert(response.error.code);
                alert(response.error.description);
                alert(response.error.source);
                alert(response.error.step);
                alert(response.error.reason);
                alert(response.error.metadata.order_id);
                alert(response.error.metadata.payment_id);
        });

        rzp1.open();
        e.preventDefault();
        console.log(response)
    }

    const handleInstrments = (instrument) =>{
        setInstrument(instrument)
    }

    const handleAddToCart = (productName, price) => {
        const existingCartItems = JSON.parse(localStorage.getItem('cart')) || [];

        // Add the new item to the cart
        const newItem = { productName, price, quantity: 1 };
        const updatedCartItems = [...existingCartItems, newItem];
    
        // Update local storage with the updated cart items
        localStorage.setItem('cart', JSON.stringify(updatedCartItems));
    
        // Optionally, you can notify the user that the item has been added to the cart
        alert('Item added to cart!');
        navigate('/cart')
    
    };

  return (
    <div className={styles.main}>
        <NavigationBar></NavigationBar>

        <select id="instrumentGroupSelect" onChange={(e)=>handleInstrments(e.target.value)}>
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
        {data.instruments[instrument].map((item,index)=>{
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
                        <div className={styles.buttons}>
                                    <button onClick={() => handleAddToCart(item.name, parseFloat(item.buyNowPrice.replace(/[^\d.]/g, '')))}>Add to Cart</button>
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