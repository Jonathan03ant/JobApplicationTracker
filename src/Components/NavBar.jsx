import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <div className='flex justify-end mt-10' >
                <div className="navbar flex justify-between w-1/2 mr-20 px-2 text-lg text-black font-bold font-crimson bg-transparent">
                    <Link to="/dashboard" className=' bg-yellow-100 py-1.5 px-3.5 rounded-lg hover:bg-yellow-300'> DashBoard </Link>
                    <Link to="/add-application" className=' bg-yellow-100 py-1.5 px-3.5 rounded-lg hover:bg-yellow-300'> Add Application </Link>
                    <Link to="/watchlist" className=' bg-yellow-100 py-1.5 px-3.5 rounded-lg hover:bg-yellow-300'> Watchlist </Link>
                    <button className='bg-yellow-100 py-1.5 px-3.5 rounded-lg hover:bg-yellow-300'> Logout </button>
                </div>
            </div>
        );
    }
}

export default NavBar;

