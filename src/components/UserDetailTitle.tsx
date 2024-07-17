/** @format */

import React from "react";

type TUserDetail = {
    icon: string;
    label: string;
    desc: string;
};

const UserDetailTitle: React.FC<TUserDetail> = ({ icon, label, desc }) => {
    return (
        <div className='flex gap-4 items-center'>
            <div className='h-[42px] w-[42px]'>
                <img src={icon} alt={label} />
            </div>

            <div className='flex flex-col gap-1'>
                <span className='text-sm font-medium'>{label}</span>
                <span className='text-sm font-bold'>{desc}</span>
            </div>
        </div>
    );
};

export default UserDetailTitle;
