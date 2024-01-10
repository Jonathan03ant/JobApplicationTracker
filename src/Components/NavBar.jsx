import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdRemoveRedEye } from "react-icons/md";

export default function NavBar({ handleLogout}) {
    const navigate = useNavigate();
    const onLogout = () => {
        handleLogout();
        navigate('/');
    }
    return (
        <div className='flex justify-end mt-10 w-full'>
            <div className="navbar flex justify-between w-1/2 mr-40 text-md text-black font-bold font-cara space-y-1">
                <Link to="/dashboard" className=' bg-blue-200 py-1.5 px-3.5 rounded-sm  hover:bg-gray-200'> DashBoard </Link>
                <Link to="/add-application" className=' bg-blue-200 py-1.5 px-3.5 rounded-sm  hover:bg-gray-200'> Add Application </Link>
                <Link to="/watchlist" className='flex items-center bg-blue-200 py-1.5 px-3.5 rounded-sm  hover:bg-gray-200'> Watchlist <MdRemoveRedEye /> </Link>
                <button 
                    className='bg-blue-200 py-1.5 px-3.5 rounded-lg  hover:bg-gray-200'
                    onClick={onLogout}> 
                    Logout 
                </button>
            </div>
        </div>
    );
}



