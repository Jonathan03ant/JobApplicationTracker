
/*
    *This is the ApplicationForm component
    *Majority of the Form is imported from tailwind, and edited for optimized use
*/
import React from 'react';

export default function ApplicationForm({ 
    /*
        *This are the props that needs to be passed in from the parent component
    */
    jobLink, setJobLink,
    companyName, setCompanyName, 
    jobTitle, setJobTitle, 
    location, setLocation, 
    salary, setSalary, 
    status, setStatus, 
    dateAdded, setDateAdded, 
    contact, setContact,
    notes, setNotes, 
    handleSubmit }) {

    return (
        <form onSubmit={handleSubmit}>

            <div className="p-6 bg-white flex items-center justify-center">
                <div className="container max-w-screen-lg mx-auto">
                    <div>
                        <h2 className="text-2xl font-work text-black">Add Application</h2>
                        <p className="font-work mb-6 text-black">Please fill out all the fields.</p>
                        <div className="bg-white rounded shadow-sm p-4 px-4 md:p-8 mb-6">
                             <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                                
                                <div className="text-gray-600 my-20 ">
                                    <p className="font-medium font-work text-xl">Application Details</p>
                                </div>

                                <div className="lg:col-span-2">
                                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                        
                                        <div className="md:col-span-5">
                                            <label for="jobLink">Job Link</label>
                                            <input type="text" name="jobLink" id="jobLink" 
                                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" 
                                                value={jobLink} 
                                                onChange={(event) => setJobLink(event.target.value)} />
                                        </div>

                                        <div className="md:col-span-5">
                                            <label for="companyName">Company Name</label>
                                            <input type="text" name="companyName" id="companyName" 
                                                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" 
                                                value={companyName} 
                                                onChange={(event) => setCompanyName(event.target.value)} />
                                        </div>
                                                

                                        <div className="md:col-span-5">
                                            <label for="jobTitle">Job Title</label>
                                            <input type="text" name="jobTitle" id="jobTitle" 
                                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" 
                                                value={jobTitle} 
                                                onChange={(event) => setJobTitle(event.target.value)} />
                                        </div>

                                        <div className="md:col-span-5">
                                            <label for="location">Location</label>
                                            <input type="text" name="location" id="location" 
                                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" 
                                                value={location} 
                                                onChange={(event) => setLocation(event.target.value)} />
                                        </div>

                                        <div className="md:col-span-5">
                                            <label for="salary">Salary</label>
                                            <input type="text" name="salary" id="salary" 
                                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" 
                                                value={salary} 
                                                onChange={(event) => setSalary(event.target.value)} />
                                        </div>

                                        <div className="md:col-span-5">
                                            <label for="status">Status</label>
                                            <select name="status" id="status" 
                                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" 
                                                value={status} 
                                                onChange={(event) => setStatus(event.target.value)}>
                                                <option value="Applied">Applied</option>
                                                <option value="No reply">No reply</option>
                                                <option value="Interview">Interview</option>
                                                <option value="Waiting">Waiting</option>
                                                <option value="Rejected">Rejected</option>
                                                <option value="Offer">Offer</option>
                                            </select>
                                        </div>

                                        <div className="md:col-span-5">
                                            <label for="dateApplied">Date Added</label>
                                            <input type="date" name="dateApplied" id="dateApplied" 
                                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" 
                                                value={dateAdded}
                                                onChange={(event) => setDateAdded(event.target.value)} />
                                        </div>

                                        <div className="md:col-span-5">
                                            <label for="contact">Contact</label>
                                            <input type="text" name="contact" id="contact" 
                                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" 
                                                value={contact} 
                                                onChange={(event) => setContact(event.target.value)} />
                                        </div>

                                        <div className="md:col-span-5">
                                            <label for="notes">Notes</label>
                                            <textarea name="notes" id="notes" 
                                                className="h-20 border mt-1 rounded px-4 w-full bg-gray-50" 
                                                value={notes} 
                                                onChange={(event) => setNotes(event.target.value)} />
                                        </div>

                                        <div className="md:col-span-5 text-right">
                                            <div class="inline-flex items-end">
                                                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
                                                onClick={handleSubmit}>Submit</button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};