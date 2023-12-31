import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function HomeNav() {
    return (
        <div className='flex justify-end mt-10'>
                <div className='flex justify-between space-x-10 mx-20'>
                    <Link to='/' className=' bg-blue-200 py-1.5 px-3.5 rounded-sm hover:bg-gray-200'> Home </Link>
                    <Link to='/login' className=' bg-blue-200 py-1.5 px-3.5 rounded-sm hover:bg-gray-200'> Login </Link>
                    <Link to='/signup' className=' bg-blue-200 py-1.5 px-3.5 rounded-sm hover:bg-gray-200'> Signup </Link>
                </div>
            
        </div>
    );
}

