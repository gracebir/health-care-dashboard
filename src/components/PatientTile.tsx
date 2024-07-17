/** @format */

import React from "react";
import horizontal from "../assets/icons/h_tree_dots.svg";

type TPatientTile = {
    fullname: string;
    avatar: string;
    age: number;
    gender: string;
};

const PatientTile: React.FC<TPatientTile> = ({
    fullname,
    avatar,
    age,
    gender,
}) => {
    return (
        <div
            className={`flex justify-between items-center cursor-pointer py-4 px-5 hover:bg-activate-side ${
                fullname === "Jessica Taylor" && `bg-activate-side`
            }`}
        >
            <div className='flex items-center gap-3'>
                <div className='w-12 h-12'>
                    <img
                        className='w-full h-full'
                        src={avatar}
                        alt={fullname}
                    />
                </div>

                <div className='flex flex-col'>
                    <span className='text-sm font-bold'>{fullname}</span>
                    <span className='text-sm text-cl-gray'>
                        {gender}, {age}
                    </span>
                </div>
            </div>
            <a href='#'>
                <img src={horizontal} alt={"horizontal"} />
            </a>
        </div>
    );
};

export default PatientTile;
