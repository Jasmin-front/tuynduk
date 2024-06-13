import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import './PieСhart.css';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const PieChart = () => {
    const [selectedYear, setSelectedYear] = useState("all");

    const data = {
        2018: { commercial: 1, government: 33 },
        2019: { commercial: 31, government: 33 },
        2020: { commercial: 19, government: 2 },
        2021: { commercial: 26, government: 4 },
        2022: { commercial: 17, government: 3 },
        2023: { commercial: 65, government: 5 },
        2024: { commercial: 43, government: 4 },
    };

    const getPieChartData = () => {
        let commercialPercentage, governmentPercentage;

        if (selectedYear === "all") {
            const combinedData = Object.keys(data).reduce((acc, year) => {
                acc.commercial += data[year].commercial;
                acc.government += data[year].government;
                return acc;
            }, { commercial: 0, government: 0 });

            const total = combinedData.commercial + combinedData.government;
            commercialPercentage = ((combinedData.commercial / total) * 100).toFixed(2);
            governmentPercentage = ((combinedData.government / total) * 100).toFixed(2);

            return {
                labels: ["Коммерческая организация", "Государственный орган"],
                datasets: [{
                    data: [combinedData.commercial, combinedData.government],
                    backgroundColor: ["rgba(0, 143, 251, 1)", "rgba(0, 227, 150, 1)"],
                    hoverBackgroundColor: ["rgba(0, 143, 251, 0.5)", "rgba(0, 227, 150, 0.5)"],
                    borderWidth: 2,
                    cutout: "65%",
                }],
                text: `${commercialPercentage}% / ${governmentPercentage}%`
            };
        } else {
            const total = data[selectedYear].commercial + data[selectedYear].government;
            commercialPercentage = ((data[selectedYear].commercial / total) * 100).toFixed(2);
            governmentPercentage = ((data[selectedYear].government / total) * 100).toFixed(2);

            return {
                labels: ["Коммерческая организация", "Государственный орган"],
                datasets: [{
                    data: [data[selectedYear].commercial, data[selectedYear].government],
                    backgroundColor: ["rgba(0, 143, 251, 1)", "rgba(0, 227, 150, 1)"],
                    hoverBackgroundColor: ["rgba(0, 143, 251, 0.5)", "rgba(0, 227, 150, 0.5)"],
                    borderWidth: 2,
                    cutout: "65%",
                }],
                text: `${commercialPercentage}% / ${governmentPercentage}%`
            };
        }
    };

    const centerTextPlugin = {
        id: 'centerText',
        beforeDraw: (chart) => {
            const { width, height, ctx } = chart;
            ctx.restore();
            const fontSize = (height / 114).toFixed(2);
            ctx.font = `${fontSize}em sans-serif`;
            ctx.textBaseline = 'middle';
            const text = chart.data.text;
            if (text) {
                const textX = Math.round((width - ctx.measureText(text).width) / 2);
                const textY = height / 2;
                ctx.fillText(text, textX, textY);
            }
            ctx.save();
        }
    };

    ChartJS.register(centerTextPlugin);

    const toggleYearVisibility = (year) => {
        setSelectedYear(year);
    };

    return (
        <div>
            <div>
                <div className='chart_container_btns'>
                    <button
                        className={`chart_container_min_btns ${selectedYear === "all" ? "active" : ""}`}
                        onClick={() => toggleYearVisibility("all")}
                    >
                        Все
                    </button>
                    {Object.keys(data).map(year => (
                        <button
                            className={`chart_container_min_btns ${selectedYear === year ? "active" : ""}`}
                            key={year}
                            onClick={() => toggleYearVisibility(year)}
                        >
                            {year}
                        </button>
                    ))}
                </div>
            </div>
            <div className='pie-chart-container'>

                <div className='chart_container_min'>
                    <h2 className='chart_container_title'>Количество участников</h2>
                    <span className='chart_container_text'>Всего: 286</span>
                </div>
                <div className="chart-wrapper">
                    <Pie
                        options={{
                            plugins: {
                                title: {
                                    display: true,
                                    font: {
                                    }
                                },
                                legend: {
                                    display: 'flex',
                                    position: "bottom"
                                },
                                centerText: {
                                    display: true
                                }
                            },
                            maintainAspectRatio: false
                        }}
                        data={getPieChartData()}
                    />
                </div>
            </div>
        </div>
    );
};

export default PieChart;