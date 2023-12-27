import React from 'react';
import PropTypes from 'prop-types';


export default function ApplicationTable({ applications }) {
    return (
        <div>
            <div class="flex flex-wrap -mx-3 mb-5">
                <div class="w-full max-w-full px-3 mb-6  mx-auto">
                    <div class="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5">
                    <div class="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
              
                        <div class="px-9 pt-5 flex justify-between items-stretch flex-wrap min-h-[70px] pb-0 bg-transparent">
                        <h3 class="flex flex-col items-start justify-center m-2 ml-0 font-medium text-xl/tight text-dark">
                            <span class="mr-3 font-semibold text-dark">Your Header</span>
                            <span class="mt-1 font-medium text-secondary-dark text-lg/normal">Your Subheader</span>
                        </h3>
                        </div>
                 
                        <div class="flex-auto block py-8 pt-6 px-9">
                        <div class="overflow-x-auto">
                            <table class="w-full my-0 align-middle text-dark border-neutral-200">
                            <thead class="align-bottom">
                                <tr class="font-semibold text-[0.95rem] text-secondary-dark">
                                <th class="pb-3 text-start min-w-[175px]">Job Description</th>
                                <th class="pb-3 text-end min-w-[100px]">Company Name </th>
                                <th class="pb-3 text-end min-w-[100px]">Location</th>
                                <th class="pb-3 pr-12 text-end min-w-[175px]">Status</th>
                                <th class="pb-3 pr-12 text-end min-w-[100px]">Date Added</th>
                                <th class="pb-3 text-end min-w-[50px]">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {applications.map((application, index) => (
                                    <tr key={index} class="border-b border-dashed last:border-b-0">
                                        <td class="p-3 pl-0">{application.jobTitle}</td>
                                        <td class="p-3 pr-0 text-end">{application.companyName}</td>
                                        <td class="p-3 pr-0 text-end">{application.location}</td>
                                        <td class="p-3 pr-12 text-end">{application.status}</td>
                                        <td class="pr-0 text-start">{application.dateAdded}</td>
                                        <td class="p-3 pr-0 text-end">{application.action}</td>
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





