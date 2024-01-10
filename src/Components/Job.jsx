import React from 'react';
import { IoNavigate} from "react-icons/io5";
import { IoIosArrowDroprightCircle } from "react-icons/io";




export default function Job({ application, handleRefresh }) {

    const handleUpdate = async () => {
        // Update the job application data here...

        // After updating the data, call handleRefresh to refresh the data in the Watchlist component.
        handleRefresh();
    };

    return (
        <div className='bg-white shadow-emerald-400 rounded p-4 h-auto md:h-64'>
            <div className=' font-crimson text-xl'>
                <h3> <span className='text-2xl text-blue-950'>Company Name: </span>{application.companyName}</h3>
                <p> <span className='text-2xl  text-blue-950'>App Status: </span>App Status: {application.status}</p>
                <p><span className='text-2xl   text-blue-950'>Job Title: </span>{application.jobTitle}</p>
                <p><span className='text-2xl   text-blue-950'>Navigate: </span> <a href={application.jobLink}>Link</a></p>
                <p><span className='text-2xl   text-blue-950'>Location: </span>{application.location}</p>
                <p><span className='text-2xl   text-blue-950'>Contact</span> {application.contact}</p>
                <p><span className='text-2xl   text-blue-950'>Notes </span> {application.notes}</p>
            </div>
            <div className='flex justify-end'>
                <button className='text-green-400 text-lg'> <IoNavigate /> </button>
            </div>
        </div>
    );
}

