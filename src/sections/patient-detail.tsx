/** @format */

import React from "react";
import profile from "../assets/profile.png";
import UserDetailTitle from "../components/UserDetailTitle";
import calendar from "../assets/icons/BirthIcon.svg";
import phone from "../assets/icons/PhoneIcon.svg";
import insurrance from "../assets/icons/InsuranceIcon.svg";
import male from "../assets/icons/MaleIcon.svg";
import female from "../assets/icons/FemaleIcon.svg";
import save from "../assets/icons/download.svg";
import { format } from "date-fns";

const PatientDetail: React.FC<TPatient> = ({ patient }) => {
    const formatDate = (dateString: string) => {
        const [month, day, year] = dateString.split("/").map(Number);
        const date = new Date(year, month - 1, day);
        return format(date, "MMMM d, yyyy");
    };

    return (
        <div className='col-span-1 flex flex-col gap-8'>
            <div className='bg-white shadow p-5 rounded-2xl flex flex-col gap-8'>
                <div className='max-w-[200px] mt-3 mx-auto flex flex-col gap-6'>
                    <div className='w-full h-[200px]'>
                        <img
                            className='w-full h-full object-cover'
                            src={profile}
                            alt='avatar'
                        />
                    </div>
                    <h1 className='text-2xl text-center font-extrabold'>
                        {patient?.name}
                    </h1>
                </div>
                <div className='flex flex-col gap-6'>
                    <UserDetailTitle
                        icon={calendar}
                        label={"Date Of Birth"}
                        desc={formatDate(
                            patient?.date_of_birth || "08/23/1996"
                        )}
                    />
                    <UserDetailTitle
                        icon={patient?.gender === "Male" ? male : female}
                        label={"Gender"}
                        desc={patient?.gender}
                    />
                    <UserDetailTitle
                        icon={phone}
                        label={"Contact Info."}
                        desc={patient?.phone_number}
                    />
                    <UserDetailTitle
                        icon={phone}
                        label={"Emergency Contacts"}
                        desc={patient?.emergency_contact}
                    />
                    <UserDetailTitle
                        icon={insurrance}
                        label={"Insurance Provider"}
                        desc={patient?.insurance_type}
                    />
                </div>
                <button className='py-[11px] max-w-[220px] px-7 mx-auto rounded-[41px] bg-active-blue text-sm font-bold'>
                    Show All Information
                </button>
            </div>
            <div className='bg-white shadow p-5 flex flex-col gap-7 rounded-2xl'>
                <h1 className='text-2xl font-bold'>Lab Results</h1>
                <div className='flex flex-col gap-6 h-[170px] overflow-auto scroll-item'>
                    {patient?.lab_results?.map((item, i) => (
                        <div
                            className='flex justify-between  items-center pr-2'
                            key={`${i}-${item}`}
                        >
                            <span className='text-[13px]'>{item}</span>
                            <a href='#'>
                                <img src={save} alt='save' />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PatientDetail;
