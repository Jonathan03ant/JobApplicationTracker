import React, { useState, useEffect } from 'react';
import Job from '../Job';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { auth, db } from '../../Firebase';

export default function Watchlist(){
    const [applications, setApplications] = useState([]);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        const fetchWatchList = async () => {
            const userId = auth.currentUser.uid;
            const applicationsRef = collection(db, 'users', userId, 'applications');
            const watchlistSnapshot = await getDocs(query(applicationsRef, where('watchlist', '==', true)));

            const watchlist = watchlistSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setApplications(watchlist);
        
        };
        fetchWatchList();
    }, [refresh]);

    const handleRefresh = () => {
        setRefresh(prev => !prev);
    };

    return (
        <>
            <div>
                <div className='px-20 grid grid-cols-1 md:grid-cols-2 gap-10 mt-10'>
                    {applications.map((application => {
                        return <Job key={application.id} application={application} handleRefresh={handleRefresh} />
                    }))}
                </div>
            </div>
        </>
                    
    );
}

