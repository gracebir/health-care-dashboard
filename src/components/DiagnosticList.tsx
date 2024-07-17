/** @format */

import React from "react";

const DiagnosticList: React.FC<TPatient> = ({ patient }) => {
    const diagnostices = patient && patient.diagnostic_list;
    return (
        <div className='bg-white shadow p-5 rounded-2xl flex flex-col gap-10'>
            <h1 className='text-2xl font-bold'>Diagnostic List</h1>
            <div>
                <table className='w-full'>
                    <thead>
                        <tr>
                            <th className='px-6 py-3 bg-lightgray rounded-tl-3xl rounded-bl-3xl text-left text-sm leading-4 font-bold tracking-wider'>
                                Problem/Diagnosis
                            </th>
                            <th className='px-6 py-3 bg-lightgray text-left text-sm leading-4 font-bold tracking-wider'>
                                Description
                            </th>
                            <th className='px-6 py-3 bg-lightgray rounded-tr-3xl rounded-br-3xl text-left text-sm leading-4 font-bold tracking-wider'>
                                Status
                            </th>
                        </tr>
                    </thead>
                    {/* <div className='h-[150px] border-2 border-b-amber-200'></div> */}
                </table>
                <div className='h-36 overflow-y-auto scroll-item'>
                    <table className='min-w-full'>
                        <tbody>
                            {diagnostices?.map((diagnosis, i) => (
                                <tr
                                    key={`${i}-diagnotiscs`}
                                    className='border-t'
                                >
                                    <td className='px-6 py-4 whitespace-no-wrap'>
                                        <div className='text-sm leading-5'>
                                            {diagnosis.name}
                                        </div>
                                    </td>
                                    <td className='px-6 py-4 whitespace-no-wrap'>
                                        <div className='text-sm leading-5'>
                                            {diagnosis.description}
                                        </div>
                                    </td>
                                    <td className='px-6 py-4 whitespace-wrap'>
                                        <div className='text-sm leading-5'>
                                            {diagnosis.status}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default DiagnosticList;
