import React from 'react';
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
import './BarChartSubSystem.css'; // Ensure the CSS file is imported

// Register Chart.js components
ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend
);
console.log('hello')

const BarChartSubSystem = () => {
    const barChartData = {
        labels: ["2018", "2019", "2020", "2021", "2022", "2023", "2024"],
        datasets: [
            {
                data: [180, 200, 150, 220, 170, 300, 245],
                label: "Сервисы по годам",
                borderColor: "rgba(75, 192, 192, 0.85)",
                backgroundColor: "rgba(75, 192, 192, 0.85)",
                borderRadius: {
                    topLeft: 10,
                    topRight: 10,
                    bottomLeft: 0,
                    bottomRight: 0
                },
                borderSkipped: false,
                fill: true
            }
        ]
    };

    const options = {
        indexAxis: 'y',
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Сервисы по годам',
                font: {
                    size: 15
                }
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
                    display: true,
                    color: "rgba(161,150,150,0.85)"
                },
                ticks: {
                    color: "rgba(161,150,150,0.85)"
                }
            },
            y: {
                grid: {
                    display: false,
                    color: "rgba(75, 192, 192, 0.85)"
                },
                ticks: {
                    color: "rgba(75, 192, 192, 0.85)"
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
        <div className='bar-chart-subsystem-container'>
            <div className='bar-chart-subsystem-header'>
                <h2 className='bar-chart-subsystem-title'>Сервисы по годам</h2>
                <span className='bar-chart-subsystem-text'>Всего: 1265</span>
            </div>
            <div className='bar-chart-subsystem-wrapper'>
                <Bar data={barChartData} options={options} />
            </div>
        </div>
    );
};

export default BarChartSubSystem;
