import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './BarChartSubSystem.css';

const data = [
    { год: 2018, количество: 62 },
    { год: 2019, количество: 262 },
    { год: 2020, количество: 261 },
    { год: 2021, количество: 118 },
    { год: 2022, количество: 144 },
    { год: 2023, количество: 285 },
    { год: 2024, количество: 135 }
];

const BarChartSubSystem = ({
                               width = 600,
                               height = 300,
                               layout = "vertical",
                               margin = { top: 20, right: 30, left: 20, bottom: 5 },
                               barFillColor = "#0000FF",
                               barRadius = [10, 10, 0, 0]
                           }) => {
    return (
        <div className="bar-chart-container">
            <div className="bar-chart-header">
                <h2 className="bar-chart-title">Сервисы по годам</h2>
                <span className="bar-chart-text">Всего: 1266</span>
            </div>
            <div className="bar-chart-wrapper">
                <BarChart
                    width={width}
                    height={height}
                    data={data}
                    layout={layout}
                    margin={margin}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis type="category" dataKey="год" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="количество" fill={barFillColor} radius={barRadius} />
                </BarChart>
            </div>
        </div>
    );
};

export default BarChartSubSystem;
