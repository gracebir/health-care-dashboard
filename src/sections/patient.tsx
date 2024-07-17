/** @format */
import React from "react";
import search from "../assets/icons/search.svg";
import PatientTile from "../components/PatientTile";

type TPatients = {
    patients?: ApiResponse;
    isLoading: boolean;
};

const Patient: React.FC<TPatients> = ({ patients, isLoading }) => {
    return (
        <div className='bg-white shadow p-5 col-span-1 rounded-2xl flex flex-col gap-10 mt-[18px]'>
            <div className='flex items-center justify-between'>
                <h1 className='font-extrabold text-2xl'>Patients</h1>
                <img src={search} alt='search-patient' />
            </div>
            {isLoading ? (
                <div className='flex items-center h-[94vh] overflow-y-scroll scroll-item'>
                    <h1 className='text-xl font-bold'>Loading...</h1>
                </div>
            ) : (
                <div className='flex flex-col h-[94vh] overflow-y-scroll scroll-item'>
                    {patients?.map((patient) => (
                        <PatientTile
                            key={patient.phone_number}
                            age={patient.age}
                            avatar={patient.profile_picture}
                            fullname={patient.name}
                            gender={patient.gender}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Patient;
