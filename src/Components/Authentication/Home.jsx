import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();
    return (
            <div className='flex justify-center space-x-5 mt-20'>
                <button onClick={() => navigate('/login')}> signin</button>
                <button onClick={() => navigate('/signup')}> signup </button>
                
            </div>
        );
}


