/** @format */

import { useEffect, useState } from "react";
import Header from "./components/Header";
import Diagnostic from "./sections/diagnostic";
import Patient from "./sections/patient";
import PatientDetail from "./sections/patient-detail";
import axios from "axios";

function App() {
    const [data, setData] = useState<ApiResponse | null>(null);
    const [loading, setLoading] = useState(true);
    const [_, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const username = "coalition";
            const password = "skills-test";
            const credentials = btoa(`${username}:${password}`);

            try {
                const response = await axios.get<ApiResponse>(
                    "https://fedskillstest.coalitiontechnologies.workers.dev",
                    {
                        headers: {
                            Authorization: `Basic ${credentials}`,
                            "Content-Type": "application/json",
                        },
                    }
                );

                setData(response.data);
                setLoading(false);
            } catch (error: any) {
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const emily_data =
        data && data.find((patient) => patient.name === "Jessica Taylor");

    return (
        <div className='bg-lightgray min-h-[100vh] p-[18px] font-manrope text-dark-blue'>
            <Header />
            <main className='max-w-[1564px] min-h-[86vh]  mx-auto grid lg:grid-cols-4 sm:grid-cols-1 gap-[33px] mt-[18px]'>
                {/* patients */}
                <Patient patients={data!} isLoading={loading} />
                {/* dignastics */}
                <Diagnostic patient={emily_data!} />
                {/* dignastics */}
                <PatientDetail patient={emily_data!} />
            </main>
        </div>
    );
}

export default App;
