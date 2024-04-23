import { useSelector } from 'react-redux';
import { useRef, useState, useEffect } from 'react';
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';
import { app } from '../../firebase.js';
import { useDispatch } from 'react-redux';
import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  signOut,
} from '../../redux/user/userSlice.js';
import axios from 'axios';
import NavigationBar from '../NavigationBar.jsx'
import styles from '../authStyles/profile.module.css'
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const dispatch = useDispatch();
  const fileRef = useRef(null);
  const [image, setImage] = useState(undefined);
  const [imagePercent, setImagePercent] = useState(0);
  const [imageError, setImageError] = useState(false);
  const [formData, setFormData] = useState({});
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const navigate = useNavigate()
  const { currentUser, loading, error } = useSelector((state) => state.user);
  console.log(currentUser.data._id);
  useEffect(() => {
    if (image) {
      handleFileUpload(image);
    }
  }, [image]);
  const handleFileUpload = async (image) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + image.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImagePercent(Math.round(progress));
      },
      (error) => {
        setImageError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setFormData({ ...formData, profilePicture: downloadURL })
        );
      }
    );
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      // const res = await fetch(`/api/user/update/${currentUser._id}`, {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // });
      // const data = await res.json();
      const data = await axios.put('http://localhost:3000/api/user/update/' + currentUser.data._id, {...formData,id:currentUser.data._id})
      if (data.success === false) {
        dispatch(updateUserFailure(data));
        return;
      }
      dispatch(updateUserSuccess(data));
      setUpdateSuccess(true);
    } catch (error) {
      dispatch(updateUserFailure(error));
    }
  };

  const handleDeleteAccount = async () => {
    try {
        dispatch(deleteUserStart());

        if (!currentUser || !currentUser.data || !currentUser.data._id) {
            console.log('sdnk')
            throw new Error("User ID not available");
        }

        const response = await axios.delete('http://localhost:3000/api/user/delete/' + currentUser.data._id,currentUser);

        if (response.success === false) {
            console.log('sds')
            dispatch(deleteUserFailure(response.data));
            return;
        }
        dispatch(deleteUserSuccess(response.data));
    } catch (error) {
        dispatch(deleteUserFailure(error.message));
    }
};

  const handleSignOut = async () => {
    try {
      navigate('/')
      localStorage.removeItem('orders');
      dispatch(signOut())
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles.main}>
      <NavigationBar></NavigationBar>
      <div className={styles.container}>
        <h1 className={styles.heading}>Profile</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type='file'
            ref={fileRef}
            hidden
            accept='image/*'
            onChange={(e) => setImage(e.target.files[0])}
          />
          {/* 
        firebase storage rules:  
        allow read;
        allow write: if
        request.resource.size < 2 * 1024 * 1024 &&
        request.resource.contentType.matches('image/.*') */}
          <img
            src={formData.profilePicture || currentUser.data.profilePicture}
            alt='profile'
            onClick={() => fileRef.current.click()}
          />
          <p >
            {imageError ? (
              <span>
                Error uploading image (file size must be less than 2 MB)
              </span>
            ) : imagePercent > 0 && imagePercent < 100 ? (
              <span>{`Uploading: ${imagePercent} %`}</span>
            ) : imagePercent === 100 ? (
              <span>Image uploaded successfully</span>
            ) : (
              ''
            )}
          </p>
          <input
            type='text'
            id='username'
            placeholder='Username'
            onChange={handleChange}
            defaultValue={currentUser.data.username}
          />
          <input
            defaultValue={currentUser.data.email}
            type='email'
            id='email'
            placeholder='Email'
            onChange={handleChange}
          />
          <input
            type='password'
            id='password'
            placeholder='Password'
            onChange={handleChange}
          />
          <button type='submit'>
            {loading ? 'Loading...' : 'Update'}
          </button>
        </form>
        <div className={styles.downButtons}>
          <div className={styles.deleteButton}>  
            <button
              onClick={handleDeleteAccount}
            >
              Delete Account
            </button>
          </div>
          <div className={styles.signoutButton}>  
            <button onClick={handleSignOut} >
              Sign out
            </button>
          </div>
        </div>
        <p>{error && 'Something went wrong!'}</p>
        <p>
          {updateSuccess && 'User is updated successfully!'}
        </p>
      </div>
    </div>
  );
}