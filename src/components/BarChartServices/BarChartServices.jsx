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
import './BarChartServices.css'; // Ensure the CSS file is imported

// Register Chart.js components
ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend
);

const BarChartServices = () => {
    const barChartData = {
        labels: ["2018", "2019", "2020", "2021", "2022", "2023", "2024"],
        datasets: [
            {
                data: [36, 95, 59, 41, 33, 100, 55],
                label: "Подсистемы по годам",
                borderColor: "rgba(75, 192, 192, 0.85)",
                borderRadius: 0,
                borderSkipped: false,
                fill: true
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Подсистемы по годам',
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
                    display: false,
                    color: "rgba(75, 192, 192, 0.85)"
                },
                ticks: {
                    color: "rgba(75, 192, 192, 0.85)"
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

    const halfAndHalfPlugin = {
        id: 'halfAndHalf',
        beforeDatasetsDraw(chart) {
            const { ctx } = chart;
            const datasetMeta = chart.getDatasetMeta(0);
            datasetMeta.data.forEach((bar, index) => {
                const { x, y, width, height } = bar;
                const halfWidth = width / 2;
                const left = x - halfWidth;
                const right = x + halfWidth;
                const top = y;
                const bottom = y + height;
                const radius = 10;

                // Draw left half in red
                ctx.fillStyle = "rgb(0, 143, 251)";
                ctx.beginPath();
                ctx.moveTo(left, bottom);
                ctx.lineTo(left, top + radius);
                ctx.quadraticCurveTo(left, top, left + radius, top);
                ctx.lineTo(x, top);
                ctx.lineTo(x, bottom);
                ctx.closePath();
                ctx.fill();

                ctx.fillStyle = "rgb(70,106,252)";
                ctx.beginPath();
                ctx.moveTo(x, bottom);
                ctx.lineTo(x, top);
                ctx.lineTo(right - radius, top);
                ctx.quadraticCurveTo(right, top, right, top + radius);
                ctx.lineTo(right, bottom);
                ctx.closePath();
                ctx.fill();
            });
        }
    };

    ChartJS.register(halfAndHalfPlugin);

    return (
        <div className='bar-chart-services-container'>
            <div className='bar-chart-services-header'>
                <h2 className='bar-chart-services-title'>Подсистемы по годам</h2>
                <span className='bar-chart-services-text'>Всего: 419</span>
            </div>
            <div className='bar-chart-services-wrapper'>
                <Bar data={barChartData} options={options} />
            </div>
        </div>
    );
};

export default BarChartServices;
