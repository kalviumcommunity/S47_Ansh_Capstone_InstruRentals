  import { useState } from 'react';
  import { Link, useNavigate } from 'react-router-dom';
  import OAuth from './OAuth';
  import styles from '../authStyles/signin.module.css'
  import axios from 'axios';

  export default function SignUp() {
    const [formData, setFormData] = useState({});
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        setLoading(true);
        setError(false);
        const response = await axios.post('https://s47-ansh-capstone-instrurentals-3.onrender.com/api/auth/signup',formData)
        console.log(response);
        setLoading(false);
        setLoading(false);
        if (response.data.success) {
          navigate('/signin');
        }
        setError(true);
        return;

      } catch (error) {
        setLoading(false);
        setError(true);
      }
    };
    return (
      <div className={styles.main}>
        <div className={styles.left}>
            <img src="../../../public/kevin-mccutcheon-TcSckNRL9J8-unsplash.jpg" alt="" />
        </div>
        <div className={styles.right}>
          <p className={styles.signin}>Sign Up</p>
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type='text'
              placeholder='Username'
              id='username'
              onChange={handleChange}
            />
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
              type='submit'
            >
              {loading ? 'Loading...' : 'Sign Up'}
            </button>
            <OAuth />
          </form>
          <div className={styles.ac}>
            <p>Have an account?</p>
            <Link to='/signin'>
              <span className={styles.link}>Sign in</span>
            </Link>
          </div>
          <p >{error && 'Something went wrong!'}</p>
        </div>
      </div>
    );
  }
