import React, { useRef, useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import './StateChart.css'
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const StateChart = () => {
    const chartRef = useRef(null);
    const [cursorX, setCursorX] = useState(0);

    useEffect(() => {
        return () => {
            if (chartRef.current) {
                chartRef.current.chartInstance.destroy();
            }
        };
    }, []);

    const data = {
        labels: ["07 Май", "08 Май", "09 Май", "10 Май", "11 Май", "12 Май", "13 Май", "14 Май", "15 Май", "16 Май", "17 Май", "18 Май", "19 Май", "20 Май", "21 Май", "22 Май", "23 Май", "24 Май", "25 Май", "26 Май", "27 Май", "28 Май", "29 Май", "30 Май", "31 Май", "01 Июнь", "02 Июнь"],
        datasets: [
            {
                label: "Данные",
                data: [5480763, 5086134, 1818408, 5905090, 4516733, 3400055, 6262868, 5313270, 5187741, 4981680, 4806195, 3073341, 2805998, 5174635, 5438283, 5291658, 5149035,4950013 ,3548237 , 2578990,5308438 ,5120584 , 5392238,5389880 ,5306142 ,3820247 ,5350317 ],
                borderColor: "#87CEEB",
                backgroundColor: "rgba(135, 206, 235, 0.5)",
                fill: 'start',
                lineTension: 0.4
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            tooltip: {
                mode: 'index',
                intersect: false,
                callbacks: {
                    label: (context) => {
                        let label = context.dataset.label || '';
                        if (label) {
                            label += ': ';
                        }
                        label += context.raw.toLocaleString();
                        return label;
                    },
                    title: (context) => {
                        return context[0].label; // Show the full date on hover
                    }
                },
                bodyFont: {
                    size: 16 // Make tooltip numbers bigger
                },
                footerFont: {
                    size: 16 // Make tooltip footer bigger
                },
            },
            legend: {
                display: true,
                position: 'top',
            }
        },
        scales: {
            x: {
                type: 'category',
                grid: {
                    display: false, // Hide vertical grid lines
                },
                ticks: {
                    callback: function(value, index) {
                        // Show every 2nd day label
                        return index % 2 === 0 ? this.getLabelForValue(value) : '';
                    },
                    font: {
                        size: 14 // Default font size for day labels
                    },
                }
            },
            y: {
                beginAtZero: true,
                grid: {
                    display: true // Show horizontal grid lines
                },
                ticks: {
                    callback: function(value) {
                        return value.toLocaleString(); // Format y-axis values with commas
                    }
                }
            }
        },
        interaction: {
            mode: 'index',
            intersect: false,
            axis: 'x'
        },
        elements: {
            point: {
                radius: 5,
                hoverRadius: 7,
                pointStyle: 'circle'
            },
            line: {
                borderWidth: 2,
                tension: 0.4
            }
        },
        hover: {
            mode: 'index',
            intersect: false,
            onHover: (event, activeElements) => {
                const chart = chartRef.current.chartInstance;
                if (activeElements.length > 0) {
                    setCursorX(event.offsetX);
                    chart.tooltip.setActiveElements(activeElements, { x: event.offsetX, y: event.offsetY });
                    chart.draw();
                } else {
                    setCursorX(null);
                    chart.tooltip.setActiveElements([], {});
                    chart.draw();
                }
            }
        }
    };

    return (
        <div className='state_chart_container'>
            <h2 className='state_chart_container_title'>Количество запросов за последний месяц, сгруппированных по дням.</h2>
            <Line
                ref={chartRef}
                data={data}
                options={options}
                width={160}
                height={60}
            />
            {cursorX !== null && (
                <div
                    style={{
                        position: 'absolute',
                        left: cursorX,
                        top: '50px', // Adjust the top position as needed
                        width: '1px',
                        height: 'calc(100% - 50px)', // Adjust the height as needed
                        backgroundColor: 'blue',
                        pointerEvents: 'none' // Ensure the line doesn't interfere with chart interaction
                    }}
                />
            )}
        </div>
    );
};

export default StateChart;
