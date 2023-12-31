import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Typewriter} from 'react-simple-typewriter';
import Lottie from 'lottie-react';
import animation from '../../assets/Zt1.json';

import HomeNav from './HomeNav';

export default function Home() {
    const words = [
        'create an account for free\n',
        'or sign in\n',
    ]
    const navigate = useNavigate();
    return (
        <>
            <HomeNav />
            <div className='flex justify-end mt-5 mx-20'>
                 <span className='font-cara text-xl'>
                    <Typewriter
                        
                        words={words}
                        loop={0}
                        cursor
                        cursorStyle='_'
                        typeSpeed={100}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </span>
            </div>
            <div className='container h-screen flex justify-center items-center space-x-34 w-full'>
                <div className='w-1/3'>
                    <Lottie animationData={animation} />
                    <h1 className='font-cara text-3xl text-blue-950'> Zt, YOUR JOB SEARCHING JOURNEY PARTNER </h1>
                    <br />
                </div>
                <div className='font=cara flex  justify-center space-x-5 mt-20 ml-20'>
                    <div className='font-cara flex flex-col justify-center space-y-5 mt-20'>
                        <button className=' bg-blue-200 w-32 hover:bg-gray-200 text-black py-2 px-4 rounded' onClick={() => navigate('/login')}> SIGNIN</button>
                        <button className='bg-blue-200 w-32 hover:bg-gray-200 text-black py-2 px-4 rounded' onClick={() => navigate('/signup')}> SIGNUP</button>
                    </div>
                </div>

            </div>
        </>

        );
}


