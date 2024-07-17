/** @format */

import React from "react";
import arrowDown from "../assets/icons/ArrowDown.svg";

type TLabResult = {
    imageUrl: string;
    label: string;
    status: string;
    measure: string;
    bgColor: string;
};

const LabResutTitle: React.FC<TLabResult> = ({
    imageUrl,
    label,
    status,
    measure,
    bgColor,
}) => {
    return (
        <div
            style={{ backgroundColor: bgColor }}
            className='w-full p-4 rounded-xl flex flex-col gap-4'
        >
            <div className='h-24 w-24'>
                <img src={imageUrl} alt={label} />
            </div>

            <div>
                <h3 className='text-base font-medium'>{label}</h3>
                <h1 className='text-3xl font-extrabold'>{measure}</h1>
            </div>
            {status === "Normal" ? (
                <span>
                    <h3 className='text-sm'>{status}</h3>
                </span>
            ) : (
                <div className='flex gap-2 items-center'>
                    <img src={arrowDown} alt='arrow' />
                    <h3 className='text-sm'>{status}</h3>
                </div>
            )}
        </div>
    );
};

export default LabResutTitle;
