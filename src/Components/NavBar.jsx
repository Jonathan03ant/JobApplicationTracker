import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
            <div className='flex justify-end mt-10 ' >
                <div className="navbar flex justify-between w-1/3 mr-20 text-xl text-black font-bold font-crimson bg-transparent">
                    <p className=' bg-yellow-100 py-1.5 px-3.5 rounded-lg hover:bg-yellow-300'> DashBoard </p>
                    <p className=' bg-yellow-100 py-1.5 px-3.5 rounded-lg hover:bg-yellow-300'> Add Application </p>
                    <p className=' bg-yellow-100 py-1.5 px-3.5 rounded-lg hover:bg-yellow-300'> Logout </p>
                </div>
            </div>
        );
    }
}

export default NavBar;

