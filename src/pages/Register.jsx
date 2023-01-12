import React from 'react'
import Add from "../img/addAvatar.png"
import { useState } from 'react';
import { createUserWithEmailAndPassword , updateProfile} from "firebase/auth";
import { auth, db, storage } from '../firebase'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 


function Register() {
  const [error, setError] = useState(false);

const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //Create a unique image name
      const storageRef = ref(storage, displayName);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

          } catch (err) {
            console.log(err);
            setError(true);
          }
        });
      });
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className='formContainer'>
        <div className="formWrapper">
            <span className='logo'>Chat App</span>
            <span class='title'>Register</span>
            <form onSubmit={handleSubmit}>
                <input required type="text" placeholder='name'/>
                <input required type="email" placeholder='email'/>
                <input required type="password" placeholder='password'/>
                <input required type="file" id='file' style={{display: 'none'}}/>
                <label htmlFor="file">
                  <img src={Add}/>
                  <span>Add an avatar</span>
                </label>
                <button>Sign Up</button>
                {error && <span>Something went wrong</span>}
            </form>
            <p>You have an account already? Login</p>
        </div>
    </div>
  )
}

export default Register