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
      const data = await axios.post("http://localhost:3000/api/auth/signin",formData)
      if (data.success === false) {
        dispatch(signInFailure(data));
        return;
      }
      dispatch(signInSuccess(data));
      navigate('/profile');
    } catch (error) {
      dispatch(signInFailure(error));
    }
  };
  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
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
        >
          {loading ? 'Loading...' : 'Sign In'}
        </button>
        <OAuth />
      </form>
      <div >
        <p>Dont Have an account?</p>
        <Link to='/signup'>
          <span >Sign up</span>
        </Link>
      </div>
      <p>
        {error ? error.message || 'Something went wrong!' : ''}
      </p>
    </div>
  );
}