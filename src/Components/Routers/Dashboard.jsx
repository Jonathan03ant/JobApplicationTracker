import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { auth, db } from '../../Firebase';
import ApplicationTable from '../ApplicationTable';
import { set } from 'mongoose';

export default function DashBoard(){
    const [applications, setApplications] = useState([]);

    useEffect(() =>{
        const fetchApplications = async () => {
            const userId = auth.currentUser.uid;
            const querySnapshot = await getDocs(collection(db, "users", userId, "applications"));
            const applications = querySnapshot.docs.map(doc => doc.data());
            setApplications(applications);
        };

        fetchApplications();
    }, []);

    return(
        <div>
            <ApplicationTable applications={applications} />
        </div>
    )
}