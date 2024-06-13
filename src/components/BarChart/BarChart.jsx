import React from "react";
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import './BarChart.css'; // Ensure the CSS file is imported

// Register Chart.js components
ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend
);

const BarChart = () => {
    const barChartData = {
        labels: ["2018", "2019", "2020", "2021", "2022", "2023", "2024"],
        datasets: [
            {
                data: [34, 64, 21, 30, 20, 70, 47],
                label: "Участники",
                borderColor: "rgba(0, 143, 251, 0.85)",
                backgroundColor: "rgba(0, 143, 251, 0.85)",
                borderRadius: {
                    topLeft: 10,
                    topRight: 10,
                    bottomLeft: 0,
                    bottomRight: 0
                },
                borderSkipped: false,
                hoverBackgroundColor: "white",
                fill: true
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                fontSize: 15
            },
            legend: {
                display: true,
                position: "top"
            },
            tooltip: {
                enabled: true
            }
        },
        scales: {
            x: {
                grid: {
                    display: false,
                    color: "rgba(0, 143, 251, 0.85)"
                },
                ticks: {
                    color: "rgba(0, 143, 251, 0.85)"
                }
            },
            y: {
                grid: {
                    display: true,
                    color: "rgba(161,150,150,0.85)"
                },
                ticks: {
                    color: "rgba(161,150,150,0.85)"
                }
            }
        },
        hover: {
            mode: 'nearest',
            intersect: true,
            onHover: (event, chartElement) => {
                if (chartElement.length) {
                    event.native.target.style.cursor = 'pointer';
                } else {
                    event.native.target.style.cursor = 'default';
                }
            }
        }
    };

    return (
        <div className='chart-container'>
            <div className='chart-container-header'>
                <h2 className='chart-container-title'>Участники по годам</h2>
                <span className='chart-container-text'>Всего: 286</span>
            </div>
            <div className='bar-chart-wrapper'>
                <Bar  data={barChartData} options={options} />
            </div>
        </div>
    );
};

export default BarChart;