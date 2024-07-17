/** @format */

// BloodPressureChart.tsx
import React from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import "chart.js/auto";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

interface BloodPressureChartProps {
    data: DiagnosisHistory[];
}

const BloodPressureChart: React.FC<BloodPressureChartProps> = ({ data }) => {
    const diagnotic = data && data.slice(0, 6);
    const chartData = {
        labels: diagnotic?.map(
            (entry) => `${entry.month.substring(0, 3)}, ${entry.year}`
        ),
        datasets: [
            {
                label: "Systolic",
                data: diagnotic?.map(
                    (entry) => entry.blood_pressure.systolic.value
                ),
                borderColor: "#C26EB4",
                backgroundColor: "#C26EB4",
                tension: 0.4,
                fill: false,
            },
            {
                label: "Diastolic",
                data: diagnotic?.map(
                    (entry) => entry.blood_pressure.diastolic.value
                ),
                borderColor: "#8C6FE6",
                backgroundColor: "#8C6FE6",
                tension: 0.4,
                fill: false,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                display: false, // Disable the legend
            },
            title: {
                display: false,
                text: "Blood Pressure",
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                suggestedMax: 180,
            },
        },
    };

    return (
        <div className=''>
            <Line data={chartData} options={chartOptions} />
        </div>
    );
};

export default BloodPressureChart;
