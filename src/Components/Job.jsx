import React from 'react';

export default function Job({ application, handleRefresh }) {

    const handleUpdate = async () => {
        // Update the job application data here...

        // After updating the data, call handleRefresh to refresh the data in the Watchlist component.
        handleRefresh();
    };

    return (
        <div className='bg-white shadow-emerald-200 rounded p-4 h-auto md:h-64'>
            <div>
                <h3>Company Name: {application.companyName}</h3>
                <p>App Status: {application.status}</p>
                <p>Job Title:{application.jobTitle}</p>
                <p><a href={application.jobLink}>Go to Application</a></p>
                <p>Place: {application.place}</p>
                <p>{application.contact}</p>
            </div>
            <button onClick={handleUpdate} className='bg-yellow-100 py-1.5 px-3.5 rounded-lg hover:bg-yellow-300 mt-4 self-end'>Remove from Watchlist </button>
        </div>
    );
}

