import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function NavBar({ handleLogout}) {
    const navigate = useNavigate();
    const onLogout = () => {
        handleLogout();
        navigate('/login');
    }
    return (
        <div className='flex justify-end mt-10' >
            <div className="navbar flex justify-between w-1/2 mr-20 px-2 text-lg text-black font-bold font-crimson bg-transparent">
                <Link to="/dashboard" className=' bg-yellow-200 py-1.5 px-3.5 rounded-lg hover:bg-yellow-300'> DashBoard </Link>
                <Link to="/add-application" className=' bg-yellow-200 py-1.5 px-3.5 rounded-lg hover:bg-yellow-300'> Add Application </Link>
                <Link to="/watchlist" className=' bg-yellow-200 py-1.5 px-3.5 rounded-lg hover:bg-yellow-300'> Watchlist </Link>
                <button 
                    className='bg-yellow-200 py-1.5 px-3.5 rounded-lg hover:bg-yellow-300'
                    onClick={onLogout}> 
                    Logout 
                </button>
            </div>
        </div>
    );
}



