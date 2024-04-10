import React from 'react'
import data from '../../assets/allProfucts.json'
import NavigationBar from '../NavigationBar';
import styles from './products.module.css'
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import axios from 'axios'

const Products = () => {
    console.log(data.instruments);
    const amount = 5000;
    const currency = "INR";
    const receiptId = "qwsaql";
    const order = ''

    const paymentHandler =async (e) =>{
        const res = await axios.post("http://localhost:3000/api/payment/order",{amount,currency,receipt : receiptId})
        console.log(res)

        var options = {
            "key": "rzp_test_jUaTi9NhyMcCla", // Enter the Key ID generated from the Dashboard
            amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency,
            "name": "Acme Corp", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": res.data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "handler": async function (response){
                const body = {
                    ...response,
                }

                const validated = await axios.post("http://localhost:3000/api/payment/order/validate",response)
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
                                <button onClick={paymentHandler}>Buy Now</button>
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