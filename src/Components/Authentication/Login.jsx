import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {auth} from '../../Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';


export default function login() {
    const navigate = useNavigate();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) =>{
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then ((userCredential) => {
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


    return (
        <div className='login flex justify-center space-x-5 mt-20'>
            <form 
                className='flex flex-col space-y-2'
                onSubmit={signIn}  
            >
                    <h1> Login in </h1>
                    <input 
                        type='text' 
                        placeholder='Email or Phone Number'
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input 
                        type='password' 
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type='submit'> Sign In </button>
            </form>
        </div>
    );
}


