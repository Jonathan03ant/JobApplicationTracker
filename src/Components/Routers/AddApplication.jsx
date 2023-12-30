import React, { Component } from 'react';
import { useState } from 'react';
import ApplicationForm from '../ApplicationForm';

export default function AddApplication( {addApplication}) {
    const [jobLink, setJobLink] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [location, setLocation] = useState('');
    const [salary, setSalary] = useState('');
    const [status, setStatus] = useState('');
    const [dateAdded, setDateAdded] = useState('');
    const [contact, setContact] = useState('');
    const [notes, setNotes] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        addApplication({jobLink, jobTitle, companyName, location, salary, status, dateAdded, contact, notes});
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