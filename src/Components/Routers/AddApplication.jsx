import React, { Component } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ApplicationForm from '../ApplicationForm';

import { db } from '../../Firebase';
import { auth } from '../../Firebase';
import { collection, addDoc } from 'firebase/firestore';

export default function AddApplication( {}) {
    const navigate = useNavigate();

    const [jobLink, setJobLink] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [location, setLocation] = useState('');
    const [salary, setSalary] = useState('');
    const [status, setStatus] = useState('');
    const [dateAdded, setDateAdded] = useState('');
    const [contact, setContact] = useState('');
    const [notes, setNotes] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        let finalJobLink = jobLink;
        if (!jobLink.startsWith('http://') && !jobLink.startsWith('https://')) {
            finalJobLink = 'http://' + jobLink;
        }

        const applicationData = {jobLink: finalJobLink, jobTitle, companyName, location, salary, status, dateAdded, contact, notes, watchlist: false};

        try {
            const userId = auth.currentUser.uid;

            const appCollectionRef = collection (db, 'users', userId, 'applications');

            const docRef = await addDoc(appCollectionRef, applicationData);
            console.log('Document written with ID: ', docRef.id);
            navigate('/dashboard');
        } catch (e) {
            console.error('Error adding document: ', e);
        }
        
        setJobLink('');
        setCompanyName('');
        setJobTitle('');
        setLocation('');
        setSalary('');
        setStatus('');
        setDateAdded('');
        setContact('');
        setNotes('');
    };

    return (
        <div className="flex items-center justify-center py-10 mt-20">
            <div className="bg-black rounded-md shadow-2xl w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
                <ApplicationForm
                    jobLink={jobLink}
                    setJobLink={setJobLink}
                    companyName={companyName}
                    setCompanyName={setCompanyName}
                    jobTitle={jobTitle}
                    setJobTitle={setJobTitle}
                    location={location}
                    setLocation={setLocation}
                    salary={salary}
                    setSalary={setSalary}
                    status={status}
                    setStatus={setStatus}
                    dateAdded={dateAdded}
                    setDateAdded={setDateAdded}
                    contact={contact}
                    setContact={setContact}
                    notes={notes}
                    setNotes={setNotes}
                    handleSubmit={handleSubmit}
                />
            </div>
        </div>
    );
}