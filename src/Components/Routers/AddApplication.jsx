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
    const [dateApplied, setDateApplied] = useState('');
    const [contact, setContact] = useState('');
    const [notes, setNotes] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        addApplication({jobLink, jobTitle, companyName, location, salary, status, dateApplied, contact, notes});
        setJobLink('');
        setCompanyName('');
        setJobTitle('');
        setLocation('');
        setSalary('');
        setStatus('');
        setDateApplied('');
        setContact('');
        setNotes('');
    };

    return (
        <div className="flex items-center justify-center bg-red-100 py-10 mt-20">
            <div className="bg-white p-6 rounded shadow-md w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
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
                    dateApplied={dateApplied}
                    setDateApplied={setDateApplied}
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