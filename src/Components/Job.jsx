import React, { Component } from 'react';

class Job extends Component {
    render() {
        return (
            <div className='bg-white shadow-emerald-200 rounded p-4 h-auto md:h-64'>
                <div>
                    <h3> Company Name </h3>
                    <p> Status Option Waiting, Applied, Interview...</p>
                    <p> Job Title </p>
                    <p> Go to link </p>
                    <p> Place</p>
                    <p> Date Applied </p>
                    <p> contact </p>
                </div>
                <button className='bg-yellow-100 py-1.5 px-3.5 rounded-lg hover:bg-yellow-300 mt-4 self-end'> Update</button>
            </div>
        );
    }
}

export default Job;
