import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
            <div className='flex justify-end mt-10' >
                <div className="navbar flex justify-between w-1/2 mr-20 px-2 text-lg text-black font-bold font-crimson bg-transparent">
                    <button className=' bg-yellow-100 py-1.5 px-3.5 rounded-lg hover:bg-yellow-300'> DashBoard </button>
                    <button className=' bg-yellow-100 py-1.5 px-3.5 rounded-lg hover:bg-yellow-300'> Add Application </button>
                    <button className=' bg-yellow-100 py-1.5 px-3.5 rounded-lg hover:bg-yellow-300'> Watchlist </button>
                    <button className=' bg-yellow-100 py-1.5 px-3.5 rounded-lg hover:bg-yellow-300'> Logout </button>
                </div>
            </div>
        );
    }
}

export default NavBar;

