import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {auth} from '../../Firebase';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import HomeNav from './HomeNav';
import GoogleIcon from '../Icons/GoogleSignin';

export default function Signup() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                navigate('/dashboard');
                console.log(user)
            })
            .catch ((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            })
    }

    const signUPWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then ((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;

                const user = result.user;
                navigate('/dashboard');
                console.log(user)
            })
            .catch ((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log(errorCode, errorMessage, email, credential)
            })
    }
    return (
        <>
            <HomeNav/>
            <div className='container h-screen flex justify-center items-center space-x-40'>

                <form 
                    className='flex flex-col space-y-2'
                    onSubmit={signUp}  
                >
                        <h1 className='font-cara text-3xl text-blue-950'> <strong> SIGNUP </strong></h1>
                        <label className='font-cara text-xl'> Email</label>
                        <input 
                            className='w-72 p-2 h-10'
                            type='text' 
                            placeholder='Email or Phone Number'
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <label className='font-cara text-xl'> Password</label>
                        <input  
                            className='w-72 h-10 p-2'
                            type='password' 
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button className='bg-blue-200 w-54 hover:bg-gray-200 text-black py-2 px-4 rounded ' type='submit'> Sign up</button>
                        <GoogleIcon onClick={signUPWithGoogle} />


                       
                        
                </form>
           
            </div>
        </>
    );
}