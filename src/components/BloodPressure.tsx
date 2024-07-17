/** @format */

import React from "react";
import BloodPressureChart from "./BloodPressureChart";
import chevron from "../assets/icons/expand.svg";
import arrowDown from "../assets/icons/ArrowDown.svg";
import arrowUp from "../assets/icons/ArrowUp.svg";
import Legend from "./Legend";

const BloodPressure: React.FC<TPatient> = ({ patient }) => {
    return (
        <div className='min-h-[298px] bg-[#F4F0FE] rounded-2xl p-4'>
            {/* chart secion */}
            <div className='grid grid-cols-5 gap-4'>
                <div className='col-span-3 min-h-[298px] flex flex-col gap-5'>
                    <div className='flex justify-between items-center'>
                        <h3 className='text-lg font-bold'>Blood Pressure</h3>
                        <div className='flex items-center gap-4 cursor-pointer'>
                            <span className='text-sm'>Last 6 months</span>
                            <img src={chevron} alt='expand' />
                        </div>
                    </div>
                    <BloodPressureChart data={patient?.diagnosis_history} />
                </div>

                <div className='col-span-2 flex flex-col gap-4'>
                    {/*legend  */}
                    <Legend
                        bgColor='#C26EB4'
                        title='Systolic'
                        icon={arrowUp}
                        value='160'
                        average='Higher than Average'
                    />
                    <div className='w-full border-[0.3px] border-gray-300' />
                    <Legend
                        bgColor='#8C6FE6'
                        title='Diastolic'
                        icon={arrowDown}
                        value='78'
                        average='Lower than Average'
                    />
                </div>
            </div>
            {/* legend */}
        </div>
    );
};

export default BloodPressure;
