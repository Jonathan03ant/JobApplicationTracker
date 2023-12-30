import React from 'react';
import PropTypes from 'prop-types';


export default function ApplicationTable({ applications = [] }) {
    return (
        <div>
            <div className="flex flex-wrap -mx-3 mb-5">
                <div className="w-full max-w-full px-3 mb-6  mx-auto">
                    <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5">
                    <div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
              
                        <div className="px-9 pt-5 flex justify-between items-stretch flex-wrap min-h-[70px] pb-0 bg-transparent">
                        <h3 className="flex flex-col items-start justify-center m-2 ml-0 font-medium text-xl/tight text-dark">
                            <span className="mr-3 font-semibold text-dark">You have X Applications</span>
                            <span className="mt-1 font-medium text-secondary-dark text-lg/normal">Application Lists</span>
                        </h3>
                        </div>
                 
                        <div className="flex-auto block py-8 pt-6 px-9">
                        <div className="overflow-x-auto">
                            <table className="w-full my-0 align-middle text-dark border-neutral-200">
                            <thead className="align-bottom">
                                <tr className="font-semibold text-[0.95rem] text-secondary-dark">
                                <th className="pb-3 text-start min-w-[175px]">Job Description</th>
                                <th className="pb-3 text-end min-w-[100px]">Company Name </th>
                                <th className="pb-3 text-end min-w-[100px]">Location</th>
                                <th className="pb-3 pr-12 text-end min-w-[175px]">Status</th>
                                <th className="pb-3 pr-12 text-end min-w-[100px]">Date Added</th>
                                <th className="pb-3 text-end min-w-[50px]">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {applications.map((application, index) => (
                                    <tr key={index} class="border-b border-dashed last:border-b-0">
                                        <td className="p-3 pl-0">{application.jobTitle}</td>
                                        <td className="p-3 pr-0 text-end">{application.companyName}</td>
                                        <td className="p-3 pr-0 text-end">{application.location}</td>
                                        <td className="p-3 pr-12 text-end">{application.status}</td>
                                        <td className="pr-0 text-start">{application.dateAdded}</td>
                                        <td className="p-3 pr-0 text-end">Action</td>
                                    </tr>
                                ))}
                            </tbody>
                            </table>
                        </div>
                        </div>
                       
                    </div>
                    </div>
                </div>
                </div>
        </div>
    );
};





