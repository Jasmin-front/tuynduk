import React, { useState, useRef, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import './Chart.css';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const Chart = () => {
    const chartRef = useRef(null);
    const [visibleYears, setVisibleYears] = useState({
        all: true,
        2018: true,
        2019: true,
        2020: true,
        2021: true,
        2022: true,
        2023: true,
        2024: true
    });

    useEffect(() => {
        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();
            }
        };
    }, []);

    const data = {
        labels: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
        datasets: [
            {
                data: [0, 0, 0, 0, 0, 0, 0, 0, 283165, 29878, 40352, 1639],
                label: "2018",
                borderColor: "#3333ff",
                backgroundColor: "rgba(51, 51, 255, 0.5)",
                fill: 'origin',
                hidden: !visibleYears.all && !visibleYears[2018],
                lineTension: 0.4
            },
            {
                data: [207468, 173180, 613439, 840632, 73585, 2011625, 1439802, 3061187, 4018904, 7034161, 6823751, 6619065],
                label: "2019",
                borderColor: "#00FF00",
                backgroundColor: "rgba(0, 255, 0, 0.5)",
                fill: 'origin',
                hidden: !visibleYears.all && !visibleYears[2019],
                lineTension: 0.4
            },
            {
                data: [9694822, 10545336, 10081066, 15723910, 17008561, 16713212, 10265554, 20366978, 24894722, 24095043, 23816513, 34515977],
                label: "2020",
                borderColor: "#87CEEB",
                backgroundColor: "rgba(135, 206, 235, 0.5)",
                fill: 'origin',
                hidden: !visibleYears.all && !visibleYears[2020],
                lineTension: 0.4
            },
            {
                data: [23719175, 24236550, 25968965, 24764876, 15106919, 12658707, 30828136, 50721601, 23094400, 25014433, 25014433, 25371873],
                label: "2021",
                borderColor: "#FF0000",
                backgroundColor: "rgba(255, 0, 0, 0.5)",
                fill: 'origin',
                hidden: !visibleYears.all && !visibleYears[2021],
                lineTension: 0.4
            },
            {
                data: [14454490, 14725179, 10223954, 55456947, 70290030, 40908913, 36446357, 36332678, 70534449, 53281430, 9333899, 24285865],
                label: "2022",
                borderColor: "#FFA500",
                backgroundColor: "rgba(255, 165, 0, 0.5)",
                fill: 'origin',
                hidden: !visibleYears.all && !visibleYears[2022],
                lineTension: 0.4
            },
            {
                data: [24828353, 23068376, 38491389, 54804040, 42712054, 54514222, 57669987, 71476512, 66964508, 34683555, 24413391, 26505728],
                label: "2023",
                borderColor: "#FF4500",
                backgroundColor: "rgba(255, 69, 0, 0.5)",
                fill: 'origin',
                hidden: !visibleYears.all && !visibleYears[2023],
                lineTension: 0.4
            },
            {
                data: [42711536, 316243309, 155513928, 181473813, 138748904, 32193952, 0, 0, 0, 0, 0, 0],
                label: "2024",
                borderColor: "#800080",
                backgroundColor: "rgba(128, 0, 128, 0.5)",
                fill: 'origin',
                hidden: !visibleYears.all && !visibleYears[2024],
                lineTension: 0.4
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
                onClick: (e, legendItem) => {
                    const year = legendItem.text;
                    const updatedVisibleYears = {
                        ...visibleYears,
                        [year]: !visibleYears[year],
                        all: year === 'all' ? !visibleYears.all : visibleYears.all
                    };

                    if (year === 'all') {
                        for (let key in updatedVisibleYears) {
                            if (key !== 'all') {
                                updatedVisibleYears[key] = updatedVisibleYears.all;
                            }
                        }
                    } else {
                        updatedVisibleYears.all = Object.values(updatedVisibleYears).every(val => val);
                    }

                    setVisibleYears(updatedVisibleYears);
                }
            },
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
                    title: (context) => context[0].label
                },
                bodyFont: { size: 16 },
                footerFont: { size: 16 },
            }
        },
        scales: {
            x: {
                grid: { display: false }
            },
            y: {
                beginAtZero: true,
                grid: { display: true },
                ticks: {
                    callback: function(value) {
                        return value.toLocaleString();
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
        }
    };

    return (
        <div className='chart_container'>
            <h2 className='chart_container_title'>Годовая статистика по месяцам</h2>
            <Line ref={chartRef} data={data} options={options} width={160} height={60} />
        </div>
    );
};

export default Chart;