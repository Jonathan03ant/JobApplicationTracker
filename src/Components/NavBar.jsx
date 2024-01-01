import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineLabelImportant } from "react-icons/md";

export default function NavBar({ handleLogout}) {
    const navigate = useNavigate();
    const onLogout = () => {
        handleLogout();
        navigate('/');
    }
    return (
        <div className='flex justify-end mt-10' >
            <div className="navbar flex justify-between w-1/2 mr-20 px-2 text-lg text-black font-bold font-cara bg-transparent">
                <Link to="/dashboard" className=' bg-blue-200 py-1.5 px-3.5 rounded-sm  hover:bg-gray-200'> DashBoard </Link>
                <Link to="/add-application" className=' bg-blue-200 py-1.5 px-3.5 rounded-sm  hover:bg-gray-200'> Add Application </Link>
                <Link to="/watchlist" className='flex items-center bg-blue-200 py-1.5 px-3.5 rounded-sm  hover:bg-gray-200'> Watchlist <MdOutlineLabelImportant/> </Link>
                <button 
                    className='bg-blue-200 py-1.5 px-3.5 rounded-lg  hover:bg-gray-200'
                    onClick={onLogout}> 
                    Logout 
                </button>
            </div>
        </div>
    );
}



