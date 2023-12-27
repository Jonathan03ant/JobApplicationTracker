// ApplicationForm.jsx
import React from 'react';

export default function ApplicationForm({ 
    jobLink, setJobLink,
    companyName, setCompanyName, 
    jobTitle, setJobTitle, 
    location, setLocation, 
    salary, setSalary, 
    status, setStatus, 
    dateApplied, setDateApplied, 
    contact, setContact,
    notes, setNotes, 
    handleSubmit }) {
    return (
        <form onSubmit={handleSubmit}>
            <div class="p-6 bg-gray-100 flex items-center justify-center">
                <div class="container max-w-screen-lg mx-auto">
                    <div>
                        <h2 class="font-semibold text-xl text-gray-600">Add Application</h2>
                        <p class="text-gray-500 mb-6">Please fill out all the fields.</p>

                        <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                             <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">

                                <div class="text-gray-600">
                                    <p class="font-medium text-lg">Application Details</p>
                                </div>

                                <div class="lg:col-span-2">
                                    <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">

                                        <div class="md:col-span-5">
                                            <label for="jobLink">Job Link</label>
                                            <input type="text" name="jobLink" id="jobLink" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={jobLink} onChange={(event) => setJobLink(event.target.value)} />
                                        </div>

                                        <div class="md:col-span-5">
                                            <label for="companyName">Company Name</label>
                                            <input type="text" name="companyName" id="companyName" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={companyName} onChange={(event) => setCompanyName(event.target.value)} />
                                        </div>
                                                

                                        <div class="md:col-span-5">
                                            <label for="jobTitle">Job Title</label>
                                            <input type="text" name="jobTitle" id="jobTitle" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={jobTitle} onChange={(event) => setJobTitle(event.target.value)} />
                                        </div>

                                        <div class="md:col-span-5">
                                            <label for="location">Location</label>
                                            <input type="text" name="location" id="location" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={location} onChange={(event) => setLocation(event.target.value)} />
                                        </div>

                                        <div class="md:col-span-5">
                                            <label for="salary">Salary</label>
                                            <input type="text" name="salary" id="salary" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={salary} onChange={(event) => setSalary(event.target.value)} />
                                        </div>

                                        <div class="md:col-span-5">
                                            <label for="status">Status</label>
                                            <select name="status" id="status" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={status} onChange={(event) => setStatus(event.target.value)}>
                                            <option value="Applied">Applied</option>
                                            <option value="No reply">No reply</option>
                                            <option value="Interview">Interview</option>
                                            <option value="Waiting">Waiting</option>
                                            <option value="Rejected">Rejected</option>
                                            <option value="Offer">Offer</option>
                                            </select>
                                        </div>

                                        <div class="md:col-span-5">
                                            <label for="dateApplied">Date Applied</label>
                                            <input type="date" name="dateApplied" id="dateApplied" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={dateApplied} onChange={(event) => setDateApplied(event.target.value)} />
                                        </div>

                                        <div class="md:col-span-5">
                                            <label for="contact">Contact</label>
                                            <input type="text" name="contact" id="contact" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={contact} onChange={(event) => setContact(event.target.value)} />
                                        </div>

                                        <div class="md:col-span-5">
                                            <label for="notes">Notes</label>
                                            <textarea name="notes" id="notes" class="h-20 border mt-1 rounded px-4 w-full bg-gray-50" value={notes} onChange={(event) => setNotes(event.target.value)} />
                                        </div>

                                        <div class="md:col-span-5 text-right">
                                            <div class="inline-flex items-end">
                                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleSubmit}>Submit</button>
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