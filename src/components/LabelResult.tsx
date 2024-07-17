/** @format */

import React from "react";
import LabResutTitle from "./LabResutTitle";
import heart from "../assets/diagostic/HeartBPM.svg";
import respiration from "../assets/diagostic/respiratory-rate.svg";
import tempature from "../assets/diagostic/temperature.svg";

const healthMetrics = [
    {
        id: 1,
        measure: "20 bpm",
        label: "Respiratory Rate",
        bgColor: "#e0f7fa", // light blue
        imageUrl: respiration, // replace with actual path
        status: "Normal",
    },
    {
        id: 2,
        measure: "98.6°F",
        label: "Temperature",
        bgColor: "#ffe6e6", // light pink
        imageUrl: tempature, // replace with actual path
        status: "Normal",
    },
    {
        id: 3,
        measure: "78 bpm",
        label: "Heart Rate",
        bgColor: "#ffe6f1", // light pink
        imageUrl: heart, // replace with actual path
        status: "Lower than Average",
    },
];

const LabelResult: React.FC = () => {
    return (
        <div className='grid md:grid-cols-1 lg:grid-cols-3 gap-4'>
            {healthMetrics.map((health) => (
                <LabResutTitle key={health.id} {...health} />
            ))}
        </div>
    );
};

export default LabelResult;
