import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from '../../redux/user/userSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import OAuth from '../auth/OAuth.jsx';
import axios from 'axios';
import styles from '../authStyles/signin.module.css'

export default function Signin() {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      // const res = await fetch('/api/auth/signin', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // });
      // const data = await res.json();
      const data = await axios.post("http://localhost:3000/api/auth/signin",formData,{
        headers:{
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`}
      })
      if (data.success === false) {
        dispatch(signInFailure(data));
        return;
      }
      console.log(data);
      localStorage.setItem("access_token",data.data.token)
      dispatch(signInSuccess(data));
      navigate('/shop');
    } catch (error) {
      dispatch(signInFailure(error));
    }
  };
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <img src="../../../public/kevin-mccutcheon-TcSckNRL9J8-unsplash.jpg" alt="" />
      </div>
      <div className={styles.right}>
        <p className={styles.signin}>Sign in</p>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type='email'
            placeholder='Email'
            id='email'
            onChange={handleChange}
          />
          <input
            type='password'
            placeholder='Password'
            id='password'
            onChange={handleChange}
          />
          <button
            disabled={loading}
            className={styles.signinButton}
          >
            {loading ? 'Loading...' : 'Sign In'}
          </button>
          <OAuth />
        </form>
        <div className={styles.ac}>
          <p>Dont Have an account?</p>
          <Link to='/signup'>
            <span className={styles.link}>Sign up</span>
          </Link>
        </div>
        <p className={styles.errorMessage}>
          {error ? error.message || 'Something went wrong!' : ''}
        </p>
      </div>
    </div>
  );
}