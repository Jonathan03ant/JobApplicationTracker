import React, { useState, useEffect } from 'react';
import { doc, getDoc, collection, getDocs } from 'firebase/firestore';
import { auth, db } from '../../Firebase';
import ApplicationTable from '../ApplicationTable';


export default function DashBoard(){
    const [applications, setApplications] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchApplications = async () => {
            const userId = auth.currentUser.uid;
            const userDoc = doc(db, 'users', userId);
            const userSnapshot = await getDoc(userDoc);
            setUser(userSnapshot.data());

            const applicationsRef = collection(db, 'users', userId, 'applications');
            const querySnapshot = await getDocs(applicationsRef);
            setApplications(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        };
    
        fetchApplications();
    }, [refresh]);

    const handleRefresh = () => {
        setRefresh(prev => !prev);
    };

    return(
        <div className='px-10 py-36 w-full flex'>
            {user && (
                <div className='h-full bg-white'>
                    <h1 className='mx-32 text-2xl text-blue-950 font-crimson'>Welcome, {user.firstName} </h1>

                </div>
           )}
            <div className='w-2/3 ml-32 items-center justify-center'>
                <ApplicationTable applications={applications} handleRefresh={handleRefresh}  />
            </div>
        </div>
    )
}