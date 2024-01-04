import React from 'react';
import { useNavigate } from 'react-router-dom';
import { doc, deleteDoc, getDoc, updateDoc } from 'firebase/firestore';
import { auth, db } from '../Firebase';
import { IoArrowRedoOutline } from "react-icons/io5";
import { TbTrashX } from "react-icons/tb";
import { MdModeEdit } from "react-icons/md";
import { MdOutlineLabelImportant } from "react-icons/md";



export default function ApplicationTable({ applications = [], handleRefresh }) {
    const navigate = useNavigate();
    
    const handleDelete = async (id) => {
        const userId = auth.currentUser.uid;
        if (window.confirm('Are you sure you want to delete this application?')) {
            await deleteDoc(doc(db, 'users', userId, 'applications', id));
            handleRefresh();
        }
    };

    const handleWatchlist = async (id) => {
        if (window.confirm('Are you sure you want to add this application to your watchlist?')){
            const userId = auth.currentUser.uid;
            const applicationRef = doc(db, 'users', userId, 'applications', id);

            const application = await getDoc(applicationRef);
            if (application.exists()) {
                await updateDoc(applicationRef, {
                    watchlist: !application.data().watchlist,
                })
                handleRefresh();
                navigate('/watchlist');
            }
        }
    };

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
                                <tr className="font-bold text-[0.95rem] text-secondary-dark">
                                <th className="pb-3 text-start min-w-[100px]">Job Description</th>
                                <th className="pb-3 text-start min-w-[100px]">Company Name </th>
                                <th className="pb-3 text-start min-w-[100px]">Location</th>
                                <th className="pb-3 pr-12 text-start min-w-[100px]">Status</th>
                                <th className="pb-3 pr-12 text-start min-w-[100px]">Date Added</th>
                                <th className="pb-3 text-start min-w-[100px]">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {applications.map((application, index) => (
                                    <tr key={index} class="border-b border-solid last:border-b-0">
                                        <td className="p-3 pl-1">
                                            <a href={application.jobLink} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                                {application.jobTitle} <IoArrowRedoOutline className="inline-block text-sm text-blue-400 "/>
                                            </a>
                                        </td>
                                        <td className="p-3 pr-1 text-start">{application.companyName}</td>
                                        <td className="p-3 pr-1 text-start">{application.location}</td>
                                        <td className="p-3 pr-1 text-start">{application.status}</td>
                                        <td className="pr-1 text-start">{application.dateAdded}</td>
                                        <td className="flex space-x-5 p-1 pr-0 text-start">
                                            <button onClick={() => handleDelete(application.id)}>
                                                <TbTrashX className='text-red-700 text-xl'/>
                                            </button>
                                            <button onClick={() => handleEdit(application.id)}>
                                                <MdModeEdit className=' text-blue-900 text-xl'/>
                                            </button>
                                            <button onClick={() => handleWatchlist(application.id)}>
                                                <MdOutlineLabelImportant className='text-yellow-400 text-xl'/>
                                            </button>
                                        </td>
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





