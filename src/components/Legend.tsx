/** @format */

import React from "react";

type TLegend = {
    bgColor: string;
    title: string;
    value: string;
    average: string;
    icon: string;
};

const Legend: React.FC<TLegend> = ({
    bgColor,
    title,
    value,
    average,
    icon,
}) => {
    return (
        <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-1'>
                <div
                    style={{ backgroundColor: bgColor }}
                    className='h-3.5 w-3.5 rounded-full'
                />
                <span className='text-sm font-bold'>{title}</span>
            </div>
            <h4 className='text-[22px] font-bold'>{value}</h4>
            <div className='flex items-center gap-2'>
                <img src={icon} alt='' />
                <span className='text-sm'>{average}</span>
            </div>
        </div>
    );
};

export default Legend;
