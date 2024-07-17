/** @format */

import React from "react";
import BloodPressure from "../components/BloodPressure";
import LabelResult from "../components/LabelResult";
import DiagnosticList from "../components/DiagnosticList";

const Diagnostic: React.FC<TPatient> = ({ patient }) => {
    return (
        <div className='lg:col-span-2 sm:col-span-1 mt-[18px] flex flex-col gap-5'>
            <div className='bg-white shadow p-5 rounded-2xl flex flex-col gap-10'>
                <h1 className='text-2xl font-bold'>Diagnosis History</h1>
                <div className='flex flex-col gap-4'>
                    <BloodPressure patient={patient} />
                    <LabelResult />
                </div>
            </div>
            <DiagnosticList patient={patient} />
        </div>
    );
};

export default Diagnostic;
